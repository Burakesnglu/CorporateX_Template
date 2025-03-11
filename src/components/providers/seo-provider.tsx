"use client";

import { ReactNode } from "react";

interface SEOProviderProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEOProvider({
  children,
  title = "CorporateX - Modern Kurumsal Web Sitesi Teması",
  description = "Next.js ve TailwindCSS ile oluşturulmuş modern kurumsal web sitesi teması.",
  keywords = "kurumsal, web sitesi, next.js, tailwindcss, responsive, modern",
  ogImage = "/images/og-image.jpg"
}: SEOProviderProps) {
  return (
    <>
      {/* SEO meta etiketleri burada olacak, ancak Next.js 14'te metadata API kullanılmalı */}
      {children}
    </>
  );
} 