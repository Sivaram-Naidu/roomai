import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import crypto from "crypto"; // 1. Import crypto

// --- LOAD KEYS FROM ENVIRONMENT VARIABLES ---
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET || !GOOGLE_SCRIPT_URL) {
  console.error("FATAL ERROR: Missing one or more environment variables.");
  // Optionally exit or handle this more gracefully
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

app.post("/create-order", async (req, res) => {
  const { Amount, FullName, Email, Phone, OrgName, EventName } = req.body;
  const options = {
    amount: Amount * 100, // Amount in paise
    currency: "INR",
    receipt: `receipt_${new Date().getTime()}`,
    notes: { FullName, Email, Phone, OrgName, EventName },
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

app.post("/verify-payment", async (req, res) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    FullName,
    Email,
    Phone,
    OrgName,
    EventName,
  } = req.body;

  try {
    // --- 2. START: USE CRYPTO FOR VALIDATION ---
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const paymentVerified = expectedSignature === razorpay_signature;
    // --- END: USE CRYPTO FOR VALIDATION ---

    if (!paymentVerified) {
      console.error("Payment verification failed: Invalid signature");
      return res
        .status(400)
        .json({ status: "error", message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error during payment verification:", error); // Log the actual error
    return res
      .status(500)
      .json({
        status: "error",
        message: "Internal server error during verification",
      }); // Generic message to client
  }

  // If verified, save to Google Sheets
  try {
    const formData = new URLSearchParams(); // Correctly initialize URLSearchParams
    formData.append("FullName", FullName);
    formData.append("Email", Email);
    formData.append("Phone", Phone);
    formData.append("OrgName", OrgName);
    formData.append("EventName", EventName);
    formData.append("PaymentID", razorpay_payment_id);
    formData.append("Price", "paid");

    const sheetResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
    });
    const sheetResult = await sheetResponse.json();

    if (sheetResult.result === "success") {
      console.log("Successfully saved to Google Sheet");
      res.json({
        status: "success",
        message: "Payment verified and registration saved!",
      });
    } else {
      throw new Error(sheetResult.message || "Failed to save to Google Sheet");
    }
  } catch (error) {
    console.error("Error saving to Google Sheet:", error.message);
    // Still send success to the user since payment was good
    res.json({
      status: "success",
      message: "Payment verified! (Error saving registration)",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
