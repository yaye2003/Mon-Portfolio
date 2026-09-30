import { ArrowUp ,GitBranch } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 py-8 relative z-10 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} YDS Dev. Tous droits réservés.</p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yaye2003"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <GitBranch className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yaye-dione-sow-21424b440/?isSelfProfile=true"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-surface border border-border/50 hover:border-primary text-foreground transition-colors ml-2"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;