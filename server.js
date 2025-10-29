import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

import razorpayUtils from "razorpay/dist/utils/razorpay-utils.js";
const { validate } = razorpayUtils;
// --- END: MODIFIED IMPORT ---

const app = express();
app.use(cors());
// Use bodyParser.json() as a function
app.use(bodyParser.json());

const RAZORPAY_KEY_ID = "rzp_live_RXfGkXxK4K1Rra";
const RAZORPAY_KEY_SECRET = "RPQz9jl8Dh5GAqAhaKx8pLDK";
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw9ZbGMOJAfDQtdLeUBcbuYMlqdBLa8TT1qpRpLhuPLFkh79sz9tl1Vvb8IzJN3lzj9/exec";

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
    notes: {
      FullName,
      Email,
      Phone,
      OrgName,
      EventName,
    },
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
    // Re-create the signed body
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    // Use the validate method
    const paymentVerified = validate(
      body,
      razorpay_signature,
      RAZORPAY_KEY_SECRET
    );

    if (!paymentVerified) {
      console.error("Payment verification failed: Invalid signature");
      return res
        .status(400)
        .json({ status: "error", message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error during payment verification:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error during verification",
    });
  }

  // If verification is successful, save to Google Sheets
  try {
    const formData = new URLSearchParams();
    formData.append("FullName", FullName);
    formData.append("Email", Email);
    formData.append("Phone", Phone);
    formData.append("OrgName", OrgName);
    formData.append("EventName", EventName);
    formData.append("PaymentID", razorpay_payment_id);
    formData.append("Price", "paid"); // Hardcode as paid

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
    // Send success to user even if sheet fails, as payment was verified
    res.json({
      status: "success",
      message:
        "Payment verified! (Error saving to sheet, please check server logs)",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
