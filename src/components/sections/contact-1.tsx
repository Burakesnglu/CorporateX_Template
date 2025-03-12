"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Form doğrulama şeması
const formSchema = z.object({
  name: z.string().min(2, {
    message: "İsim en az 2 karakter olmalıdır.",
  }),
  email: z.string().email({
    message: "Geçerli bir e-posta adresi giriniz.",
  }),
  phone: z.string().min(10, {
    message: "Geçerli bir telefon numarası giriniz.",
  }).optional(),
  subject: z.string().min(5, {
    message: "Konu en az 5 karakter olmalıdır.",
  }),
  message: z.string().min(10, {
    message: "Mesaj en az 10 karakter olmalıdır.",
  }),
});

// Form tipi tanımı
type ContactFormValues = z.infer<typeof formSchema>;

// İletişim bilgileri
const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "E-posta",
    content: "info@corporatex.com",
    href: "mailto:info@corporatex.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Telefon",
    content: "+90 (212) 123 45 67",
    href: "tel:+902121234567",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Adres",
    content: "Levent, 34330 Beşiktaş/İstanbul",
    href: "https://maps.google.com/?q=Levent,+34330+Beşiktaş/İstanbul",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Çalışma Saatleri",
    content: "Pazartesi - Cuma: 09:00 - 18:00",
    href: "#",
  },
];

export function Contact1() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form tanımlama
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Form gönderimi
  function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    
    // Burada gerçek bir API çağrısı yapılabilir
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      
      toast({
        title: "Form başarıyla gönderildi",
        description: "En kısa sürede sizinle iletişime geçeceğiz.",
        variant: "default",
      });
      
      form.reset();
    }, 1500);
  }

  return (
    <section className="section py-20">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Bizimle <span className="gradient-text">İletişime Geçin</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-description mx-auto max-w-2xl"
          >
            Projeleriniz, sorularınız veya işbirliği fırsatları için bizimle iletişime geçebilirsiniz.
            Ekibimiz en kısa sürede size dönüş yapacaktır.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-1"
          >
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">İletişim Bilgilerimiz</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                    className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Sosyal Medya</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border bg-card p-6 shadow-sm lg:col-span-2"
          >
            <h3 className="mb-4 text-xl font-semibold">Mesaj Gönderin</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>İsim Soyisim</FormLabel>
                        <FormControl>
                          <Input placeholder="İsim Soyisim" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-posta</FormLabel>
                        <FormControl>
                          <Input placeholder="E-posta adresiniz" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon (Opsiyonel)</FormLabel>
                        <FormControl>
                          <Input placeholder="Telefon numaranız" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Konu</FormLabel>
                        <FormControl>
                          <Input placeholder="Mesajınızın konusu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mesaj</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Mesajınızı buraya yazın..."
                          className="min-h-32 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    * ile işaretli alanlar zorunludur
                  </p>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        Gönder
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>

        {/* Harita */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 rounded-lg border bg-card p-1 shadow-sm"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12036.459083887504!2d29.00510005!3d41.0805678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f6f8f8f33%3A0x7c46f2ecd8d8d8d8!2sLevent%2C%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1647789012345!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CorporateX Ofis Konumu"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
} 