import { useState, useEffect } from "react";
import CoverPage from "@/components/proposal/CoverPage";
import DiagnosticPage from "@/components/proposal/DiagnosticPage";
import ServicesPage from "@/components/proposal/ServicesPage";
import StrategyPage from "@/components/proposal/StrategyPage";
import AboutPage from "@/components/proposal/AboutPage";
import ProcessPage from "@/components/proposal/ProcessPage";
import ContactPage from "@/components/proposal/ContactPage";

const WA_LINK = "https://wa.me/5579998615349?text=Ol%C3%A1%2C%20quero%20aprovar%20a%20proposta%20de%20Acompanhamento%20Estrat%C3%A9gico%20da%20Fly%20Agency!%20Vamos%20come%C3%A7ar!";

const navItems = [
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Pilares", href: "#pilares" },
  { label: "Estratégia", href: "#estrategia" },
  
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className={`flex items-center gap-4 sm:gap-8 px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-500 ${scrolled ? 'border-border/80 bg-background/90 backdrop-blur-xl shadow-lg' : 'border-border/40 bg-card/50 backdrop-blur-md'}`}>
            <a href="#cover" className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              ← Início
            </a>
            <div className="hidden md:flex items-center gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105"
            style={{ background: 'var(--gradient-primary)' }}
          >
            APROVAR →
          </a>
        </div>
      </nav>

      {/* Content */}
      <div>
        <CoverPage />
        <DiagnosticPage />
        <ServicesPage />
        <StrategyPage />
        <AboutPage />
        <ProcessPage />
        <ContactPage />
      </div>
    </div>
  );
};

export default Index;
