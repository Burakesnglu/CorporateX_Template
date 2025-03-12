import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Contact1 } from "@/components/sections/contact-1";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = {
  title: "Contact Us | CorporateX",
  description: "Get in touch with us. We'd be happy to answer your questions and discuss your projects.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <SEOProvider
        title="İletişim | CorporateX"
        description="CorporateX ile iletişime geçin. Size en uygun dijital çözümler için bizimle iletişime geçin."
      >
        <PageHeader
          title="Contact Us"
          description="Get in touch with us. We'd be happy to answer your questions and discuss your projects."
        />
        <Contact1 />
      </SEOProvider>
    </MainLayout>
  );
} 