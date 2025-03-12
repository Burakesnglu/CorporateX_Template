"use client";

import { ReactNode } from "react";
import { Header } from "@/components/layout/header-1";
import { Footer1 } from "@/components/layout/footer-1";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SEOProvider } from "@/components/providers/seo-provider";
import { motion, AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SEOProvider
        title="CorporateX - Modern Kurumsal Website Teması"
        description="CorporateX, modern kurumsal firmalar için tasarlanmış, Next.js ve TailwindCSS tabanlı, yüksek performanslı ve kolay özelleştirilebilir bir website temasıdır."
        canonical="https://corporatex.vercel.app"
        openGraph={{
          type: "website",
          locale: "tr_TR",
          url: "https://corporatex.vercel.app",
          siteName: "CorporateX",
          images: [
            {
              url: "https://corporatex.vercel.app/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "CorporateX",
            },
          ],
        }}
        twitter={{
          card: "summary_large_image",
          site: "@corporatex",
          creator: "@corporatex",
          title: "CorporateX - Modern Kurumsal Website Teması",
          description: "CorporateX, modern kurumsal firmalar için tasarlanmış, Next.js ve TailwindCSS tabanlı, yüksek performanslı ve kolay özelleştirilebilir bir website temasıdır.",
          image: "https://corporatex.vercel.app/og-image.jpg"
        }}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <AnimatePresence mode="wait">
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer1 />
          <Toaster />
        </div>
      </SEOProvider>
    </ThemeProvider>
  );
} 