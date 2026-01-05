interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <div className="flex gap-4 items-start">
    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shrink-0 font-bold text-white">
      {number}
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold gradient-text mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const ProcessPage = () => {
  const steps = [
    {
      number: 1,
      title: "Briefing",
      description: "Coletamos objetivos e informações para alinhar expectativas e entender profundamente seu negócio.",
    },
    {
      number: 2,
      title: "Estratégia",
      description: "Criamos um plano personalizado, com metas claras e estratégias para o tráfego pago e marketing digital.",
    },
    {
      number: 3,
      title: "Execução",
      description: "Produzimos materiais de qualidade e configuramos campanhas com CRM integrado. Monitoramos métricas e otimizamos continuamente.",
    },
    {
      number: 4,
      title: "Monitoramento e Resultados",
      description: "Relatórios quinzenais com métricas detalhadas. Mensuração completa mensal. Resultados expressivos em 45 a 60 dias.",
    },
  ];

  return (
    <section className="pdf-page relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="abstract-shape blob-purple w-[500px] h-[500px] top-1/3 -right-60" />
      <div className="abstract-shape blob-pink w-[400px] h-[400px] -bottom-20 left-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-2">NOSSO PROCESSO</h2>
          <h3 className="text-4xl md:text-5xl font-black gradient-text font-display italic">de trabalho</h3>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="animate-slide-in-left"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProcessStep {...step} />
              {index < steps.length - 1 && (
                <div className="ml-5 mt-4 h-8 w-px bg-gradient-to-b from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-primary text-white text-center">
          <p className="text-lg font-semibold">
            Esse processo garante eficiência, ajustes contínuos e resultados sólidos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessPage;
