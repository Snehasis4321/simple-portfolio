import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Apply class to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system preference changes — only applies when user hasn't manually set a preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => {
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.startViewTransition(() => {
        setTheme((t) => (t === "dark" ? "light" : "dark"));
      });
    } else {
      setTheme((t) => (t === "dark" ? "light" : "dark"));
    }
  };

  // Let user reset to system preference
  const resetToSystem = () => {
    localStorage.removeItem("theme");
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  };

  return { theme, toggle, resetToSystem };
}
