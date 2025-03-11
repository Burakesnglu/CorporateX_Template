"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { CTA1 } from "@/components/sections/cta-1";
import { Hero1 } from "@/components/sections/hero-1";
import { Features1 } from "@/components/sections/features-1";
import { Stats1 } from "@/components/sections/stats-1";
import { Logos1 } from "@/components/sections/logos-1";
import { Testimonials1 } from "@/components/sections/testimonials-1";
import { Team1 } from "@/components/sections/team-1";

export function HomeClient() {
  return (
    <SEOProvider>
      <MainLayout>
        <Hero1 />
        <Features1 />
        <Stats1 />
        <Logos1 />
        <Testimonials1 />
        <Team1 />
        <CTA1 />
      </MainLayout>
    </SEOProvider>
  );
} 