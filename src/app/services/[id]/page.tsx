"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { CTA1 } from "@/components/sections/cta-1";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { notFound } from "next/navigation";

// Hizmet verileri
const services = [
  {
    id: "web-development",
    title: "Web Geliştirme",
    description: "Modern ve kullanıcı dostu web siteleri ve web uygulamaları geliştiriyoruz.",
    longDescription: "İşletmenizin dijital varlığını güçlendirmek için modern teknolojiler kullanarak özel web siteleri ve web uygulamaları geliştiriyoruz. Responsive tasarım, SEO optimizasyonu ve hızlı yükleme süreleri ile kullanıcı deneyimini en üst seviyeye çıkarıyoruz. Her projeyi müşterilerimizin ihtiyaçlarına ve hedeflerine göre özelleştiriyoruz.",
    icon: "/images/icons/web-dev.svg",
    image: "/images/services/web-development.jpg",
    features: [
      "Responsive tasarım",
      "SEO optimizasyonu",
      "Hızlı yükleme süreleri",
      "Modern UI/UX",
      "Güvenli altyapı",
      "Kolay yönetim paneli"
    ],
    process: [
      {
        title: "Keşif ve Planlama",
        description: "İhtiyaçlarınızı ve hedeflerinizi anlamak için detaylı bir keşif süreci yürütüyoruz. Projenizin kapsamını, zaman çizelgesini ve bütçesini belirliyoruz."
      },
      {
        title: "Tasarım",
        description: "Markanızın kimliğini yansıtan, kullanıcı dostu ve modern bir tasarım oluşturuyoruz. Wireframe ve prototiplerle tasarımı onayınıza sunuyoruz."
      },
      {
        title: "Geliştirme",
        description: "Modern teknolojiler kullanarak web sitenizi veya uygulamanızı geliştiriyoruz. Düzenli ilerleme raporları ile süreci şeffaf bir şekilde yönetiyoruz."
      },
      {
        title: "Test ve Optimizasyon",
        description: "Farklı cihazlarda ve tarayıcılarda kapsamlı testler yapıyor, performans ve SEO optimizasyonlarını gerçekleştiriyoruz."
      },
      {
        title: "Lansman ve Destek",
        description: "Web sitenizi veya uygulamanızı yayına alıyor ve sürekli teknik destek sağlıyoruz. Düzenli bakım ve güncellemelerle sitenizin güncel kalmasını sağlıyoruz."
      }
    ],
    faq: [
      {
        question: "Bir web sitesi geliştirme projesi ne kadar sürer?",
        answer: "Projenin kapsamına bağlı olarak, basit bir web sitesi 4-6 hafta içinde tamamlanabilirken, daha karmaşık projeler 2-4 ay sürebilir. Proje başlangıcında detaylı bir zaman çizelgesi sunuyoruz."
      },
      {
        question: "Web sitem için hangi teknolojileri kullanıyorsunuz?",
        answer: "Projenizin ihtiyaçlarına göre en uygun teknolojileri seçiyoruz. Frontend için React, Next.js, Vue.js; backend için Node.js, PHP, Python; veritabanı için MySQL, PostgreSQL, MongoDB gibi teknolojileri kullanıyoruz."
      },
      {
        question: "Web sitemi kendim güncelleyebilir miyim?",
        answer: "Evet, projelerimizde kullanıcı dostu bir yönetim paneli sunuyoruz. Böylece teknik bilgiye ihtiyaç duymadan içeriklerinizi kolayca güncelleyebilirsiniz."
      },
      {
        question: "SEO optimizasyonu hizmete dahil mi?",
        answer: "Evet, tüm web projelerimizde temel SEO optimizasyonu standart olarak sunuyoruz. Daha kapsamlı SEO çalışmaları için ek hizmetlerimiz bulunmaktadır."
      }
    ]
  },
  {
    id: "mobile-development",
    title: "Mobil Uygulama Geliştirme",
    description: "iOS ve Android platformları için yüksek performanslı mobil uygulamalar geliştiriyoruz.",
    longDescription: "İşletmenizin mobil stratejisini güçlendirmek için iOS ve Android platformları için yüksek performanslı, kullanıcı dostu mobil uygulamalar geliştiriyoruz. Native ve cross-platform teknolojiler kullanarak, ihtiyaçlarınıza en uygun çözümü sunuyoruz. Kullanıcı deneyimini ön planda tutarak, markanızı mobil dünyada başarıyla temsil ediyoruz.",
    icon: "/images/icons/mobile-dev.svg",
    image: "/images/services/mobile-development.jpg",
    features: [
      "Native ve cross-platform geliştirme",
      "Kullanıcı dostu arayüz",
      "Offline çalışma desteği",
      "Push bildirim entegrasyonu",
      "Analitik entegrasyonu",
      "Sürekli güncelleme desteği"
    ],
    process: [
      {
        title: "Keşif ve Planlama",
        description: "Mobil uygulama ihtiyaçlarınızı ve hedef kitlenizi analiz ediyor, teknik gereksinimleri belirliyoruz."
      },
      {
        title: "UI/UX Tasarım",
        description: "Kullanıcı deneyimini ön planda tutan, platform standartlarına uygun arayüz tasarımları oluşturuyoruz."
      },
      {
        title: "Geliştirme",
        description: "Native veya cross-platform teknolojiler kullanarak uygulamanızı geliştiriyoruz. Düzenli demo sürümleri ile ilerlemeyi takip edebilirsiniz."
      },
      {
        title: "Test ve Kalite Kontrol",
        description: "Farklı cihazlarda ve işletim sistemi versiyonlarında kapsamlı testler yapıyor, hataları gideriyoruz."
      },
      {
        title: "Yayınlama ve Destek",
        description: "Uygulamanızı App Store ve Google Play Store'da yayınlıyor, sürekli teknik destek ve güncelleme hizmetleri sunuyoruz."
      }
    ],
    faq: [
      {
        question: "Native ve cross-platform geliştirme arasındaki fark nedir?",
        answer: "Native geliştirme, her platform (iOS ve Android) için ayrı kodlama yapılmasını içerir ve en yüksek performansı sunar. Cross-platform geliştirme ise tek bir kod tabanı kullanarak her iki platformda da çalışan uygulamalar oluşturmayı sağlar, bu da geliştirme süresini ve maliyetini azaltır."
      },
      {
        question: "Mobil uygulama geliştirme süreci ne kadar sürer?",
        answer: "Uygulamanın karmaşıklığına bağlı olarak, basit bir uygulama 2-3 ay içinde tamamlanabilirken, daha kapsamlı projeler 4-6 ay sürebilir."
      },
      {
        question: "Uygulamamı App Store ve Google Play'e yükleme konusunda yardım ediyor musunuz?",
        answer: "Evet, uygulama mağazalarına yükleme sürecini tamamen yönetiyoruz. Gerekli hesapların oluşturulması, uygulama açıklamalarının hazırlanması ve onay süreçlerinin takibi konularında destek sağlıyoruz."
      },
      {
        question: "Mevcut bir uygulamayı güncelleyebilir misiniz?",
        answer: "Evet, mevcut uygulamanızı analiz ederek güncellemeler ve iyileştirmeler yapabiliriz. Kodun kalitesine ve yapısına bağlı olarak, bazen tamamen yeniden geliştirme daha uygun maliyetli olabilir."
      }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Tasarım",
    description: "Kullanıcı deneyimini ön planda tutan, modern ve etkileyici arayüz tasarımları oluşturuyoruz.",
    longDescription: "Kullanıcı deneyimini ön planda tutan, modern ve etkileyici arayüz tasarımları oluşturuyoruz. Kullanıcı araştırmaları ve davranış analizleri ile hedef kitlenizin ihtiyaçlarını anlıyor, bu doğrultuda sezgisel ve çekici tasarımlar geliştiriyoruz. Markanızın kimliğini dijital platformlarda en iyi şekilde yansıtarak, kullanıcıların ürünlerinizle etkileşimini artırıyoruz.",
    icon: "/images/icons/design.svg",
    image: "/images/services/ui-ux-design.jpg",
    features: [
      "Kullanıcı odaklı tasarım",
      "Wireframing ve prototipler",
      "Kullanılabilirlik testleri",
      "Marka kimliği entegrasyonu",
      "Responsive tasarım",
      "Erişilebilirlik standartları"
    ],
    process: [
      {
        title: "Kullanıcı Araştırması",
        description: "Hedef kitlenizi ve ihtiyaçlarını anlamak için kapsamlı kullanıcı araştırmaları yapıyoruz."
      },
      {
        title: "Wireframing",
        description: "Kullanıcı deneyimini optimize etmek için temel sayfa yapılarını ve bilgi mimarisini oluşturuyoruz."
      },
      {
        title: "UI Tasarım",
        description: "Markanızın kimliğini yansıtan, modern ve çekici arayüz tasarımları geliştiriyoruz."
      },
      {
        title: "Prototipleme",
        description: "Etkileşimli prototipler oluşturarak tasarımın gerçek kullanımını simüle ediyoruz."
      },
      {
        title: "Kullanılabilirlik Testleri",
        description: "Gerçek kullanıcılarla testler yaparak tasarımın etkinliğini değerlendiriyor ve iyileştiriyoruz."
      }
    ],
    faq: [
      {
        question: "UI ve UX arasındaki fark nedir?",
        answer: "UI (User Interface) kullanıcı arayüzü tasarımını, yani ürünün görsel öğelerini ifade eder. UX (User Experience) ise kullanıcı deneyimini, yani kullanıcının ürünle etkileşiminin tüm yönlerini kapsar. İyi bir dijital ürün için her ikisi de kritik öneme sahiptir."
      },
      {
        question: "Tasarım sürecinde müşteri olarak ne kadar dahil olacağım?",
        answer: "Tasarım sürecinin her aşamasında geri bildirimlerinizi alıyoruz. Wireframe, stil rehberi ve arayüz tasarımları için onayınızı istiyoruz. İşbirlikçi bir yaklaşımla, vizyonunuzu en iyi şekilde hayata geçirmeyi hedefliyoruz."
      },
      {
        question: "Mevcut markamızın kimliğine uygun tasarım yapabilir misiniz?",
        answer: "Evet, mevcut marka kimliğinizi dijital platformlara uyarlamak konusunda uzmanız. Marka kılavuzunuzu takip ederek, tutarlı bir kullanıcı deneyimi oluşturuyoruz."
      },
      {
        question: "Tasarım sürecinde hangi araçları kullanıyorsunuz?",
        answer: "Figma, Adobe XD, Sketch gibi endüstri standardı tasarım araçlarını kullanıyoruz. Prototipleme için Figma, InVision veya Protopie kullanıyoruz. Tercihlerinize göre çalışma yöntemimizi uyarlayabiliriz."
      }
    ]
  }
];

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id);
  
  if (!service) {
    notFound();
  }

  return (
    <SEOProvider>
      <MainLayout>
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
              <div>
                <Link href="/services" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <FiArrowLeft className="mr-2 h-4 w-4" />
                  Tüm Hizmetler
                </Link>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  {service.longDescription}
                </p>
                <div className="mt-8">
                  <Button>
                    Ücretsiz Danışmanlık Alın
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Neler Sunuyoruz?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {service.title} hizmetimizin öne çıkan özellikleri
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Çalışma Sürecimiz
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {service.title} projelerimizde izlediğimiz adımlar
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Sıkça Sorulan Sorular
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {service.title} hizmetimiz hakkında merak edilenler
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {service.faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border bg-background p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold">{item.question}</h3>
                  <p className="mt-2 text-muted-foreground">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA1 />
      </MainLayout>
    </SEOProvider>
  );
} 