"use client";

import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiLayout, FiTrendingUp } from "react-icons/fi";

const features = [
  {
    name: "Web Geliştirme",
    description:
      "Modern teknolojiler kullanarak yüksek performanslı ve ölçeklenebilir web uygulamaları geliştiriyoruz.",
    icon: FiCode,
  },
  {
    name: "Mobil Uygulama",
    description:
      "iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz.",
    icon: FiSmartphone,
  },
  {
    name: "UI/UX Tasarım",
    description:
      "Kullanıcı deneyimini ön planda tutan, modern ve etkileyici arayüz tasarımları oluşturuyoruz.",
    icon: FiLayout,
  },
  {
    name: "Dijital Pazarlama",
    description:
      "SEO, sosyal medya ve içerik pazarlaması ile markanızın dijital varlığını güçlendiriyoruz.",
    icon: FiTrendingUp,
  },
];

export function Features1() {
  return (
    <section className="section bg-muted/50">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Hizmetlerimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-description mx-auto max-w-2xl"
          >
            Modern teknolojiler ve yenilikçi çözümlerle işletmenizin dijital
            dönüşümüne öncülük ediyoruz.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <span className="inline-flex rounded-lg bg-primary/10 p-3">
                  <feature.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold">{feature.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 