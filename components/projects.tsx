"use client"

import { useEffect, useRef, useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CloudinaryPlayer } from "@/components/cloudinary-player"

// ─────────────────────────────────────────────────────────────────────────────
// Remplacez VOTRE_CLOUD_NAME par votre Cloud name Cloudinary (Settings > Account)
// Remplacez chaque cloudinaryId par le Public ID de la vidéo uploadée sur Cloudinary
// ─────────────────────────────────────────────────────────────────────────────
const CLOUD_NAME = "dff9lp2as"

const projects = [
  {
    title: "Sites WordPress Lead Generation",
    description:
      "Création de sites WordPress orientés génération de leads et valorisation de l'offre commerciale. Optimisation SEO, tunnels de conversion et intégration CRM pour maximiser les performances.",
    tags: ["WordPress", "Elementor", "SEO", "Lead Gen"],
    cloudinaryId: "Projet1_1_zais38",
    image: null as string | null,
  },
  {
    title: "Assistant IA Conversationnel",
    description:
      "Système intelligent utilisant la compréhension du langage naturel pour détecter l'intention utilisateur (demande de congés, déclaration d'absence, demande d'information). Le système sélectionne dynamiquement l'endpoint API backend approprié via function calling, puis reformule la réponse en langage naturel. Combinaison LLM + tool calling pour un routage intelligent des requêtes.",
    tags: ["LLM", "Function Calling", "FastAPI", "NLU"],
    cloudinaryId: null as string | null,
    image: "https://images.ctfassets.net/lzny33ho1g45/40mKo9WmJeZU1qvElTVIbz/c74b7bab915ed5e3ef55dc3ec822e6e5/openai-hero.png?fm=webp&q=31&fit=thumb&w=1520&h=760",
  },
  {
    title: "Jeu Vidéo Java",
    description:
      "Développement d'un jeu interactif en Java avec gestion des graphismes, physique du jeu et logique de gameplay. Architecture orientée objet et patterns de conception.",
    tags: ["Java", "OOP", "Game Design"],
    cloudinaryId: "Projet3_1_ioy9hh",
    image: null as string | null,
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState<{ cloudinaryId: string | null; image: string | null } | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (activeProject) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [activeProject])

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
          {projects.map((project, index) => {
            const mediaEl = project.cloudinaryId ? (
              <div className="absolute inset-0 w-full h-full">
                <CloudinaryPlayer
                  cloudName={CLOUD_NAME}
                  publicId={project.cloudinaryId}
                  autoPlay
                  muted
                  loop
                  controls={false}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image ?? ""}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )

            return (
            <div
              key={project.title}
              className={`group grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Aperçu : vidéo Cloudinary ou image de remplacement */}
              <div
                className={`relative aspect-video rounded-2xl bg-secondary/50 border border-border/50 overflow-hidden group-hover:border-primary/30 transition-all duration-300 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                {mediaEl}
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
                  onClick={() => setActiveProject({ cloudinaryId: project.cloudinaryId, image: project.image })}
                >
                  <span>Voir le projet</span>
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-50 m-0 w-screen h-screen max-w-full max-h-full bg-black/90 p-0 border-none backdrop:bg-black/90"
        onClose={() => setActiveProject(null)}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setActiveProject(null)}
          className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
          aria-label="Fermer"
        >
          <X className="w-8 h-8" />
        </button>
        {/* Backdrop click */}
        <button
          type="button"
          aria-label="Fermer"
          className="absolute inset-0 w-full h-full cursor-default"
          onClick={() => setActiveProject(null)}
        />
        {/* Contenu */}
        <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
          {activeProject?.cloudinaryId && (
            <div
              className="pointer-events-auto w-full"
              style={{ maxWidth: "min(90vw, calc(85vh * 16 / 9))" }}
            >
              <div className="aspect-video w-full">
                <CloudinaryPlayer
                  cloudName={CLOUD_NAME}
                  publicId={activeProject.cloudinaryId}
                  controls
                  autoPlay
                  muted={false}
                  className="!w-full !h-full"
                />
              </div>
            </div>
          )}
          {activeProject?.image && !activeProject.cloudinaryId && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={activeProject.image}
              alt="Aperçu projet"
              className="pointer-events-auto max-h-[85vh] max-w-[90vw] w-auto object-contain rounded-xl"
            />
          )}
        </div>
      </dialog>
    </section>
  )
}
