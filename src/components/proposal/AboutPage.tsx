import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MessageSquare, BarChart3, Settings, Shield, MapPin, CheckCircle2 } from "lucide-react";

const extras = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Grupo Exclusivo no WhatsApp",
    desc: "Canal direto com a equipe para comunicação ágil, feedbacks rápidos e decisões em tempo real.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Relatórios Completos",
    desc: "Dashboards quinzenais com métricas de performance, ROI, custo por lead e análise de resultados.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Setup + Infraestrutura",
    desc: "Configuração completa de pixel, eventos, catálogos, Business Manager e todo ecossistema digital.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Suporte Prioritário",
    desc: "Atendimento dedicado e consultivo com resposta em até 2 horas em dias úteis.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Exclusividade Regional",
    desc: "Não atendemos concorrentes diretos na sua região — seu segmento é exclusivo conosco.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Reuniões Estratégicas",
    desc: "Encontros quinzenais de alinhamento, ajustes de rota e planejamento de novas ações.",
  },
];

const AboutPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="page-section grid-pattern" id="incluso" ref={ref}>
      <div className="blob-purple w-[600px] h-[600px] -top-40 right-0" />
      <div className="blob-pink w-[500px] h-[500px] bottom-10 -left-40" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className={`reveal ${isVisible ? 'visible' : ''} text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4`}>
            Além dos Pilares
          </p>
          <h2 className={`reveal animation-delay-100 ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-black mb-4`}>
            O que está <span className="gradient-text">Incluído</span>
          </h2>
          <p className={`reveal animation-delay-200 ${isVisible ? 'visible' : ''} text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base`}>
            Cada detalhe pensado para garantir que você tenha a melhor experiência e os melhores resultados.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {extras.map((item, idx) => (
            <div
              key={idx}
              className={`reveal-scale ${isVisible ? 'visible' : ''} group`}
              style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
            >
              <div className="h-full p-5 sm:p-6 rounded-2xl bg-card/60 border border-border/40 hover:border-primary/30 hover:bg-card/80 transition-all duration-500">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm sm:text-base mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className={`reveal animation-delay-800 ${isVisible ? 'visible' : ''} mt-12`}>
          <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <span className="text-foreground font-semibold">Nesse formato, não cuidamos apenas dos anúncios.</span>{" "}
              Nosso objetivo é transformar investimento em anúncios em{" "}
              <span className="gradient-text font-bold">vendas previsíveis e crescimento estruturado</span>{" "}
              da sua marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
