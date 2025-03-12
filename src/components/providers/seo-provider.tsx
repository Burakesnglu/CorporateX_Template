"use client";

import React, { ReactNode } from "react";
import { Metadata } from "next";
import Head from "next/head";

// Open Graph image type
interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

// Open Graph properties
interface OpenGraphProps {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  images?: OpenGraphImage[];
  locale?: string;
  type?: string;
}

// Twitter properties
interface TwitterProps {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
}

// SEO Provider properties
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

// Note: In Next.js 14, the metadata API should be used.
// This component can be used for client-side SEO, but
// creating metadata.ts files in pages within the app/ directory
// provides better SEO.

export function SEOProvider({
  children,
  title = "CorporateX - Modern Corporate Website Theme",
  description = "Modern, high-performance, and easily customizable corporate website theme built with Next.js and TailwindCSS.",
  keywords = "corporate website, next.js theme, tailwindcss theme, modern website, responsive website",
  ogImage = "/images/og-image.jpg",
  canonical,
  openGraph,
  twitter,
}: SEOProviderProps) {
  // Default Open Graph properties
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
    locale: "en_US",
    type: "website",
  };

  // Default Twitter properties
  const defaultTwitter: TwitterProps = {
    card: "summary_large_image",
    site: "@corporatex",
    creator: "@corporatex",
    title: title,
    description: description,
    image: ogImage,
  };

  // Merge custom and default properties
  const mergedOpenGraph = { ...defaultOpenGraph, ...openGraph };
  const mergedTwitter = { ...defaultTwitter, ...twitter };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph meta tags */}
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

        {/* Twitter meta tags */}
        <meta name="twitter:card" content={mergedTwitter.card} />
        <meta name="twitter:site" content={mergedTwitter.site} />
        <meta name="twitter:creator" content={mergedTwitter.creator} />
        <meta name="twitter:title" content={mergedTwitter.title || title} />
        <meta name="twitter:description" content={mergedTwitter.description || description} />
        <meta name="twitter:image" content={mergedTwitter.image || ogImage} />
        
        {/* Other meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

// Next.js 14 Metadata API example
// This function can be used in metadata.ts files in pages within the app/ directory
export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  openGraph,
  twitter,
}: Omit<SEOProviderProps, "children">): Metadata {
  // Default values
  const defaultTitle = "CorporateX - Modern Corporate Website Theme";
  const defaultDescription = "Modern, high-performance, and easily customizable corporate website theme built with Next.js and TailwindCSS.";
  const defaultOgImage = "/images/og-image.jpg";
  
  // Default Open Graph properties
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
    locale: "en_US",
    type: "website",
  };

  // Default Twitter properties
  const defaultTwitter = {
    card: "summary_large_image",
    site: "@corporatex",
    creator: "@corporatex",
  };

  // Create metadata object
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