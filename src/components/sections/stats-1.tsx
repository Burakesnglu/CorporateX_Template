"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "500+",
    label: "Happy Clients",
    description: "Successfully completed projects",
  },
  {
    value: "98%",
    label: "Customer Satisfaction",
    description: "High customer satisfaction rate",
  },
  {
    value: "24/7",
    label: "Support",
    description: "Continuous customer support",
  },
  {
    value: "10+",
    label: "Years Experience",
    description: "Expert team in the industry",
  },
];

export function Stats1() {
  return (
    <section className="bg-muted py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Delivering Excellence Through Innovation
            </h2>
            <p className="text-xl text-muted-foreground">
              We work for our clients' success and continuously improve ourselves to deliver the best results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="font-medium">{stat.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 