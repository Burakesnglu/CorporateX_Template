import { MainNavItem, FooterNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CorporateX",
  url: "https://corporatex.com",
  ogImage: "https://corporatex.com/og.jpg",
  description:
    "A high-performance and easily customizable website theme designed for modern corporate companies, based on Next.js and TailwindCSS.",
  links: {
    twitter: "https://twitter.com/corporatex",
    github: "https://github.com/corporatex",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Company",
      href: "#",
      items: [
        {
          title: "About",
          href: "/about",
        },
        {
          title: "Team",
          href: "/team",
        },
        {
          title: "Careers",
          href: "/careers",
        },
        {
          title: "Pricing",
          href: "/pricing",
        },
        {
          title: "Contact",
          href: "/contact",
        },
      ],
    },
    {
      title: "Services",
      href: "#",
      items: [
        {
          title: "Web Development",
          href: "/services/web-development",
        },
        {
          title: "Mobile Apps",
          href: "/services/mobile-apps",
        },
        {
          title: "UI/UX Design",
          href: "/services/ui-ux-design",
        },
        {
          title: "Digital Marketing",
          href: "/services/digital-marketing",
        },
        {
          title: "E-Commerce",
          href: "/services/e-commerce",
        },
      ],
    },
    {
      title: "Resources",
      href: "#",
      items: [
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "Case Studies",
          href: "/case-studies",
        },
        {
          title: "FAQ",
          href: "/faq",
        },
        {
          title: "Documentation",
          href: "/docs",
        },
        {
          title: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          title: "Terms of Service",
          href: "/terms-of-service",
        },
      ],
    },
    {
      title: "Contact",
      href: "#",
      items: [
        {
          title: "info@corporatex.com",
          href: "mailto:info@corporatex.com",
        },
        {
          title: "+1 (555) 123-4567",
          href: "tel:+15551234567",
        },
        {
          title: "123 Main Street, New York, NY 10001",
          href: "https://maps.google.com",
        },
      ],
    },
  ] satisfies FooterNavItem[],
}; 