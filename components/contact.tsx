"use client"

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "khalidaberki7@gmail.com",
    href: "mailto:khalidaberki7@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@khalidaBerki",
    href: "https://github.com/khalidaBerki",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Profil LinkedIn",
    href: "https://www.linkedin.com/in/khalida-berki/",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm tracking-widest uppercase text-primary mb-4">
          Contact
        </h2>
        <h3 className="text-3xl md:text-4xl font-light mb-6 text-balance">
          Travaillons ensemble
        </h3>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto text-pretty">
          Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour
          discuter de vos besoins en développement Full Stack, IA ou automatisation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {contacts.map((contact) => (
            <Button
              key={contact.label}
              asChild
              variant="outline"
              className="w-full sm:w-auto rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5 group"
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <contact.icon className="w-4 h-4 text-primary" />
                <span>{contact.label}</span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
