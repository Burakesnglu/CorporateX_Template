"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    content:
      "CorporateX ile çalışmak harika bir deneyimdi. Profesyonel ekipleri ve müşteri odaklı yaklaşımları ile projemizi başarıyla tamamladılar.",
    author: {
      name: "Ahmet Yılmaz",
      role: "CEO, Tech Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    content:
      "Web sitemizin yenilenmesi sürecinde gösterdikleri özen ve sundukları yaratıcı çözümler için teşekkür ederiz. Sonuçtan çok memnunuz.",
    author: {
      name: "Ayşe Kaya",
      role: "Marketing Director, Creative Co.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    content:
      "Modern ve kullanıcı dostu bir web sitesi oluşturdular. SEO çalışmaları sayesinde online görünürlüğümüz önemli ölçüde arttı.",
    author: {
      name: "Mehmet Demir",
      role: "Founder, Digital Agency",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export function Testimonials1() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Müşteri Yorumları
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-description mx-auto max-w-2xl"
          >
            Müşterilerimizin bizimle çalışma deneyimleri ve projeleri hakkında ne
            söylediklerini öğrenin.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm"
            >
              <div>
                <div className="relative h-7 w-7">
                  <svg
                    className="absolute right-0 top-0 h-full w-full rotate-180 opacity-5 transition-opacity group-hover:opacity-10"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern
                        id={`quotes-${index}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0zM8.889 13.333H6.667V8.889h2.222V6.667H5.556v7.778h3.333v-1.112zm5.555 0h-2.222V8.889h2.222V6.667h-3.333v7.778h3.333v-1.112z"
                          fill="currentColor"
                          fillRule="evenodd"
                          opacity="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#quotes-${index})`} />
                  </svg>
                </div>
                <p className="mt-4 text-lg">{testimonial.content}</p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.author.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 