import { Metadata } from "next";
import { generateMetadata } from "@/components/providers/seo-provider";

export const metadata: Metadata = generateMetadata({
  title: "CorporateX - Modern Kurumsal Website Teması",
  description: "Next.js ve TailwindCSS ile oluşturulmuş modern, yüksek performanslı ve kolay özelleştirilebilir kurumsal website teması.",
  keywords: "kurumsal website, next.js tema, tailwindcss tema, modern website, responsive website, kurumsal çözümler",
  ogImage: "/images/home-og-image.jpg",
  openGraph: {
    type: "website",
    siteName: "CorporateX",
    title: "CorporateX - Modern Kurumsal Website Teması",
    description: "Next.js ve TailwindCSS ile oluşturulmuş modern, yüksek performanslı ve kolay özelleştirilebilir kurumsal website teması.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@corporatex",
    creator: "@corporatex",
    title: "CorporateX - Modern Kurumsal Website Teması",
    description: "Next.js ve TailwindCSS ile oluşturulmuş modern, yüksek performanslı ve kolay özelleştirilebilir kurumsal website teması.",
  }
}); 