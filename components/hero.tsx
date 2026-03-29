"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="text-center max-w-3xl relative z-10">
        <p className="text-primary/80 text-sm tracking-widest uppercase mb-4 animate-fade-in-up opacity-0">
          Software Engineer
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 animate-fade-in-up opacity-0 animation-delay-100 text-balance">
          Développeuse{" "}
          <span className="text-primary">Full Stack</span> -{" "}
          <span className="text-primary">IA</span> &{" "}
          <span className="text-primary">DevSecOps</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up opacity-0 animation-delay-200 text-pretty">
          Je conçois des systèmes intelligents, automatisés et scalables.
        </p>
        <div className="animate-fade-in-up opacity-0 animation-delay-300">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="#projets">Voir mes projets</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  )
}
