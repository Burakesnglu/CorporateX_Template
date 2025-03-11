import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function ContactPage() {
  return (
    <MainLayout>
      <SEOProvider
        title="İletişim | CorporateX"
        description="CorporateX ile iletişime geçin. Size en uygun dijital çözümler için bizimle iletişime geçin."
      >
        {/* Hero Section */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-title">
                Bizimle <span className="gradient-text">İletişime Geçin</span>
              </h1>
              <p className="section-description">
                Projeniz veya sorularınız için bizimle iletişime geçebilirsiniz.
                Size en kısa sürede dönüş yapacağız.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-muted/50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h2 className="text-2xl font-bold">İletişim Formu</h2>
                  <p className="mt-2 text-muted-foreground">
                    Aşağıdaki formu doldurarak bize ulaşabilirsiniz.
                  </p>
                  <form className="mt-8 space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Ad</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Adınız"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Soyad</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Soyadınız"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ornek@sirket.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="0555 555 55 55"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Konu</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Mesajınızın konusu"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mesaj</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Mesajınız..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Gönder
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h2 className="text-2xl font-bold">İletişim Bilgileri</h2>
                  <p className="mt-2 text-muted-foreground">
                    Aşağıdaki kanallardan bize ulaşabilirsiniz.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg border p-2">
                        <FiMapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Adres</h3>
                        <p className="mt-1 text-muted-foreground">
                          Maslak, Büyükdere Cad. No:255
                          <br />
                          Sarıyer/İstanbul
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg border p-2">
                        <FiPhone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Telefon</h3>
                        <p className="mt-1 text-muted-foreground">
                          +90 (212) 555 55 55
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg border p-2">
                        <FiMail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">E-posta</h3>
                        <p className="mt-1 text-muted-foreground">
                          info@corporatex.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h2 className="text-2xl font-bold">Konum</h2>
                  <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.9095207073886!2d29.0060663!3d41.1060679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c7f1f96a97%3A0x5f3c48a5c9b6a1c9!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cd.%20No%3A255%2C%2034398%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1647881234567!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SEOProvider>
    </MainLayout>
  );
} 