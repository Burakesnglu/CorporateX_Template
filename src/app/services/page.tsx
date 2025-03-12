import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Features1 } from "@/components/sections/features-1";
import { Stats1 } from "@/components/sections/stats-1";
import { CTA1 } from "@/components/sections/cta-1";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Services1 } from "@/components/sections/services-1";
import { PageHeader } from "@/components/ui/page-header";

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

export const metadata = {
  title: "Our Services | CorporateX",
  description: "Learn more about our corporate solutions and professional services.",
}

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Services"
        description="Learn more about our corporate solutions and professional services."
      />
      <Services1 />
    </MainLayout>
  );
} 