"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <MainLayout>
      <SEOProvider
        title="Bir Hata Oluştu | CorporateX"
        description="Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin."
      >
        <section className="section overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-title">
                <span className="gradient-text">500</span> - Bir Hata Oluştu
              </h1>
              <p className="section-description">
                Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin veya
                ana sayfaya dönün.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button onClick={() => reset()}>Tekrar Dene</Button>
                <Button asChild variant="outline">
                  <Link href="/">Ana Sayfaya Dön</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </SEOProvider>
    </MainLayout>
  );
} 