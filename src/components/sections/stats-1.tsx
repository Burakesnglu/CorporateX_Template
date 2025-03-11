"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "100+",
    label: "Mutlu Müşteri",
    description: "Başarıyla tamamlanan projeler",
  },
  {
    value: "95%",
    label: "Müşteri Memnuniyeti",
    description: "Yüksek müşteri memnuniyet oranı",
  },
  {
    value: "24/7",
    label: "Teknik Destek",
    description: "Kesintisiz müşteri desteği",
  },
  {
    value: "10+",
    label: "Yıllık Deneyim",
    description: "Sektörde uzman ekip",
  },
];

export function Stats1() {
  return (
    <section className="bg-muted py-16 md:py-24 xl:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Rakamlarla CorporateX
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Müşterilerimizin başarısı için çalışıyor, sürekli kendimizi
            geliştiriyoruz.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-lg border bg-background p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
                <svg
                  className="absolute left-0 top-0 h-full w-full opacity-5 transition-opacity group-hover:opacity-10"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id={`grid-${index}`}
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#grid-${index})`} />
                </svg>
              </div>

              <div className="relative">
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg font-semibold">{stat.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 