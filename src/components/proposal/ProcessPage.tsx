import { Check } from "lucide-react";

const ProcessPage = () => {
  return (
    <section className="page-section grid-pattern" id="investimento">
      <div className="blob-purple w-[600px] h-[600px] top-1/3 -left-60" />
      <div className="blob-pink w-[500px] h-[500px] -bottom-20 right-0" />

      <div className="relative z-10 max-w-3xl mx-auto w-full text-center">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-in">Investimento</p>
        <h2 className="text-4xl md:text-5xl font-black mb-4 animate-fade-in animation-delay-150">
          Quanto <span className="gradient-text">Custa?</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto animate-fade-in animation-delay-300">
          Investimento transparente com retorno previsível. Escolha a forma de pagamento ideal para você.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Monthly */}
          <div className="card-elevated gradient-border p-8 animate-fade-in animation-delay-300">
            <div className="relative z-10">
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Mensal</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-black gradient-text">2.300</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Contrato mínimo de 90 dias</p>

              <div className="space-y-3 text-left">
                {["3 Pilares completos", "Setup + Infraestrutura", "Exclusividade regional", "Suporte prioritário", "Relatórios quinzenais"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* One-time */}
          <div className="relative card-elevated p-8 animate-fade-in animation-delay-500" style={{ background: 'linear-gradient(145deg, hsl(265 40% 16%), hsl(240 10% 6%))' }}>
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase">
              Melhor oferta
            </div>
            <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">À Vista</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="text-5xl font-black gradient-text">6.000</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Pagamento único · 90 dias</p>

            <div className="space-y-3 text-left">
              {["Tudo do plano mensal", "Economia de R$ 900", "Prioridade no onboarding", "Bônus: Consultoria extra", "Garantia estendida"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-muted-foreground animate-fade-in animation-delay-700">
          + Investimento em anúncios à parte (recomendado: R$ 1.200 – R$ 2.000/mês)
        </p>
      </div>
    </section>
  );
};

export default ProcessPage;
