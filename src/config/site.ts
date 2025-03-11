import { MainNavItem, FooterItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CorporateX",
  description:
    "Modern kurumsal firmalar için tasarlanmış, Next.js ve TailwindCSS tabanlı, yüksek performanslı ve kolay özelleştirilebilir bir website teması.",
  url: "https://corporatex.com",
  ogImage: "https://corporatex.com/og.jpg",
  links: {
    twitter: "https://twitter.com/corporatex",
    github: "https://github.com/corporatex",
  },
  mainNav: [
    {
      title: "Ana Sayfa",
      href: "/",
    },
    {
      title: "Hakkımızda",
      href: "/about",
    },
    {
      title: "Hizmetler",
      href: "/services",
    },
    {
      title: "Fiyatlandırma",
      href: "/pricing",
    },
    {
      title: "İletişim",
      href: "/contact",
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Kurumsal",
      items: [
        {
          title: "Hakkımızda",
          href: "/about",
        },
        {
          title: "Hizmetler",
          href: "/services",
        },
        {
          title: "Fiyatlandırma",
          href: "/pricing",
        },
        {
          title: "İletişim",
          href: "/contact",
        },
      ],
    },
    {
      title: "Hizmetler",
      items: [
        {
          title: "Web Geliştirme",
          href: "/services#web-development",
        },
        {
          title: "Mobil Uygulama",
          href: "/services#mobile-development",
        },
        {
          title: "UI/UX Tasarım",
          href: "/services#ui-ux-design",
        },
        {
          title: "Dijital Pazarlama",
          href: "/services#digital-marketing",
        },
      ],
    },
    {
      title: "Destek",
      items: [
        {
          title: "SSS",
          href: "/faq",
        },
        {
          title: "Dokümantasyon",
          href: "/docs",
        },
        {
          title: "Gizlilik Politikası",
          href: "/privacy",
        },
        {
          title: "Kullanım Koşulları",
          href: "/terms",
        },
      ],
    },
    {
      title: "İletişim",
      items: [
        {
          title: "info@corporatex.com",
          href: "mailto:info@corporatex.com",
        },
        {
          title: "+90 (212) 555 55 55",
          href: "tel:+902125555555",
        },
        {
          title: "Twitter",
          href: "https://twitter.com/corporatex",
          external: true,
        },
        {
          title: "GitHub",
          href: "https://github.com/corporatex",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
}; 