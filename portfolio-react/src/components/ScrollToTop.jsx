import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setVisible(scrolled > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-[#5361ff] to-[#7b68ee] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />

      {/* Back to top */}
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#5361ff] to-[#7b68ee] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </>
  );
}
