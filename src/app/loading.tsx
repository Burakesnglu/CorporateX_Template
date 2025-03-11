import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";

export default function Loading() {
  return (
    <MainLayout>
      <SEOProvider
        title="Yükleniyor... | CorporateX"
        description="Sayfa yükleniyor, lütfen bekleyin."
      >
        <section className="section overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <h1 className="text-2xl font-bold">Yükleniyor...</h1>
                <p className="text-muted-foreground">
                  Lütfen bekleyin, sayfa yükleniyor.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SEOProvider>
    </MainLayout>
  );
} 