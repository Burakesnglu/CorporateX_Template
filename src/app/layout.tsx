import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CorporateX - Modern Corporate Web Solutions",
    template: "%s | CorporateX",
  },
  description:
    "CorporateX is a high-performance and easily customizable website theme designed for modern corporate companies, based on Next.js and TailwindCSS.",
  keywords: [
    "Next.js",
    "React",
    "TailwindCSS",
    "TypeScript",
    "Web Development",
    "Corporate Website",
    "Business Website",
    "Modern Design",
    "Responsive Design",
    "SEO Friendly",
  ],
  authors: [
    {
      name: "CorporateX",
      url: "https://corporatex.com",
    },
  ],
  creator: "CorporateX",
  publisher: "CorporateX",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corporatex.com",
    title: "CorporateX - Modern Corporate Web Solutions",
    description:
      "CorporateX is a high-performance and easily customizable website theme designed for modern corporate companies, based on Next.js and TailwindCSS.",
    siteName: "CorporateX",
  },
  twitter: {
    card: "summary_large_image",
    title: "CorporateX - Modern Corporate Web Solutions",
    description:
      "CorporateX is a high-performance and easily customizable website theme designed for modern corporate companies, based on Next.js and TailwindCSS.",
    creator: "@corporatex",
    site: "@corporatex",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // Temporarily removing manifest reference to fix the 404 error
  // manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
