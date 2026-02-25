import flyLogo from "@/assets/fly-logo.png";
import { Globe, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contacts = [
  { icon: <Globe className="w-5 h-5" />, label: "Website", value: "flyagency.pro", href: "https://flyagency.pro" },
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", value: "@flyagency.digital", href: "https://instagram.com/flyagency.digital" },
  { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "Falar com a equipe", href: "https://wa.me/5579998615349?text=Ol%C3%A1%2C%20vim%20pela%20proposta%20da%20Fly%20Agency!" },
];

const ContactPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="page-section grid-pattern" id="contato" ref={ref}>
      <div className="blob-purple w-[700px] h-[700px] -top-60 -left-40" />
      <div className="blob-pink w-[700px] h-[700px] -bottom-60 -right-40" />

      <div className="relative z-10 text-center max-w-lg mx-auto w-full">
        {/* Logo */}
        <div className={`reveal ${isVisible ? 'visible' : ''} mb-8`}>
          <img src={flyLogo} alt="Fly Agency Logo" className="w-28 sm:w-36 mx-auto drop-shadow-2xl" />
        </div>

        {/* CTA */}
        <h2 className={`reveal animation-delay-100 ${isVisible ? 'visible' : ''} text-2xl sm:text-3xl md:text-4xl font-black mb-3`}>
          Pronto para <span className="gradient-text">escalar?</span>
        </h2>
        <p className={`reveal animation-delay-200 ${isVisible ? 'visible' : ''} text-muted-foreground text-sm sm:text-base mb-10`}>
          Agende uma consultoria gratuita e descubra como transformar seu negócio nos próximos 90 dias.
        </p>

        {/* Contact Links */}
        <div className="space-y-3 mb-10">
          {contacts.map((c, idx) => (
            <a
              key={idx}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal ${isVisible ? 'visible' : ''} flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border/40 hover:border-primary/30 hover:bg-card/80 transition-all duration-400 group`}
              style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                {c.icon}
              </div>
              <div className="text-left flex-1">
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="font-semibold text-sm">{c.value}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Main CTA */}
        <a
          href="https://wa.me/5579998615349?text=Ol%C3%A1%2C%20quero%20aprovar%20a%20proposta%20de%20Acompanhamento%20Estrat%C3%A9gico%20da%20Fly%20Agency!%20Vamos%20come%C3%A7ar!"
          target="_blank"
          rel="noopener noreferrer"
          className={`reveal animation-delay-600 ${isVisible ? 'visible' : ''} inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-105`}
          style={{ background: 'var(--gradient-primary)' }}
        >
          Aprovar Proposta →
        </a>

        <p className={`reveal animation-delay-700 ${isVisible ? 'visible' : ''} mt-12 text-muted-foreground text-xs`}>
          © 2025 Fly Agency Digital · Todos os direitos reservados
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
