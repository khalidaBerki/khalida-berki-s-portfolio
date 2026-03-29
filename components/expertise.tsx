"use client"

import { Sparkles, GitBranch, Database, Zap } from "lucide-react"

const expertises = [
  {
    icon: Sparkles,
    title: "Automatisation intelligente avec IA",
    description:
      "Conception de systèmes automatisés intégrant l'IA pour optimiser les processus métier.",
  },
  {
    icon: GitBranch,
    title: "Création de sites vitrine et de dashboards",
    description:
      "Développement de sites web et de tableaux de bord interactifs pour visualiser et analyser les données.",
  },
  {
    icon: Database,
    title: "Intégration de systèmes RAG et exploitation de données",
    description:
      "Mise en place de solutions RAG pour exploiter intelligemment les données documentaires.",
  },
  {
    icon: Zap,
    title: "DevSecOps et optimisation CI/CD",
    description:
      "Amélioration et optimisations des livraisons continues et des processus d'intégration continue.",
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-primary mb-4 text-center">
          Expertise
        </h2>
        <h3 className="text-3xl md:text-4xl font-light text-center mb-16 text-balance">
          Domaines de spécialisation
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {expertises.map((item) => (
            <div
              key={item.title}
              className="group flex gap-5 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
