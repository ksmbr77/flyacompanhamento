import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TrendingDown, Users, Clock, AlertTriangle } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const problems = [
  {
    icon: <TrendingDown className="w-5 h-5" />,
    stat: "73%",
    title: "dos negócios locais",
    description: "investem em anúncios sem estratégia e perdem dinheiro todos os meses sem resultados reais.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    stat: "Custa 5x",
    title: "mais caro conquistar",
    description: "um novo cliente do que reter os atuais. Sem processo comercial, o custo dispara.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    stat: "90%",
    title: "dos leads esfriam",
    description: "em menos de 5 minutos sem resposta. Sem atendimento estruturado, você perde vendas todos os dias.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    stat: "Fraco",
    title: "posicionamento digital",
    description: "sem uma estratégia clara de branding, sua marca não se diferencia e perde força frente à concorrência.",
  },
];

const DiagnosticPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="page-section grid-pattern" id="diagnostico" ref={ref}>
      <div className="blob-purple w-[600px] h-[600px] top-10 -right-40" />
      <div className="blob-pink w-[500px] h-[500px] -bottom-20 -left-20" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className={`reveal ${isVisible ? 'visible' : ''} text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4`}>
            Diagnóstico
          </p>
          <h2 className={`reveal animation-delay-100 ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-black mb-4`}>
            Por que seu negócio <span className="gradient-text">não escala?</span>
          </h2>
          <p className={`reveal animation-delay-200 ${isVisible ? 'visible' : ''} text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base`}>
            A maioria dos empresários enfrenta esses problemas diariamente — e nem percebe quanto dinheiro está deixando na mesa.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className={`reveal-scale ${isVisible ? 'visible' : ''} group`}
              style={{ transitionDelay: `${(idx + 2) * 80}ms` }}
            >
              <div className="h-full p-6 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 text-destructive group-hover:bg-destructive/20 transition-colors">
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-black text-destructive mb-1">{problem.stat}</div>
                    <h3 className="font-bold text-sm mb-1.5">{problem.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className={`reveal animation-delay-800 ${isVisible ? 'visible' : ''} mt-12 text-center`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-primary/5">
            <span className="text-sm text-muted-foreground">A solução?</span>
            <span className="text-sm font-bold gradient-text">Um sistema completo que resolve tudo isso →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticPage;
