import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <MainLayout>
      <SEOProvider
        title="Sayfa Bulunamadı | CorporateX"
        description="Aradığınız sayfa bulunamadı. Ana sayfaya dönmek için tıklayın."
      >
        <section className="section overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-title">
                <span className="gradient-text">404</span> - Sayfa Bulunamadı
              </h1>
              <p className="section-description">
                Aradığınız sayfa bulunamadı veya taşınmış olabilir. Ana sayfaya
                dönmek için aşağıdaki butona tıklayabilirsiniz.
              </p>
              <div className="mt-8">
                <Button asChild>
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