"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const navigation = {
  main: [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Hizmetler", href: "/services" },
    { name: "İletişim", href: "/contact" },
  ],
  services: [
    { name: "Web Geliştirme", href: "/services#web-development" },
    { name: "Mobil Uygulama", href: "/services#mobile-development" },
    { name: "UI/UX Tasarım", href: "/services#ui-ux-design" },
    { name: "Dijital Pazarlama", href: "/services#digital-marketing" },
  ],
  company: [
    { name: "Ekibimiz", href: "/about#team" },
    { name: "Kariyer", href: "/career" },
    { name: "SSS", href: "/faq" },
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
              Modern kurumsal firmalar için tasarlanmış, yüksek performanslı ve
              kolay özelleştirilebilir bir website teması.
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
              <h3 className="text-sm font-semibold">Hizmetler</h3>
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
              <h3 className="text-sm font-semibold">Kurumsal</h3>
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
              Bültenimize Abone Olun
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              En son haberler, güncellemeler ve özel teklifler için abone olun.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row sm:max-w-md gap-2">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="min-w-0 flex-auto"
              />
              <Button type="submit">Abone Ol</Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CorporateX. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 