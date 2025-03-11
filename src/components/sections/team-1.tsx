"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

const team = [
  {
    name: "Ali Yılmaz",
    role: "CEO & Kurucu",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "10+ yıllık yazılım ve yönetim deneyimi",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Ayşe Kaya",
    role: "Tasarım Direktörü",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "8+ yıllık UI/UX tasarım deneyimi",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Mehmet Demir",
    role: "Teknik Direktör",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "12+ yıllık yazılım geliştirme deneyimi",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Zeynep Şahin",
    role: "Proje Yöneticisi",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "6+ yıllık proje yönetimi deneyimi",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export function Team1() {
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
            Ekibimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-description mx-auto max-w-2xl"
          >
            Deneyimli ve uzman ekibimizle projelerinizi hayata geçiriyoruz.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[3/2] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="sr-only">Twitter</span>
                  <FiTwitter className="h-5 w-5" />
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="sr-only">GitHub</span>
                  <FiGithub className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 