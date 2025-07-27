"use client";

import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Check for user preference in localStorage
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    
    // Check for system preference if no saved preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return { theme, toggleTheme };
}