import flyLogo from "@/assets/fly-logo.png";
import { ArrowDown, Lock } from "lucide-react";

const CoverPage = () => {
  return (
    <section className="page-section min-h-screen grid-pattern noise-overlay" id="cover">
      <div className="blob-purple w-[800px] h-[800px] -top-60 -right-60" />
      <div className="blob-pink w-[600px] h-[600px] bottom-0 -left-40" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          <span className="text-sm text-muted-foreground tracking-wide">Proposta Exclusiva — Fevereiro 2026</span>
          <Lock className="w-3.5 h-3.5 text-muted-foreground" />
        </div>

        {/* Logo */}
        <div className="mb-8 animate-fade-in animation-delay-150">
          <img src={flyLogo} alt="Fly Agency Logo" className="w-40 md:w-52 mx-auto drop-shadow-2xl" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2 animate-fade-in animation-delay-300">
          Acompanhamento
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-8 animate-fade-in animation-delay-500">
          Estratégico
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-4 animate-fade-in animation-delay-500">
          Tráfego + Conversão <span className="text-foreground font-semibold">(Premium)</span>
        </p>
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-10 animate-fade-in animation-delay-700">
          Uma máquina de vendas proprietária, implementada em <span className="text-foreground font-bold">45 dias</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-700">
          <a
            href="#investimento"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
            style={{ boxShadow: '0 0 30px hsl(265 85% 58% / 0.4)' }}
          >
            Ver Investimento →
          </a>
          <a
            href="#pilares"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold border border-border bg-card/50 backdrop-blur-sm hover:bg-secondary transition-colors"
          >
            ▶ Explorar Proposta
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default CoverPage;
