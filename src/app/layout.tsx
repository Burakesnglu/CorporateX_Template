import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CorporateX - Modern Kurumsal Web Çözümleri",
    template: "%s | CorporateX",
  },
  description:
    "CorporateX, modern kurumsal firmalar için tasarlanmış, Next.js ve TailwindCSS tabanlı, yüksek performanslı ve kolay özelleştirilebilir bir website temasıdır.",
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
    locale: "tr_TR",
    url: "https://corporatex.com",
    title: "CorporateX - Modern Kurumsal Web Çözümleri",
    description:
      "CorporateX, modern kurumsal firmalar için tasarlanmış, Next.js ve TailwindCSS tabanlı, yüksek performanslı ve kolay özelleştirilebilir bir website temasıdır.",
    siteName: "CorporateX",
  },
  twitter: {
    card: "summary_large_image",
    title: "CorporateX - Modern Kurumsal Web Çözümleri",
    description:
      "CorporateX, modern kurumsal firmalar için tasarlanmış, Next.js ve TailwindCSS tabanlı, yüksek performanslı ve kolay özelleştirilebilir bir website temasıdır.",
    creator: "@corporatex",
    site: "@corporatex",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
