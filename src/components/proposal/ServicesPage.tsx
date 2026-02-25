import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target, MessageCircle, Palette, ChevronRight, Zap, BarChart3, RefreshCw, FileText, Phone, UserCheck, BrainCircuit, Megaphone, Eye, Layers } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: <Target className="w-7 h-7" />,
    color: "from-primary to-accent",
    title: "Geração de Demanda",
    subtitle: "Gestão de Tráfego Pago (Meta Ads)",
    description: "Criamos campanhas estratégicas para atrair clientes qualificados diariamente para o seu negócio.",
    items: [
      { icon: <Layers className="w-3.5 h-3.5" />, text: "Planejamento completo de campanhas" },
      { icon: <BarChart3 className="w-3.5 h-3.5" />, text: "Otimização diária e semanal" },
      { icon: <Zap className="w-3.5 h-3.5" />, text: "Testes A/B e validação contínua" },
      { icon: <RefreshCw className="w-3.5 h-3.5" />, text: "Remarketing inteligente" },
      { icon: <FileText className="w-3.5 h-3.5" />, text: "Roteiros para anúncios de alta conversão" },
    ],
  },
  {
    number: "02",
    icon: <MessageCircle className="w-7 h-7" />,
    color: "from-primary to-primary-glow",
    title: "Conversão",
    subtitle: "Treinamento Comercial Completo",
    description: "Transformamos seus leads em clientes com processos e scripts validados de atendimento.",
    items: [
      { icon: <Phone className="w-3.5 h-3.5" />, text: "Treinamento de atendimento via WhatsApp" },
      { icon: <UserCheck className="w-3.5 h-3.5" />, text: "Scripts de abordagem e fechamento" },
      { icon: <BrainCircuit className="w-3.5 h-3.5" />, text: "Técnicas de follow-up e acompanhamento" },
      { icon: <RefreshCw className="w-3.5 h-3.5" />, text: "Implantação de funil de vendas completo" },
    ],
  },
  {
    number: "03",
    icon: <Palette className="w-7 h-7" />,
    color: "from-accent to-primary-glow",
    title: "Posicionamento Growth",
    subtitle: "Branding & Autoridade Digital",
    description: "Elevamos o branding e posicionamento da sua marca com insights estratégicos para se destacar no mercado.",
    items: [
      { icon: <Megaphone className="w-3.5 h-3.5" />, text: "Melhoria de branding e identidade visual" },
      { icon: <Eye className="w-3.5 h-3.5" />, text: "Insights estratégicos de posicionamento" },
      { icon: <Layers className="w-3.5 h-3.5" />, text: "Análise de concorrência e diferenciação" },
      { icon: <BarChart3 className="w-3.5 h-3.5" />, text: "Fortalecimento de autoridade no segmento" },
    ],
  },
];

const ServicesPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="page-section grid-pattern" id="pilares" ref={ref}>
      <div className="blob-pink w-[800px] h-[800px] -top-60 -left-60" />
      <div className="blob-purple w-[600px] h-[600px] bottom-0 right-0" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className={`reveal ${isVisible ? 'visible' : ''} text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4`}>
            A Solução Completa
          </p>
          <h2 className={`reveal animation-delay-100 ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-black mb-4`}>
            Os 3 Pilares do <span className="gradient-text">Crescimento</span>
          </h2>
          <p className={`reveal animation-delay-200 ${isVisible ? 'visible' : ''} text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base`}>
            Um sistema integrado que trabalha em todas as frentes do seu negócio — da geração de demanda até o posicionamento da marca.
          </p>
        </div>

        {/* Pillars */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`reveal-scale ${isVisible ? 'visible' : ''} group`}
              style={{ transitionDelay: `${(idx + 2) * 150}ms` }}
            >
              <div className="h-full rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Top accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${pillar.color}`} />

                <div className="p-6 sm:p-7">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-4xl font-black text-border">
                      {pillar.number}
                    </span>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {pillar.icon}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black mb-1">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-primary font-medium mb-3">{pillar.subtitle}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>

                  {/* Items */}
                  <div className="space-y-3">
                    {pillar.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs sm:text-sm group/item">
                        <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/item:bg-primary/20 transition-colors">
                          {item.icon}
                        </div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
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
