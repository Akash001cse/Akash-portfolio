import { useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light" | "system";

function apply(theme: Theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(stored);
    apply(stored);
  }, []);

  const update = useCallback((t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    apply(t);
  }, []);

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggle = useCallback(() => update(isDark ? "light" : "dark"), [isDark, update]);

  return { theme, isDark, setTheme: update, toggle };
}
