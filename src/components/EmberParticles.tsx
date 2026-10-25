import React, { useEffect, useRef } from 'react';

interface EmberParticlesProps {
  className?: string;
  density?: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  color: string;
  isSpark: boolean;
}

export const EmberParticles: React.FC<EmberParticlesProps> = ({
  className = '',
  density = 45,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const emberColors = [
      '#FFA500', // Amber gold
      '#FF5722', // Vivid ember
      '#E65B20', // Fiery orange
      '#D7AD62', // Molten gold
      '#992211', // Blood ember
      '#443835', // Dark ash mote
    ];

    const particles: Particle[] = [];
    const count = Math.min(density, window.innerWidth < 768 ? 22 : density);

    const createParticle = (spawnAtBottom = false): Particle => {
      const isSpark = Math.random() < 0.25;
      const isAsh = !isSpark && Math.random() < 0.2;
      
      return {
        x: Math.random() * width,
        y: spawnAtBottom ? height + Math.random() * 20 : Math.random() * height,
        size: isSpark ? Math.random() * 2.2 + 1.2 : isAsh ? Math.random() * 2.5 + 1.5 : Math.random() * 1.8 + 0.8,
        speedY: isSpark ? Math.random() * 1.2 + 0.8 : Math.random() * 0.6 + 0.2,
        speedX: (Math.random() - 0.48) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        maxOpacity: isSpark ? 0.95 : isAsh ? 0.35 : 0.8,
        pulseSpeed: Math.random() * 0.04 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        color: isAsh ? '#3A302D' : emberColors[Math.floor(Math.random() * (emberColors.length - 1))],
        isSpark,
      };
    };

    for (let i = 0; i < count; i++) {
      particles.push(createParticle(false));
    }

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 16.66, 2.0);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY * delta;
        p.x += Math.sin(p.pulsePhase) * (p.speedX * delta);
        p.pulsePhase += p.pulseSpeed * delta;

        // Oscillate opacity
        const currentOpacity =
          Math.max(0.1, Math.sin(p.pulsePhase) * 0.4 + 0.5) * p.maxOpacity;

        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = p.color;

        // Glow for hot sparks
        if (p.isSpark) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Respawn if out of bounds
        if (p.y < -10 || p.x < -20 || p.x > width + 20) {
          particles[i] = createParticle(true);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-20 h-full w-full ${className}`}
    />
  );
};
