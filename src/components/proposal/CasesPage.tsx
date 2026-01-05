import caseBoneCia from "@/assets/case-bone-cia.png";
import caseOtica from "@/assets/case-otica.png";
import caseOralSaude from "@/assets/case-oral-saude.png";

interface CaseCardProps {
  image: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  instagram: string;
  highlight: string;
}

const CaseCard = ({ image, title, description, metrics, instagram, highlight }: CaseCardProps) => (
  <div className="gradient-border card-elevated relative overflow-hidden group h-full">
    <div className="relative z-10 flex flex-col h-full">
      {/* Image */}
      <div className="w-full h-28 md:h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 flex-1">{description}</p>

      {/* Highlight metric */}
      <div className="mb-4 p-3 rounded-xl bg-gradient-primary text-white text-center">
        <p className="text-2xl font-black">{highlight}</p>
      </div>

      {/* Metrics */}
      <div className="space-y-2 mb-4">
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{metric.label}</span>
            <span className="text-sm font-semibold text-primary">{metric.value}</span>
          </div>
        ))}
      </div>

      {/* Instagram */}
      <p className="text-sm text-primary font-medium pt-2 border-t border-border">{instagram}</p>
    </div>
  </div>
);

const CasesPage = () => {
  const cases = [
    {
      image: caseBoneCia,
      title: "Boné & Cia",
      description: "Aumento expressivo nas vendas online com funis automatizados e gestão de tráfego profissional.",
      highlight: "+320% vendas",
      metrics: [
        { label: "Funis automatizados", value: "✓" },
        { label: "ROI positivo", value: "✓" },
      ],
      instagram: "@bone.cia1",
    },
    {
      image: caseOtica,
      title: "Ótica Boa Luz",
      description: "Crescimento expressivo na captação de leads com campanhas personalizadas no Google Ads.",
      highlight: "+180% leads",
      metrics: [
        { label: "Google Ads otimizado", value: "✓" },
        { label: "Automação de vendas", value: "✓" },
      ],
      instagram: "@oticaboaluz",
    },
    {
      image: caseOralSaude,
      title: "Oral Saúde",
      description: "Expansão no agendamento de consultas com estratégias avançadas de marketing digital.",
      highlight: "+250% agendamentos",
      metrics: [
        { label: "Marketing digital", value: "✓" },
        { label: "Presença online", value: "✓" },
      ],
      instagram: "@clinicaoralsaude_",
    },
  ];

  return (
    <section className="pdf-page relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="abstract-shape blob-purple w-[500px] h-[500px] top-1/4 -right-40" />
      <div className="abstract-shape blob-pink w-[300px] h-[300px] bottom-20 -left-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Cases de <span className="gradient-text">Sucesso</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Resultados reais de clientes que transformaram seus negócios com nossas soluções
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CaseCard {...caseItem} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Esses são apenas alguns dos{" "}
            <span className="text-primary font-semibold">resultados reais</span>{" "}
            que geramos para nossos parceiros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasesPage;
