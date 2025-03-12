"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force client-side rendering to avoid hydration mismatch
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    
    // Apply stored theme preferences on initial load
    if (typeof window !== "undefined") {
      // Apply theme mode (light/dark)
      const storedThemeMode = localStorage.getItem("theme-mode");
      if (storedThemeMode) {
        document.documentElement.setAttribute("data-theme", storedThemeMode);
      }
      
      // Apply theme color
      const storedThemeColor = localStorage.getItem("theme-preference");
      if (storedThemeColor) {
        document.documentElement.classList.remove(
          "theme-blue", "theme-green", "theme-red", "theme-purple", "theme-orange"
        );
        document.documentElement.classList.add(`theme-${storedThemeColor}`);
      }
    }
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 