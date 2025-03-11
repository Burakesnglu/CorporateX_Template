"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/config/theme";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface HeaderProps {
  className?: string;
}

const navItems: NavItem[] = [
  {
    label: "Ana Sayfa",
    href: "/",
  },
  {
    label: "Hakkımızda",
    href: "/about",
  },
  {
    label: "Hizmetler",
    href: "/services",
    children: [
      {
        label: "Web Tasarım",
        href: "/services/web-design",
      },
      {
        label: "Mobil Uygulama",
        href: "/services/mobile-app",
      },
      {
        label: "Dijital Pazarlama",
        href: "/services/digital-marketing",
      },
    ],
  },
  {
    label: "Projeler",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "İletişim",
    href: "/contact",
  },
];

export function Header1({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur", className)}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="text-xl font-bold">CorporateX</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-48 rounded-md border bg-background shadow-md"
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                              onClick={() => {
                                setActiveDropdown(null);
                                closeMenu();
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Bize Ulaşın</Link>
          </Button>
          <button
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-foreground"
            onClick={toggleMenu}
          >
            <span className="sr-only">Menüyü Aç</span>
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
          >
            <div className="container py-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    {item.children ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full text-sm font-medium"
                          onClick={() => toggleDropdown(item.label)}
                        >
                          {item.label}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`h-4 w-4 transition-transform ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 border-l space-y-2"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block py-1 text-sm"
                                  onClick={closeMenu}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-sm font-medium"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Button asChild className="mt-2 w-full">
                  <Link href="/contact" onClick={closeMenu}>
                    Bize Ulaşın
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 