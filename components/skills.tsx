"use client"

import { 
  Code2, 
  Cloud, 
  Bot,
  Terminal,
  Container,
  Sparkles,
  Database,
  Shield,
  GitBranch,
  Monitor,
  Server,
  Layers,
  Cog,
  CheckCircle
} from "lucide-react"

const skillCategories = [
  {
    title: "Langages",
    icon: Code2,
    skills: ["Python", "JavaScript (React, Node)"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["Django", "FastAPI", "Next.js"],
  },
  {
    title: "IA / LLM",
    icon: Bot,
    skills: ["GPT (OpenAI, open source)", "Orchestrateurs API IA", "RAG"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "CI/CD", "Kubernetes", "Azure"],
  },
  {
    title: "CI/CD Tools",
    icon: GitBranch,
    skills: ["Jenkins", "Azure DevOps Pipelines", "XL Deploy", "XL Release"],
  },
  {
    title: "Sécurité & Qualité",
    icon: Shield,
    skills: ["Checkmarx", "JFrog Xray SCA", "SonarQube"],
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Environnements",
    icon: Monitor,
    skills: ["Linux", "Windows"],
  },
  {
    title: "Méthodologies",
    icon: Cog,
    skills: ["Agile", "Scrum", "QA", "Tests automatisés"],
  },
]

const skillIcons: Record<string, React.ElementType> = {
  Python: Terminal,
  "JavaScript (React, Node)": Code2,
  Django: Server,
  FastAPI: Server,
  "Next.js": Layers,
  "GPT (OpenAI, open source)": Sparkles,
  "Orchestrateurs API IA": Bot,
  RAG: Bot,
  Docker: Container,
  "CI/CD": GitBranch,
  Kubernetes: Cloud,
  Azure: Cloud,
  Jenkins: GitBranch,
  "Azure DevOps Pipelines": GitBranch,
  "XL Deploy": GitBranch,
  "XL Release": GitBranch,
  Checkmarx: Shield,
  "JFrog Xray SCA": Shield,
  SonarQube: CheckCircle,
  MySQL: Database,
  PostgreSQL: Database,
  Linux: Monitor,
  Windows: Monitor,
  Agile: Cog,
  Scrum: Cog,
  QA: CheckCircle,
  "Tests automatisés": CheckCircle,
}

export function Skills() {
  return (
    <section id="competences" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-primary mb-4 text-center">
          Compétences
        </h2>
        <h3 className="text-3xl md:text-4xl font-light text-center mb-16 text-balance">
          Technologies & Outils
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-secondary/80"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-medium mb-4 text-foreground">{category.title}</h4>
              <div className="space-y-2">
                {category.skills.map((skill) => {
                  const Icon = skillIcons[skill] || Code2
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-primary/60" />
                      <span>{skill}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
