// src/components/ThemeToggle.tsx
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="rounded bg-gray-200 p-2 px-4 text-sm dark:bg-gray-800 dark:text-white"
    >
      {isDark ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
    </button>
  );
}
