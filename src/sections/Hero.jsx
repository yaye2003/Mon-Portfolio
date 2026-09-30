
import heroImage from "../assets/hero.jpg";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { ArrowRight, GitBranch, Mail ,ChevronDown ,Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import tofProfil from "../assets/tof.png";

const skills = [
  "HTML/CSS/JS",
  "Python",
  "C/C++",
  "JAVA",
  "React",
  "Django",
  "Laravel",
  "PHP",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Tailwind CSS",
  "Boostrap",
  "WorkPress",
  "Figma",
  "Git",
  "GitHub",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* left column -Text content */}
          <div className="space-y-8">

            <div className="animate-fade-in">
                <span className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
               <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                 Développeuse Full-Stack & Systèmes en fomation
               </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Concevoir des expériences numériques <span className="text-primary glow-text">robustes </span>
                <br />
                et <span className="text-primary glow-text">performantes </span>
                <br />
                <span className="font-serif italic font-normal text-white">
                 avec precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Je suis <strong className="text-foreground">Yaye Dione Sow</strong> – étudiante en L3 Informatique & Systèmes d'Information. Passionnée par l'architecture logicielle, je développe des applications web/mobiles modernes  adaptatives<span className="text-foreground font-medium">(Frontend : React, Tailwind CSS ,.etc | Backend : Laravel, PHP ,Django,.etc)</span> et des systèmes robustes sous Linux <span className="text-foreground font-medium">(C++, multithreading, bases de données)</span>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
  {/* Redirection vers la section Contact */}
  <a href="#contact">
    <Button size="lg">
      Contact Me
      <ArrowRight className="w-5 h-5" />
    </Button>
  </a>

  {/* Téléchargement du CV */}
  <a href="https://github.com/votre-nom-d-utilisateur/votre-repo-cv" download="CV_VotreNom.pdf" target="_blank" 
    rel="noopener noreferrer">
    <AnimatedBorderButton>
      <Download className="w-5 h-5" />
      Download CV
    </AnimatedBorderButton>
  </a>
</div>

            {/* Social links */}
<div className="flex items-center gap-4 animate-fade-in animation-delay-400">
  <span className="text-sm text-muted-foreground">Follow: </span>

  {[
    { 
      icon: GitBranch, // Remplace par GitHub icon (ex: BsGithub) si disponible
      href: "https://github.com/votre-nom-d-utilisateur", 
      label: "GitHub" 
    },
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/yaye-dione-sow-21424b440/?isSelfProfile=true", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sow.yaye-dione@ugb.edu.sn", 
      label: "Email" 
    },
  ].map((social, idx) => {
    const Icon = social.icon;
    const isMail = social.href.startsWith("mailto:");

    return (
      <a
        key={idx}
        href={social.href}
        target={isMail ? "_self" : "_blank"}
        rel={isMail ? undefined : "noopener noreferrer"}
        aria-label={social.label}
        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
      >
        <Icon className="w-5 h-5" />
      </a>
    );
  })}
</div>

          </div>

          {/* Right column -Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Prfile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow"
              />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={tofProfil}
                  alt="photo de profil"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}

        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse "/>
            <span className="text-sm font-medium">Available for work</span>
          </div>
        </div>
  
                {/* stats Badge */}
      
<div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 flex flex-col items-center justify-center text-center">
  <div className="text-2xl font-bold text-primary">🔍 Stage</div>
  <div className="text-xs text-muted-foreground my-0.5">&</div>
  <div className="text-2xl font-bold text-primary">Collaborateurs</div>
</div>

              </div>
            </div>
          </div>
          </div>

          {/* skills section */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">Stack technique & Compétences</p>
            <div className="relative overflow-hidden">
              <div className="flex  animate-marquee">
                {[...skills, ...skills].map((skill,idx)=>(
                  <div key={idx} className="flex shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
  <a
    href="#about"
    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
  >
    <span className="text-xs uppercase tracking-wider">Scroll</span>
    <ChevronDown className="w-6 h-6 animate-bounce" />
  </a>
</div>

    </section>
  );
};

export default Hero;

