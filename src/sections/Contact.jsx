import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sow.yaye-dione@ugb.edu.sn",
    href: "mailto:sow.yaye-dione@ugb.edu.sn",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+221 76 173 83 79",
    href: "tel:+221761738379",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sénégal , Dakar",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setSubmitStatus({ type: null, message: "" });

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Syntaxe obligatoire
      }
    );

    setSubmitStatus({
      type: "success",
      message: "Message envoyé avec succès !",
    });
    setFormData({ name: "", email: "", message: "" });
  } catch (err) {
    console.error("Détail de l'erreur EmailJS :", err);
    setSubmitStatus({
      type: "error",
      message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
    });
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Me contacter
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100">
            Construisons ensemble des{" "}
            <span className="font-serif italic font-normal text-white">
              projets ambitieux.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Vous avez un projet ou une opportunité en tête ? Parlons-en. Envoyez-moi un message pour discuter de la manière dont nous pouvons collaborer.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Form Side */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl text-sm ${
                    submitStatus.type === "success"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="votre nom complet"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email.com@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={idx}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group "
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">
                      {info.label}
                    </span>
                    <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </span>
                  </div>
                </a>
              );
            })}

            {/* 3. Currently Available Status */}
<div className="glass p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 group space-y-3">
  <div className="flex items-center gap-3">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
    </span>
    <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
      Actuellement disponible
    </h4>
  </div>

  <p className="text-sm text-muted-foreground leading-relaxed">
    Je suis ouverte aux nouvelles opportunités, stages et projets captivants. Que ce soit pour rejoindre votre équipe ou collaborer sur un projet complexe, échangeons ensemble !
  </p>
</div>

          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;