import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap"
});

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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${roboto.variable} font-inter`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
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
