"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";
import { useThemeCustomizer } from "@/hooks/use-theme-customizer";

const fonts = [
  { name: "Inter", value: "inter" },
  { name: "Poppins", value: "poppins" },
  { name: "Montserrat", value: "montserrat" },
  { name: "Roboto", value: "roboto" },
];

const colors = [
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Red", value: "red" },
  { name: "Purple", value: "purple" },
  { name: "Orange", value: "orange" },
];

const radiusScales = [
  { name: "Square", value: 0 },
  { name: "Slightly Rounded", value: 0.5 },
  { name: "Fully Rounded", value: 1 },
];

export function ThemeCustomizer() {
  const { radius, setRadius, font, setFont, color, setColor } = useThemeCustomizer();

  // Apply saved settings when page loads
  useEffect(() => {
    // Apply radius
    const root = document.documentElement;
    root.style.setProperty("--radius", `${radius}rem`);
    
    // Apply font
    root.classList.remove("font-inter", "font-poppins", "font-montserrat", "font-roboto");
    root.classList.add(`font-${font}`);
    document.body.style.fontFamily = font === "inter" ? "var(--font-inter)" :
                                     font === "poppins" ? "var(--font-poppins)" :
                                     font === "montserrat" ? "var(--font-montserrat)" :
                                     font === "roboto" ? "var(--font-roboto)" : "var(--font-inter)";
    
    // Apply color theme
    root.classList.remove("theme-blue", "theme-green", "theme-red", "theme-purple", "theme-orange");
    root.classList.add(`theme-${color}`);
    
    // Sync with localStorage
    localStorage.setItem("theme-preference", color);
  }, [radius, font, color]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Customize Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Theme Customization</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="text-xs">Font</DropdownMenuLabel>
        {fonts.map((f) => (
          <DropdownMenuItem
            key={f.value}
            onClick={() => setFont(f.value)}
            className={font === f.value ? "bg-accent" : ""}
          >
            {f.name}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="text-xs">Color Theme</DropdownMenuLabel>
        {colors.map((c) => (
          <DropdownMenuItem
            key={c.value}
            onClick={() => setColor(c.value)}
            className={color === c.value ? "bg-accent" : ""}
          >
            {c.name}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="text-xs">Corner Radius</DropdownMenuLabel>
        {radiusScales.map((r) => (
          <DropdownMenuItem
            key={r.value}
            onClick={() => setRadius(r.value)}
            className={radius === r.value ? "bg-accent" : ""}
          >
            {r.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 