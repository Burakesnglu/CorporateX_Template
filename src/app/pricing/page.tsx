import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Button } from "@/components/ui/button";
import { CTA1 } from "@/components/sections/cta-1";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Başlangıç",
    price: "₺4,999",
    description:
      "Küçük işletmeler ve girişimciler için ideal başlangıç paketi.",
    features: [
      "5 Sayfa Web Sitesi",
      "Responsive Tasarım",
      "SEO Optimizasyonu",
      "İletişim Formu",
      "Sosyal Medya Entegrasyonu",
      "Google Analytics",
      "1 Ay Ücretsiz Destek",
      "Temel Hosting (1 Yıl)",
    ],
  },
  {
    name: "Profesyonel",
    price: "₺9,999",
    description:
      "Orta ölçekli işletmeler için gelişmiş özellikler ve profesyonel destek.",
    features: [
      "10 Sayfa Web Sitesi",
      "Özel Tasarım",
      "Gelişmiş SEO Optimizasyonu",
      "Blog Sistemi",
      "E-posta Pazarlama Entegrasyonu",
      "Çoklu Dil Desteği",
      "3 Ay Ücretsiz Destek",
      "Premium Hosting (1 Yıl)",
      "SSL Sertifikası",
      "Yedekleme Sistemi",
    ],
  },
  {
    name: "Kurumsal",
    price: "₺19,999",
    description:
      "Büyük işletmeler için tam kapsamlı dijital çözümler ve özel geliştirmeler.",
    features: [
      "Sınırsız Sayfa",
      "Özel Tasarım & Geliştirme",
      "E-ticaret Entegrasyonu",
      "İçerik Yönetim Sistemi",
      "Gelişmiş Güvenlik",
      "API Entegrasyonları",
      "6 Ay Ücretsiz Destek",
      "Enterprise Hosting (1 Yıl)",
      "Premium SSL Sertifikası",
      "CDN Entegrasyonu",
      "7/24 Teknik Destek",
      "Performans Optimizasyonu",
    ],
  },
];

export default function PricingPage() {
  return (
    <MainLayout>
      <SEOProvider
        title="Fiyatlandırma | CorporateX"
        description="CorporateX'in sunduğu web geliştirme, mobil uygulama ve UI/UX tasarım hizmetlerinin fiyatlandırması."
      >
        {/* Hero Section */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-title">
                Şeffaf <span className="gradient-text">Fiyatlandırma</span>
              </h1>
              <p className="section-description">
                İhtiyaçlarınıza en uygun paketi seçin. Tüm paketlerimiz
                özelleştirilebilir ve ek hizmetlerle genişletilebilir.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section bg-muted/50">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col rounded-lg border bg-background p-8 shadow-sm"
                >
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold">{plan.name}</h2>
                    <p className="mt-2 text-muted-foreground">
                      {plan.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/başlangıç</span>
                    </div>
                  </div>
                  <ul className="mb-8 space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <FiCheck className="h-5 w-5 flex-none text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button asChild className="w-full">
                      <Link href="/contact">Teklif Al</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mx-auto mt-20 max-w-3xl">
              <h2 className="text-center text-3xl font-bold">
                Sıkça Sorulan Sorular
              </h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-medium">
                    Fiyatlara KDV dahil mi?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Belirtilen fiyatlara KDV dahil değildir. Fiyatlandırmaya %18
                    KDV eklenecektir.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Ödeme koşulları nelerdir?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Proje başlangıcında %40, geliştirme sürecinde %30 ve proje
                    tesliminde %30 ödeme yapılmaktadır.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Paketler özelleştirilebilir mi?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Evet, tüm paketlerimiz ihtiyaçlarınıza göre
                    özelleştirilebilir. İhtiyacınız olan ek özellikler için
                    bizimle iletişime geçebilirsiniz.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Proje teslim süresi ne kadar?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Proje kapsamına göre değişmekle birlikte, ortalama 4-8 hafta
                    arasında teslim edilmektedir.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Destek ve bakım hizmetleri nasıl işliyor?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Her paket için belirtilen süre boyunca ücretsiz destek
                    sağlıyoruz. Bu süre sonrasında aylık bakım paketlerimizden
                    faydalanabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA1 />
      </SEOProvider>
    </MainLayout>
  );
} 