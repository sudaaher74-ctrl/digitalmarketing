"use client";
import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Parallax mouse target
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      // Normalized coordinates: -1 to 1
      mouseX = (e.clientX / width) * 2 - 1;
      mouseY = (e.clientY / height) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Responsive Star count
    const getStarCount = () => {
      if (width < 768) return 450;
      if (width < 1024) return 900;
      return 1800;
    };

    let stars = [];
    let glowParticles = [];
    let shootingStars = [];
    
    const starColors = ["#FFFFFF", "#EDEBFF", "#DCD5FF", "#BCAEFF"];

    const init = () => {
      canvas.width = width;
      canvas.height = height;

      // Init Stars
      stars = [];
      const numStars = getStarCount();
      for (let i = 0; i < numStars; i++) {
        // Assign to 3 layers
        const layer = Math.random();
        let parallaxFactor = 1;
        let sizeRange = [0.5, 1];
        if (layer > 0.8) {
          parallaxFactor = 6; // Large stars
          sizeRange = [1.5, 2.5];
        } else if (layer > 0.4) {
          parallaxFactor = 3; // Medium stars
          sizeRange = [1, 1.5];
        } else {
          parallaxFactor = 1; // Tiny stars
          sizeRange = [0.5, 1];
        }

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
          color: starColors[Math.floor(Math.random() * starColors.length)],
          baseAlpha: Math.random() * 0.6 + 0.2,
          alpha: Math.random() * 0.6 + 0.2,
          twinkleSpeed: Math.random() * 0.005 + 0.002,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
          parallax: parallaxFactor,
        });
      }

      // Init Glow Particles
      glowParticles = [];
      const numParticles = width < 768 ? 15 : Math.floor(Math.random() * 15 + 25); // 25-40
      for (let i = 0; i < numParticles; i++) {
        glowParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 22 + 8, // 8px to 30px
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          alpha: Math.random() * 0.17 + 0.08, // 0.08 - 0.25
          parallax: 12,
        });
      }
    };

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Shooting Star logic
    let nextShootingStarTime = Date.now() + Math.random() * 12000 + 8000;

    const spawnShootingStar = () => {
      const angle = Math.random() * Math.PI * 2; // Random direction
      const speed = Math.random() * 10 + 15;
      
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: Math.random() * 0.015 + 0.01,
      });
      nextShootingStarTime = Date.now() + Math.random() * 12000 + 8000;
    };

    const drawBackground = () => {
      const gradient = ctx.createRadialGradient(
        width / 2, height / 3, 0,
        width / 2, height / 3, Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, "#18113F"); // Top/Center
      gradient.addColorStop(0.5, "#09051F"); // Middle
      gradient.addColorStop(1, "#02020A"); // Bottom/Edges
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawNebula = (offsetX, offsetY) => {
      // Nebula: Layer 5, 20px parallax
      const nebulaX = width / 2 + offsetX * 20;
      const nebulaY = height / 3 + offsetY * 20;
      
      const gradient = ctx.createRadialGradient(
        nebulaX, nebulaY, 0,
        nebulaX, nebulaY, width * 0.4
      );
      gradient.addColorStop(0, "rgba(111, 69, 255, 0.12)"); // #6F45FF
      gradient.addColorStop(0.5, "rgba(138, 107, 255, 0.05)"); // #8A6BFF
      gradient.addColorStop(1, "rgba(77, 43, 255, 0)"); // #4D2BFF
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const animate = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return; // Pause animation if tab is hidden
      }
      
      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      
      // 1. Background
      drawBackground();
      
      // 2. Nebula Glow
      drawNebula(targetX, targetY);

      // 3. Stars
      stars.forEach(star => {
        // Twinkle
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha >= star.baseAlpha + 0.3 || star.alpha >= 1) star.twinkleDir = -1;
        if (star.alpha <= star.baseAlpha - 0.3 || star.alpha <= 0.1) star.twinkleDir = 1;

        const x = star.x - targetX * star.parallax;
        const y = star.y - targetY * star.parallax;

        // Wrap around smoothly
        let wrappedX = (x % width + width) % width;
        let wrappedY = (y % height + height) % height;

        ctx.beginPath();
        ctx.arc(wrappedX, wrappedY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // 4. Glow Particles
      glowParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < -100) p.x = width + 100;
        if (p.x > width + 100) p.x = -100;
        if (p.y < -100) p.y = height + 100;
        if (p.y > height + 100) p.y = -100;

        const px = p.x - targetX * p.parallax;
        const py = p.y - targetY * p.parallax;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size);
        grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`);
        
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // 5. Shooting stars
      if (Date.now() > nextShootingStarTime) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life -= ss.decay;

        if (ss.life <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.vx * 8, ss.y - ss.vy * 8); // Motion blur trail
        
        const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.vx * 8, ss.y - ss.vy * 8);
        grad.addColorStop(0, `rgba(255, 255, 255, ${ss.life})`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`);
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#02020A]">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full breathing-canvas"
      />
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 w-full h-full mix-blend-overlay opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <style>{`
        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.01); }
          100% { transform: scale(1); }
        }
        .breathing-canvas {
          animation: breathe 18s ease-in-out infinite;
          transform-origin: center center;
        }
      `}</style>
    </div>
  );
}
