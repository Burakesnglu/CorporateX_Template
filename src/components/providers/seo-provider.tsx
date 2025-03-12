"use client";

import React, { ReactNode } from "react";
import { Metadata } from "next";
import Head from "next/head";

// Open Graph resim tipi
interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

// Open Graph özellikleri
interface OpenGraphProps {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  images?: OpenGraphImage[];
  locale?: string;
  type?: string;
}

// Twitter özellikleri
interface TwitterProps {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
}

// SEO Provider özellikleri
interface SEOProviderProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  openGraph?: OpenGraphProps;
  twitter?: TwitterProps;
}

// Not: Next.js 14'te metadata API'si kullanılmalıdır.
// Bu bileşen client-side SEO için kullanılabilir, ancak
// app/ dizinindeki sayfalarda metadata.ts dosyaları oluşturarak
// daha iyi SEO sağlanabilir.

export function SEOProvider({
  children,
  title = "CorporateX - Modern Kurumsal Website Teması",
  description = "Next.js ve TailwindCSS ile oluşturulmuş modern, yüksek performanslı ve kolay özelleştirilebilir kurumsal website teması.",
  keywords = "kurumsal website, next.js tema, tailwindcss tema, modern website, responsive website",
  ogImage = "/images/og-image.jpg",
  canonical,
  openGraph,
  twitter,
}: SEOProviderProps) {
  // Varsayılan Open Graph özellikleri
  const defaultOpenGraph: OpenGraphProps = {
    title: title,
    description: description,
    url: "https://corporatex.vercel.app",
    siteName: "CorporateX",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "tr_TR",
    type: "website",
  };

  // Varsayılan Twitter özellikleri
  const defaultTwitter: TwitterProps = {
    card: "summary_large_image",
    site: "@corporatex",
    creator: "@corporatex",
    title: title,
    description: description,
    image: ogImage,
  };

  // Özel ve varsayılan özellikleri birleştir
  const mergedOpenGraph = { ...defaultOpenGraph, ...openGraph };
  const mergedTwitter = { ...defaultTwitter, ...twitter };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph meta etiketleri */}
        <meta property="og:title" content={mergedOpenGraph.title || title} />
        <meta property="og:description" content={mergedOpenGraph.description || description} />
        <meta property="og:url" content={mergedOpenGraph.url} />
        <meta property="og:site_name" content={mergedOpenGraph.siteName} />
        <meta property="og:locale" content={mergedOpenGraph.locale} />
        <meta property="og:type" content={mergedOpenGraph.type} />
        {mergedOpenGraph.images && mergedOpenGraph.images[0] && (
          <>
            <meta property="og:image" content={mergedOpenGraph.images[0].url} />
            {mergedOpenGraph.images[0].width && (
              <meta property="og:image:width" content={mergedOpenGraph.images[0].width.toString()} />
            )}
            {mergedOpenGraph.images[0].height && (
              <meta property="og:image:height" content={mergedOpenGraph.images[0].height.toString()} />
            )}
            {mergedOpenGraph.images[0].alt && (
              <meta property="og:image:alt" content={mergedOpenGraph.images[0].alt} />
            )}
          </>
        )}

        {/* Twitter meta etiketleri */}
        <meta name="twitter:card" content={mergedTwitter.card} />
        <meta name="twitter:site" content={mergedTwitter.site} />
        <meta name="twitter:creator" content={mergedTwitter.creator} />
        <meta name="twitter:title" content={mergedTwitter.title || title} />
        <meta name="twitter:description" content={mergedTwitter.description || description} />
        <meta name="twitter:image" content={mergedTwitter.image || ogImage} />
        
        {/* Diğer meta etiketleri */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

// Next.js 14 Metadata API örneği
// Bu fonksiyon, app/ dizinindeki sayfalarda metadata.ts dosyalarında kullanılabilir
export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  openGraph,
  twitter,
}: Omit<SEOProviderProps, "children">): Metadata {
  // Varsayılan değerler
  const defaultTitle = "CorporateX - Modern Kurumsal Website Teması";
  const defaultDescription = "Next.js ve TailwindCSS ile oluşturulmuş modern, yüksek performanslı ve kolay özelleştirilebilir kurumsal website teması.";
  const defaultOgImage = "/images/og-image.jpg";
  
  // Varsayılan Open Graph özellikleri
  const defaultOpenGraph = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: "https://corporatex.vercel.app",
    siteName: "CorporateX",
    images: [
      {
        url: ogImage || defaultOgImage,
        width: 1200,
        height: 630,
        alt: title || defaultTitle,
      },
    ],
    locale: "tr_TR",
    type: "website",
  };

  // Varsayılan Twitter özellikleri
  const defaultTwitter = {
    card: "summary_large_image",
    site: "@corporatex",
    creator: "@corporatex",
  };

  // Metadata nesnesi oluştur
  return {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords,
    metadataBase: new URL("https://corporatex.vercel.app"),
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      ...defaultOpenGraph,
      ...openGraph,
    },
    twitter: {
      ...defaultTwitter,
      ...twitter,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
    },
  };
} 