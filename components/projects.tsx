"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Sites WordPress Lead Generation",
    description:
      "Création de sites WordPress orientés génération de leads et valorisation de l'offre commerciale. Optimisation SEO, tunnels de conversion et intégration CRM pour maximiser les performances.",
    tags: ["WordPress", "Elementor", "SEO", "Lead Gen"],
    video: "/videos/projet1.mp4",
  },
  {
    title: "Assistant IA Conversationnel",
    description:
      "Système intelligent utilisant la compréhension du langage naturel pour détecter l'intention utilisateur (demande de congés, déclaration d'absence, demande d'information). Le système sélectionne dynamiquement l'endpoint API backend approprié via function calling, puis reformule la réponse en langage naturel. Combinaison LLM + tool calling pour un routage intelligent des requêtes.",
    tags: ["LLM", "Function Calling", "FastAPI", "NLU"],
    video: "/videos/projet2.mp4",
  },
  {
    title: "Jeu Vidéo Java",
    description:
      "Développement d'un jeu interactif en Java avec gestion des graphismes, physique du jeu et logique de gameplay. Architecture orientée objet et patterns de conception.",
    tags: ["Java", "OOP", "Game Design"],
    video: "/videos/projet3.mp4",
  },
]

export function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-primary mb-4 text-center">
          Projets
        </h2>
        <h3 className="text-3xl md:text-4xl font-light text-center mb-16 text-balance">
          Réalisations récentes
        </h3>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Video */}
              <div
                className={`relative aspect-video rounded-2xl bg-secondary/50 border border-border/50 overflow-hidden group-hover:border-primary/30 transition-all duration-300 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                {project.video ? (
                  <video
                    src={project.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors cursor-pointer">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h4 className="text-xl md:text-2xl font-medium mb-4 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-6 text-pretty">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0"
                  onClick={() => setActiveVideo(project.video)}
                >
                  <span>Voir le projet</span>
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal vidéo */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <video
            src={activeVideo}
            className="w-screen h-screen object-contain"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
