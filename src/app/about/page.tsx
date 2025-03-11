import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Team1 } from "@/components/sections/team-1";
import { Stats1 } from "@/components/sections/stats-1";
import { CTA1 } from "@/components/sections/cta-1";
import Image from "next/image";

export default function AboutPage() {
  return (
    <MainLayout>
      <SEOProvider
        title="Hakkımızda | CorporateX"
        description="CorporateX ekibi, vizyonu ve değerleri hakkında bilgi edinin."
      >
        {/* Hero Section */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h1 className="section-title">
                  Modern ve Yenilikçi{" "}
                  <span className="gradient-text">Çözümler</span>
                </h1>
                <p className="section-description">
                  CorporateX olarak, modern teknolojiler ve yenilikçi çözümlerle
                  işletmelerin dijital dönüşümüne öncülük ediyoruz. 10 yılı aşkın
                  deneyimimiz ve uzman ekibimizle müşterilerimize en iyi hizmeti
                  sunuyoruz.
                </p>
              </div>
              <div className="relative aspect-square lg:aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="CorporateX Ekibi"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="section bg-muted/50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">Misyonumuz</h2>
                  <p className="mt-4 text-muted-foreground">
                    İşletmelerin dijital dünyada başarılı olmaları için ihtiyaç
                    duydukları modern, kullanıcı dostu ve yüksek performanslı web
                    çözümlerini sunmak.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Vizyonumuz</h2>
                  <p className="mt-4 text-muted-foreground">
                    Dijital dönüşüm sürecinde işletmelerin tercih ettiği,
                    güvenilir ve yenilikçi bir teknoloji partneri olmak.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">Değerlerimiz</h2>
                  <ul className="mt-4 space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 flex-none text-primary"
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
                      <span>
                        <strong className="font-medium text-foreground">
                          Müşteri Odaklılık
                        </strong>{" "}
                        - Müşterilerimizin ihtiyaçlarını anlar ve en uygun
                        çözümleri sunarız.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 flex-none text-primary"
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
                      <span>
                        <strong className="font-medium text-foreground">
                          Yenilikçilik
                        </strong>{" "}
                        - Teknolojik gelişmeleri takip eder ve en güncel
                        çözümleri sunarız.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 flex-none text-primary"
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
                      <span>
                        <strong className="font-medium text-foreground">
                          Kalite
                        </strong>{" "}
                        - Her projede en yüksek kalite standartlarını gözetiriz.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 flex-none text-primary"
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
                      <span>
                        <strong className="font-medium text-foreground">
                          Sürekli Gelişim
                        </strong>{" "}
                        - Kendimizi sürekli geliştirerek daha iyisini hedefleriz.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats1 />

        {/* Team Section */}
        <Team1 />

        {/* CTA Section */}
        <CTA1 />
      </SEOProvider>
    </MainLayout>
  );
} 