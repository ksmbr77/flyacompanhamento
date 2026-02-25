import flyLogo from "@/assets/fly-logo.png";
import { ArrowDown, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CoverPage = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="page-section min-h-screen grid-pattern" id="cover" ref={ref}>
      <div className="blob-purple w-[900px] h-[900px] -top-80 -right-60 opacity-60" />
      <div className="blob-pink w-[700px] h-[700px] bottom-0 -left-60 opacity-50" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" 
        style={{ background: 'radial-gradient(circle, hsl(265 85% 58% / 0.08) 0%, transparent 70%)' }} 
      />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center max-w-4xl mx-auto w-full">
        {/* Badge */}
        <div className={`reveal ${isVisible ? 'visible' : ''} inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-10`}>
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          <span className="text-xs sm:text-sm text-muted-foreground tracking-widest uppercase">Proposta Exclusiva — 2026</span>
          <Lock className="w-3.5 h-3.5 text-muted-foreground" />
        </div>

        {/* Logo */}
        <div className={`reveal animation-delay-100 ${isVisible ? 'visible' : ''} mb-8`}>
          <img src={flyLogo} alt="Fly Agency Logo" className="w-32 sm:w-40 md:w-48 mx-auto drop-shadow-2xl animate-float" />
        </div>

        {/* Title */}
        <h1 className={`reveal animation-delay-200 ${isVisible ? 'visible' : ''} text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-2`}>
          Acompanhamento
        </h1>
        <h2 className={`reveal animation-delay-300 ${isVisible ? 'visible' : ''} text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black gradient-text leading-none mb-8`}>
          Estratégico
        </h2>

        {/* Subtitle */}
        <p className={`reveal animation-delay-400 ${isVisible ? 'visible' : ''} text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-3`}>
          Sistema completo de <span className="text-foreground font-semibold">Aquisição, Conversão e Posicionamento</span>.
        </p>
        <p className={`reveal animation-delay-500 ${isVisible ? 'visible' : ''} text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed mb-10`}>
          Uma máquina de vendas implementada em <span className="text-foreground font-bold">45 dias</span> — resultados a partir do primeiro mês.
        </p>

        {/* CTAs */}
        <div className={`reveal animation-delay-600 ${isVisible ? 'visible' : ''} flex flex-col sm:flex-row gap-4 w-full sm:w-auto`}>
          <a
            href="#investimento"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105 glow-effect"
            style={{ background: 'var(--gradient-primary)' }}
          >
            Ver Investimento →
          </a>
          <a
            href="#pilares"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border border-border bg-card/60 backdrop-blur-sm hover:bg-secondary hover:border-primary/30 transition-all duration-300 text-sm sm:text-base"
          >
            ▶ Explorar Proposta
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
