import { useEffect, useRef } from "react";

export default function StarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{ x: number; y: number; radius: number; opacity: number }> = [];
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        const isDark = document.documentElement.classList.contains('dark');
        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${star.opacity})`
          : `rgba(0, 0, 0, ${star.opacity * 0.3})`;
        ctx.fill();

        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      data-testid="stars-canvas"
    />
  );
}
