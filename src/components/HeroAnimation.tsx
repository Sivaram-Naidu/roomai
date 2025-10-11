import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((e.clientX - centerX) / 20);
      mouseY.set((e.clientY - centerY) / 20);
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2.5 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.4 + 0.3;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 3;
          this.y -= Math.sin(angle) * force * 3;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.baseX - this.x;
            this.x += dx * 0.05;
          }
          if (this.y !== this.baseY) {
            const dy = this.baseY - this.y;
            this.y += dy * 0.05;
          }
        }

        this.baseX += this.speedX;
        this.baseY += this.speedY;

        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseY > canvas.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas.height;
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(251, 146, 60, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(251, 146, 60, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            const gradient = ctx.createLinearGradient(particle.x, particle.y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, `rgba(251, 146, 60, ${0.25 * (1 - distance / 130)})`);
            gradient.addColorStop(0.5, `rgba(249, 115, 22, ${0.15 * (1 - distance / 130)})`);
            gradient.addColorStop(1, `rgba(251, 146, 60, ${0.25 * (1 - distance / 130)})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <motion.div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.12), rgba(249, 115, 22, 0.08), transparent)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] rounded-full blur-3xl"
        style={{
          x: useSpring(useMotionValue(0).set(-smoothMouseX.get()), springConfig),
          y: useSpring(useMotionValue(0).set(-smoothMouseY.get()), springConfig),
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.06), transparent)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
      >
        <motion.div
          className="relative w-[600px] h-[600px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div
            className="absolute inset-0 border border-orange-500/10 rounded-full shadow-lg shadow-orange-500/5"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-16 border border-orange-500/15 rounded-full shadow-lg shadow-orange-400/5"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute inset-32 border border-orange-400/20 rounded-full shadow-md shadow-orange-500/10"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute w-3 h-3 rounded-full bg-orange-500/50 blur-[2px]"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {[...Array(8)].map((_, i) => {
        const angle = (i * 45);
        return (
          <motion.div
            key={i}
            className="absolute w-px h-16 origin-bottom"
            style={{
              left: '50%',
              top: '50%',
              background: 'linear-gradient(to bottom, rgba(251, 146, 60, 0.4), transparent)',
              transform: `rotate(${angle}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        );
      })}
    </div>
  );
};

export default HeroAnimation;
