import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper function to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Theme colors
export const colors = {
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
  gray: {
    50: "hsl(var(--gray-50))",
    100: "hsl(var(--gray-100))",
    200: "hsl(var(--gray-200))",
    300: "hsl(var(--gray-300))",
    400: "hsl(var(--gray-400))",
    500: "hsl(var(--gray-500))",
    600: "hsl(var(--gray-600))",
    700: "hsl(var(--gray-700))",
    800: "hsl(var(--gray-800))",
    900: "hsl(var(--gray-900))",
    950: "hsl(var(--gray-950))",
  },
};

// Border radius
export const radius = {
  none: "0px",
  sm: "0.125rem",
  md: "0.25rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

// Typography sizes
export const typography = {
  h1: "text-4xl font-bold tracking-tight lg:text-5xl",
  h2: "text-3xl font-bold tracking-tight lg:text-4xl",
  h3: "text-2xl font-bold tracking-tight",
  h4: "text-xl font-bold",
  p: "leading-7",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
};

// Animation variants
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
};

// Transition durations
export const durations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
};

// Screen sizes for media queries
export const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Theme variants
export const themeVariants = {
  light: "light",
  dark: "dark",
  system: "system",
}; 