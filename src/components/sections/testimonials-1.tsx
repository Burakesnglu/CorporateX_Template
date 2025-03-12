"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Working with CorporateX was an amazing experience. Their professional team and customer-focused approach helped us complete our project successfully.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "John Smith",
    title: "CEO, TechVision Inc.",
  },
  {
    content:
      "We thank them for their attention to detail and creative solutions during the renewal of our website. We are very satisfied with the results.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Sarah Johnson",
    title: "Marketing Director, Global Brands",
  },
  {
    content:
      "They created a modern and user-friendly website. Thanks to their SEO work, our online visibility has significantly increased.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Michael Brown",
    title: "Founder, Innovative Solutions",
  },
];

export function Testimonials1() {
  return (
    <section className="bg-muted py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Customer Testimonials
          </h2>
          <p className="text-xl text-muted-foreground">
            Learn what our customers say about their experience working with us
            and about their projects.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-xl bg-background p-8 shadow-sm ring-1 ring-muted"
            >
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 