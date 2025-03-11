import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Features1 } from "@/components/sections/features-1";
import { Stats1 } from "@/components/sections/stats-1";
import { CTA1 } from "@/components/sections/cta-1";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Geliştirme",
    description:
      "Modern ve kullanıcı dostu web siteleri ve uygulamalar geliştiriyoruz. Next.js, React ve diğer modern teknolojileri kullanarak yüksek performanslı çözümler sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    features: [
      "Kurumsal Web Siteleri",
      "E-ticaret Çözümleri",
      "Web Uygulamaları",
      "API Geliştirme",
      "SEO Optimizasyonu",
      "Performans İyileştirme",
    ],
  },
  {
    title: "Mobil Uygulama",
    description:
      "iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz. React Native ve Flutter gibi modern teknolojilerle hızlı ve etkili çözümler üretiyoruz.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    features: [
      "iOS Uygulamaları",
      "Android Uygulamaları",
      "Cross-platform Çözümler",
      "UI/UX Tasarım",
      "App Store Optimizasyonu",
      "Uygulama Bakımı",
    ],
  },
  {
    title: "UI/UX Tasarım",
    description:
      "Kullanıcı deneyimini ön planda tutan, modern ve etkileyici arayüz tasarımları oluşturuyoruz. Figma ve Adobe XD gibi araçlarla profesyonel tasarım süreçleri yürütüyoruz.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    features: [
      "Kullanıcı Arayüzü Tasarımı",
      "Kullanıcı Deneyimi Tasarımı",
      "Wireframe ve Prototipler",
      "Design Sistemleri",
      "Marka Kimliği",
      "İllüstrasyon",
    ],
  },
  {
    title: "Dijital Pazarlama",
    description:
      "Markanızın dijital varlığını güçlendirmek için kapsamlı dijital pazarlama hizmetleri sunuyoruz. SEO, sosyal medya ve içerik stratejileri ile online görünürlüğünüzü artırıyoruz.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    features: [
      "SEO Danışmanlığı",
      "Sosyal Medya Yönetimi",
      "İçerik Stratejisi",
      "Email Marketing",
      "Google Ads",
      "Analitik ve Raporlama",
    ],
  },
];

export default function ServicesPage() {
  return (
    <MainLayout>
      <SEOProvider
        title="Hizmetlerimiz | CorporateX"
        description="Web geliştirme, mobil uygulama, UI/UX tasarım ve dijital pazarlama hizmetlerimiz hakkında bilgi edinin."
      >
        {/* Hero Section */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h1 className="section-title">
                  Profesyonel{" "}
                  <span className="gradient-text">Dijital Çözümler</span>
                </h1>
                <p className="section-description">
                  Modern teknolojiler ve uzman ekibimizle işletmenizin dijital
                  dönüşümüne öncülük ediyoruz. Web geliştirme, mobil uygulama,
                  UI/UX tasarım ve dijital pazarlama alanlarında kapsamlı
                  hizmetler sunuyoruz.
                </p>
              </div>
              <div className="relative aspect-square lg:aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="CorporateX Hizmetler"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section bg-muted/50">
          <div className="container">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                      <p className="mt-4 text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-none text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Button asChild>
                        <Link href="/contact">Teklif Al</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative aspect-video lg:aspect-square">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features1 />

        {/* Stats Section */}
        <Stats1 />

        {/* CTA Section */}
        <CTA1 />
      </SEOProvider>
    </MainLayout>
  );
} 