export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-primary mb-4">
          À propos
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-balance">
              Créer des solutions{" "}
              <span className="text-primary">robustes</span> et{" "}
              <span className="text-primary">intelligentes</span>
            </h3>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-pretty">
              khalida Berki, Développeuse passionnée par les systèmes backend, l&apos;intelligence
              artificielle et l&apos;automatisation.
            </p>
            <p className="text-pretty">
              Je conçois des solutions robustes en combinant ingénierie
              logicielle et IA moderne — RAG, automatisation intelligente et
              pipelines de données optimisés.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
