import flyLogo from "@/assets/fly-logo.png";
import { Globe, Instagram, MessageCircle } from "lucide-react";

const contacts = [
  { icon: <Globe className="w-5 h-5" />, label: "Website", value: "flyagency.pro", href: "https://flyagency.pro" },
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", value: "@flyagency.digital", href: "https://instagram.com/flyagency.digital" },
  { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "Agendar Consultoria", href: "https://wa.link/r4rqk9" },
];

const ContactPage = () => {
  return (
    <section className="page-section grid-pattern" id="contato">
      <div className="blob-purple w-[700px] h-[700px] -top-40 -left-40" />
      <div className="blob-pink w-[600px] h-[600px] -bottom-40 -right-40" />

      <div className="relative z-10 text-center max-w-xl mx-auto w-full">
        <div className="mb-8 animate-fade-in">
          <img src={flyLogo} alt="Fly Agency Logo" className="w-36 mx-auto drop-shadow-2xl" />
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-3 animate-fade-in animation-delay-150">
          Vamos <span className="gradient-text">começar?</span>
        </h2>
        <p className="text-muted-foreground mb-10 animate-fade-in animation-delay-300">
          Agende uma consultoria gratuita e descubra como escalar seu negócio.
        </p>

        <div className="space-y-3 mb-10">
          {contacts.map((c, idx) => (
            <a
              key={idx}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all group animate-fade-in"
              style={{ animationDelay: `${(idx + 2) * 120}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                {c.icon}
              </div>
              <div className="text-left flex-1">
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="font-semibold text-sm">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.link/r4rqk9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity glow-effect text-lg animate-fade-in animation-delay-700"
        >
          Aprovar Proposta →
        </a>

        <p className="mt-10 text-muted-foreground text-xs">
          © 2025 Fly Agency Digital • Todos os direitos reservados
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
