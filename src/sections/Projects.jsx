import { ArrowBigRight, ArrowUpRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Platforme E-Commerce Agricole",
    description:
      "AgriSmart est un écosystème numérique conçu pour désengorger la chaîne de distribution agricole. Il numérise le parcours du produit du champ jusqu'au rayon, en garantissant la traçabilité, en optimisant les tournées des livreurs et en assurant une rémunération équitable aux producteurs grâce à la réduction des intermédiaires superflus.",
    image: "/projects/projet1.png",
    tags: [ "PHP", "PostgreSQL", "Tailwind Css","CSS"],
    link: "#",
    github: "https://github.com/yaye2003/site-web-agricole",
  },
  {
    title: "API RESTful Centralisée & Architecture Multi-Plateforme (Web & Mobile)",
    description:
      "Conception et déploiement d’une interface de programmation (API REST) hautement disponible et sécurisée, servant de socle de données unique pour le site web d'administration et l'application mobile. Elle garantit l'intégrité transactionnelle, la synchronisation en temps réel et la cohérence du système d'information multi-client.",
    image: "/projects/projet2.webp",
    tags: ["React", "Tailwind Css", "Django", "FastAPI","PostgreSQL"],
    link: "#",
    github: "https://github.com/yaye2003/api-mobile",
  },
  {
    title: "RestoCampus",
    description:
      "Une plateforme SaaS multi-tenant et écosystème mobile dédié à la restauration universitaire, connectant gérants de restaurants, étudiants/personnel et livreurs indépendants via des modèles économiques sur mesure (SaaS Premium, abonnements repas et bourse de livraison).",
    image: "/projects/projet3.png",
    tags: ["Flutter/Dart","Django","PostreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "AgriPredict",
    description:
      "AgriPredict est un système décisionnel d'ingénierie agronomique visant à sécuriser la production agricole. En croisant l'historique des sols, les prévisions météorologiques et des modèles prédictifs d'IA, la plateforme estime les volumes de récolte avant le moissonnage, optimise l'irrigation et l'usage d'intrants, et alerte les producteurs sur les risques d'anomalies de rendement.",
    image: "/projects/projet4.png",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    link: "#",
    github: "https://github.com/yaye2003/projet_dev_mobile_24_25",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Projets à la une
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100">
            Des solutions concrètes{" "}
            <span className="font-serif italic font-normal text-white">
              à fort impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-100">
            Une sélection de mes réalisations récentes, allant d'applications web et mobiles complexes aux interfaces système (API) répondant à des problématiques réelles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"
                  >
                    <BsGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/yaye2003/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              Explorer tous mes projets <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;