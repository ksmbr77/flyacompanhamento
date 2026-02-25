import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const ProcessPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    "3 Pilares completos integrados",
    "Setup + Infraestrutura total",
    "Exclusividade regional do segmento",
    "Suporte prioritário dedicado",
    "Relatórios quinzenais detalhados",
    "Grupo exclusivo no WhatsApp",
    "Treinamento comercial completo",
    "Reuniões estratégicas quinzenais",
  ];

  return (
    <section className="page-section grid-pattern" id="investimento" ref={ref}>
      <div className="blob-purple w-[700px] h-[700px] top-1/4 -left-60" />
      <div className="blob-pink w-[600px] h-[600px] -bottom-40 right-0" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className={`reveal ${isVisible ? 'visible' : ''} text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4`}>
            Investimento
          </p>
          <h2 className={`reveal animation-delay-100 ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-black mb-4`}>
            Quanto <span className="gradient-text">Custa?</span>
          </h2>
          <p className={`reveal animation-delay-200 ${isVisible ? 'visible' : ''} text-muted-foreground max-w-xl mx-auto text-sm sm:text-base`}>
            Investimento transparente e acessível. Escolha a melhor forma de pagamento.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {/* Monthly */}
          <div className={`reveal-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="h-full p-7 sm:p-8 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/20 transition-all duration-500">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-5 font-medium">Mensal</p>
              
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-sm text-muted-foreground font-medium">R$</span>
                <span className="text-5xl sm:text-6xl font-black gradient-text tracking-tight">2.300</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">por mês · contrato de 3 meses</p>

              <div className="space-y-3 mb-8">
                {features.slice(0, 6).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5579998615349?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%20mensal%20de%20Acompanhamento%20Estrat%C3%A9gico%20da%20Fly%20Agency!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-300"
              >
                Quero esse plano <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* À Vista */}
          <div className={`reveal-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <div className="h-full relative p-7 sm:p-8 rounded-2xl border border-primary/30 overflow-hidden transition-all duration-500 hover:border-primary/50" style={{ background: 'var(--gradient-card)' }}>
              {/* Best offer badge */}
              <div className="absolute top-0 right-0">
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-bl-xl text-xs font-bold uppercase" style={{ background: 'var(--gradient-primary)' }}>
                  <Sparkles className="w-3 h-3" />
                  Oferta Exclusiva
                </div>
              </div>

              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-5 font-medium">À Vista</p>
              
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-sm text-muted-foreground font-medium">R$</span>
                <span className="text-5xl sm:text-6xl font-black gradient-text tracking-tight">6.000</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">pagamento único · 3 meses</p>
              <p className="text-xs text-primary font-semibold mb-8">Economia de R$ 900</p>

              <div className="space-y-3 mb-8">
                {features.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5579998615349?text=Ol%C3%A1%2C%20quero%20aproveitar%20a%20oferta%20exclusiva%20%C3%A0%20vista%20do%20Acompanhamento%20Estrat%C3%A9gico%20da%20Fly%20Agency!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'var(--gradient-primary)' }}
              >
                Quero essa oferta <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className={`reveal animation-delay-600 ${isVisible ? 'visible' : ''} text-center text-xs sm:text-sm text-muted-foreground`}>
          + Investimento em anúncios à parte (recomendado: R$ 1.200 – R$ 2.000/mês para resultados consistentes)
        </p>
      </div>
    </section>
  );
};

export default ProcessPage;
