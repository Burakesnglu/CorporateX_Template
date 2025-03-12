"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer1() {
  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold">
              CorporateX
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              A high-performance and easily customizable website theme designed for modern corporate companies.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Pages</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="/team"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Team
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                123 Main Street
              </li>
              <li className="text-sm text-muted-foreground">
                New York, NY 10001
              </li>
              <li className="text-sm text-muted-foreground">
                info@corporatex.com
              </li>
              <li className="text-sm text-muted-foreground">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <div className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="max-w-[220px]"
              />
              <Button variant="outline">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CorporateX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 