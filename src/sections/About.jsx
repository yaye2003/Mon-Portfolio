import { Code2, Rocket, Users, Lightbulb } from "lucide-react";
const highlights = [
  {
    icon: Code2,
    title: "Code propre",
    description:
      "Écrire un code maintenable, évolutif et conçu pour durer.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimiser la vitesse d'exécution pour offrir une expérience utilisateur ultra-rapide et fluide.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travailler en synergie avec les équipes pour concrétiser des idées complexes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Rester à la pointe des technologies émergentes et adopter les meilleures pratiques de l'industrie.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-meduim tracking-wider uppercase">
                À propos
              </span>
            </div>
     
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Bâtir des architectures logicielles solides,{" "}
              <span className="font-serif italic font-normal text-white ">
                de la couche système au Web.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
              <p>
                Passionné par l'informatique et l'architecture logicielle, je me consacre à la conception de solutions numériques performantes et robustes. Mon parcours a débuté par une curiosité pour le fonctionnement bas niveau des systèmes, avant d'évoluer vers une double expertise en développement d'applications web/mobiles et en programmation système sous Linux.
              </p>

              <p>
                Je me spécialise dans la création d'écosystèmes complets — du développement d'interfaces modernes (React, Tailwind CSS, Flutter) à la mise en place d'architectures backend et systèmes performantes (Laravel, C++, multithreading, bases de données relationnelles). Particulièrement fasciné par l'Intelligence Artificielle, j'explore activement son intégration pour concevoir des systemes plus intelligentes, automatisées et adaptatives.

              </p>

              <p>
               En dehors du code, je me consacre à la veille technologique autour de l'IA, à la résolution de défis algorithmiques complexes et au perfectionnement continu de mes compétences.
              </p>
            </div>

          <div className="glass p-6 glow-border rounded-2xl border-l-4 border-primary animate-fade-in animation-delay-300">
            <p className="text-foreground italic font-medium text-lg">
                "Ma mission est d'architecturer des solutions logicielles intelligentes et hautement performantes — des systèmes fiables pour les utilisateurs et propres à maintenir pour les développeurs."
              </p>
          </div>
          </div>

          {/* Right column- Hilights */}

        <div className="grid sm:grid-cols-2 gap-6">
  {highlights.map((item, idx) => (
    <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay:`${(idx + 1) * 100}ms`}}>
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/10">
        {item.icon && <item.icon className="w-6 h-6 text-primary" />} 
      </div>
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default About;