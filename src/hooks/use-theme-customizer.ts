"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ThemeCustomizerStore {
  radius: number
  setRadius: (radius: number) => void
  
  font: string
  setFont: (font: string) => void
  
  color: string
  setColor: (color: string) => void
}

export const useThemeCustomizer = create<ThemeCustomizerStore>()(
  persist(
    (set) => ({
      radius: 0.5,
      setRadius: (radius: number) => {
        const root = document.documentElement
        root.style.setProperty("--radius", `${radius}rem`)
        set({ radius })
      },

      font: "inter",
      setFont: (font: string) => {
        const root = document.documentElement
        root.classList.remove("font-inter", "font-poppins", "font-montserrat", "font-roboto")
        root.classList.add(`font-${font}`)
        document.body.style.fontFamily = font === "inter" ? "var(--font-inter)" :
                                         font === "poppins" ? "var(--font-poppins)" :
                                         font === "montserrat" ? "var(--font-montserrat)" :
                                         font === "roboto" ? "var(--font-roboto)" : "var(--font-inter)"
        set({ font })
      },

      color: "blue",
      setColor: (color: string) => {
        const root = document.documentElement
        root.classList.remove("theme-blue", "theme-green", "theme-red", "theme-purple", "theme-orange")
        root.classList.add(`theme-${color}`)
        localStorage.setItem("theme-preference", color)
        set({ color })
      },
    }),
    {
      name: "theme-customizer",
    }
  )
) 