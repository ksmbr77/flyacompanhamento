import { Target, MessageCircle, Palette, ChevronRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: <Target className="w-7 h-7" />,
    title: "Geração de Demanda",
    subtitle: "Gestão de Tráfego Pago (Meta Ads)",
    items: [
      "Planejamento de todas as campanhas",
      "Otimização Diária e Semanais",
      "Testes e Validação nas campanhas",
      "Remarketing",
      "Roteiros para Anúncios",
    ],
  },
  {
    number: "02",
    icon: <MessageCircle className="w-7 h-7" />,
    title: "Conversão",
    subtitle: "Treinamento Comercial",
    items: [
      "WhatsApp Business otimizado",
      "Scripts de atendimento",
      "Processos de follow-up",
      "Técnicas de fechamento",
    ],
  },
  {
    number: "03",
    icon: <Palette className="w-7 h-7" />,
    title: "Posicionamento Growth",
    subtitle: "Branding & Autoridade",
    items: [
      "Posicionamento de marca",
      "Identidade visual digital",
      "Conteúdo estratégico",
      "Presença nas redes sociais",
    ],
  },
];

const ServicesPage = () => {
  return (
    <section className="page-section grid-pattern" id="pilares">
      <div className="blob-pink w-[700px] h-[700px] -top-40 -left-40" />
      <div className="blob-purple w-[500px] h-[500px] bottom-0 right-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="mb-14 text-center">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-in">O que você recebe</p>
          <h2 className="text-4xl md:text-5xl font-black animate-fade-in animation-delay-150">
            Os 3 <span className="gradient-text">Pilares</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="card-elevated gradient-border group hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="relative z-10">
                {/* Number */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black text-primary/30">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{pillar.subtitle}</p>

                <div className="space-y-2.5">
                  {pillar.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
