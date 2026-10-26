import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let x = -200, y = -200;
    let tx = -200, ty = -200;
    let rafId = null;

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const onLeave = () => { tx = -200; ty = -200; };

    const tick = () => {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      el.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[1] hidden h-[400px] w-[400px] rounded-full opacity-[0.07] blur-[80px] dark:opacity-[0.12] lg:block"
      style={{ background: "radial-gradient(circle, #5361ff 0%, transparent 70%)" }}
      aria-hidden="true"
    />
  );
}
