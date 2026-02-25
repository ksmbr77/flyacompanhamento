import { MessageSquare, BarChart3, Settings, Shield, MapPin, CheckCircle2 } from "lucide-react";

const extras = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Grupo Exclusivo no WhatsApp",
    desc: "Comunicação direta e ágil com a equipe.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Relatórios Completos",
    desc: "Métricas detalhadas e acompanhamento quinzenal.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Setup + Infraestrutura",
    desc: "Estruturação completa do seu ecossistema digital.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Suporte Prolongado e Prioritário",
    desc: "Garantia de atendimento dedicado e consultivo.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Exclusividade do Segmento",
    desc: "Não atendemos concorrentes diretos na sua região.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Acompanhamento Estratégico",
    desc: "Reuniões regulares de alinhamento e otimização.",
  },
];

const AboutPage = () => {
  return (
    <section className="page-section grid-pattern" id="incluso">
      <div className="blob-purple w-[600px] h-[600px] -top-20 right-0" />
      <div className="blob-pink w-[400px] h-[400px] bottom-20 -left-40" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="mb-14 text-center">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-in">Tudo incluso</p>
          <h2 className="text-4xl md:text-5xl font-black animate-fade-in animation-delay-150">
            O que está <span className="gradient-text">Incluído</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {extras.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
