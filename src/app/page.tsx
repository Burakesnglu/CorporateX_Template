import { MainLayout } from "@/components/layout/main-layout";
import { Hero1 } from "@/components/sections/hero-1";
import { Features1 } from "@/components/sections/features-1";
import { Stats1 } from "@/components/sections/stats-1";
import { Logos1 } from "@/components/sections/logos-1";
import { CTA1 } from "@/components/sections/cta-1";

export default function Home() {
  return (
    <MainLayout>
      <Hero1 />
      <Features1 />
      <Stats1 />
      <Logos1 />
      <CTA1 />
    </MainLayout>
  );
}
