import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind sınıflarını birleştirmek için yardımcı fonksiyon
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tema renkleri
export const themeColors = {
  primary: {
    50: "hsl(var(--primary-50))",
    100: "hsl(var(--primary-100))",
    200: "hsl(var(--primary-200))",
    300: "hsl(var(--primary-300))",
    400: "hsl(var(--primary-400))",
    500: "hsl(var(--primary-500))",
    600: "hsl(var(--primary-600))",
    700: "hsl(var(--primary-700))",
    800: "hsl(var(--primary-800))",
    900: "hsl(var(--primary-900))",
    950: "hsl(var(--primary-950))",
  },
  secondary: {
    50: "hsl(var(--secondary-50))",
    100: "hsl(var(--secondary-100))",
    200: "hsl(var(--secondary-200))",
    300: "hsl(var(--secondary-300))",
    400: "hsl(var(--secondary-400))",
    500: "hsl(var(--secondary-500))",
    600: "hsl(var(--secondary-600))",
    700: "hsl(var(--secondary-700))",
    800: "hsl(var(--secondary-800))",
    900: "hsl(var(--secondary-900))",
    950: "hsl(var(--secondary-950))",
  },
  accent: {
    50: "hsl(var(--accent-50))",
    100: "hsl(var(--accent-100))",
    200: "hsl(var(--accent-200))",
    300: "hsl(var(--accent-300))",
    400: "hsl(var(--accent-400))",
    500: "hsl(var(--accent-500))",
    600: "hsl(var(--accent-600))",
    700: "hsl(var(--accent-700))",
    800: "hsl(var(--accent-800))",
    900: "hsl(var(--accent-900))",
    950: "hsl(var(--accent-950))",
  },
};

// Tipografi boyutları
export const typography = {
  h1: "text-4xl font-bold tracking-tight lg:text-5xl",
  h2: "text-3xl font-bold tracking-tight lg:text-4xl",
  h3: "text-2xl font-bold tracking-tight lg:text-3xl",
  h4: "text-xl font-bold tracking-tight lg:text-2xl",
  h5: "text-lg font-bold tracking-tight lg:text-xl",
  h6: "text-base font-bold tracking-tight lg:text-lg",
  p: "text-base leading-7",
  lead: "text-xl leading-7",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
};

// Animasyon varyantları
export const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideLeft: {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideRight: {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  staggerChildren: {
    visible: {},
    hidden: {},
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

// Geçiş süreleri
export const transitions = {
  fast: 0.2,
  default: 0.3,
  slow: 0.5,
};

// Medya sorguları için ekran boyutları
export const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Tema varyantları
export const themeVariants = {
  default: "default",
  blue: "blue",
  green: "green",
  purple: "purple",
  orange: "orange",
};

// Tema modu
export const themeMode = {
  light: "light",
  dark: "dark",
  system: "system",
}; 