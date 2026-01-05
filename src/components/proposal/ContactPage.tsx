import flyLogo from "@/assets/fly-logo.png";
import { Globe, Instagram, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const contacts = [
    { 
      icon: <Globe className="w-6 h-6" />, 
      label: "Website", 
      value: "flyagency.pro",
      href: "https://flyagency.pro"
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      label: "Instagram", 
      value: "@flyagency.digital",
      href: "https://instagram.com/flyagency.digital"
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      label: "WhatsApp", 
      value: "Agendar Consultoria",
      href: "https://wa.link/r4rqk9"
    },
  ];

  return (
    <section className="pdf-page relative overflow-hidden flex flex-col justify-center items-center min-h-screen">
      {/* Abstract shapes */}
      <div className="abstract-shape blob-purple w-[600px] h-[600px] -top-40 -left-40" />
      <div className="abstract-shape blob-pink w-[600px] h-[600px] -bottom-40 -right-40" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={flyLogo} 
            alt="Fly Agency Logo" 
            className="w-48 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* CTA */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in animation-delay-150">
          Vamos <span className="gradient-text">crescer juntos?</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 animate-fade-in animation-delay-300">
          Entre em contato e agende uma consultoria gratuita para descobrir como podemos transformar seu negócio.
        </p>

        {/* Contact Links */}
        <div className="space-y-4 mb-8">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-secondary transition-colors group animate-fade-in"
              style={{ animationDelay: `${(idx + 2) * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                {contact.icon}
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-muted-foreground">{contact.label}</p>
                <p className="font-semibold">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Final CTA */}
        <div className="p-6 rounded-2xl bg-gradient-primary text-white animate-glow-pulse animate-fade-in animation-delay-500">
          <p className="font-bold text-lg">
            Proposta Exclusiva
          </p>
          <p className="text-sm opacity-90">
            Oferta válida para esta ligação
          </p>
        </div>

        {/* Footer */}
        <p className="mt-8 text-muted-foreground text-sm animate-fade-in animation-delay-500">
          © 2025 Fly Agency Digital • Todos os direitos reservados
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
