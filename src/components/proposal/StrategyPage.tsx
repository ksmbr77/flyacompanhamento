import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Crosshair, RefreshCw, Users, UserPlus, GitBranch } from "lucide-react";

const strategies = [
  {
    number: "1",
    icon: <Crosshair className="w-5 h-5" />,
    title: "Captação Digital Estruturada",
    desc: "Sistema de atração de novos clientes através de campanhas segmentadas e funis otimizados.",
  },
  {
    number: "2",
    icon: <GitBranch className="w-5 h-5" />,
    title: "Sistema de Conversão Otimizado",
    desc: "Processos de atendimento e scripts validados para transformar leads em clientes pagantes.",
  },
  {
    number: "3",
    icon: <Users className="w-5 h-5" />,
    title: "Programa de Retenção",
    desc: "Estratégias para manter seus clientes ativos, aumentar ticket médio e gerar recorrência.",
  },
  {
    number: "4",
    icon: <UserPlus className="w-5 h-5" />,
    title: "Reativação de Ex-Clientes",
    desc: "Campanhas específicas para reconquistar clientes inativos com ofertas e comunicações personalizadas.",
  },
  {
    number: "5",
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Sistema Funil de Vendas",
    desc: "Automação completa do processo comercial — do primeiro contato ao fechamento e pós-venda.",
  },
];

const StrategyPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="page-section grid-pattern" id="estrategia" ref={ref}>
      <div className="blob-purple w-[600px] h-[600px] -top-40 -left-40" />
      <div className="blob-pink w-[500px] h-[500px] bottom-0 right-0" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className={`reveal ${isVisible ? 'visible' : ''} text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4`}>
            Estratégia Comercial
          </p>
          <h2 className={`reveal animation-delay-100 ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-black mb-4`}>
            Estrutura de <span className="gradient-text">Estratégias Comerciais</span>
          </h2>
          <p className={`reveal animation-delay-200 ${isVisible ? 'visible' : ''} text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base`}>
            5 frentes integradas que cobrem todo o ciclo de vida do seu cliente — da atração à fidelização.
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="space-y-4">
          {strategies.map((item, idx) => (
            <div
              key={idx}
              className={`reveal-left ${isVisible ? 'visible' : ''} group`}
              style={{ transitionDelay: `${(idx + 2) * 120}ms` }}
            >
              <div className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-card/60 border border-border/40 hover:border-primary/30 hover:bg-card/80 transition-all duration-500">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shrink-0 font-bold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                  {item.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategyPage;
