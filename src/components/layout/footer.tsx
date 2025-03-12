"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services#web-development" },
    { name: "Mobile App Development", href: "/services#mobile-development" },
    { name: "UI/UX Design", href: "/services#ui-ux-design" },
    { name: "Digital Marketing", href: "/services#digital-marketing" },
  ],
  company: [
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/career" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">CorporateX</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A high-performance and easily customizable website theme designed for modern corporate companies.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold">Services</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 xl:mt-0">
            <h3 className="text-sm font-semibold">
              Subscribe to Our Newsletter
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe for the latest news, updates, and special offers.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row sm:max-w-md gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-auto"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CorporateX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 