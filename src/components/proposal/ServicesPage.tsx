import { Megaphone, LineChart, Video, Zap, Target, Palette } from "lucide-react";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem = ({ icon, title, description }: ServiceItemProps) => (
  <div className="flex gap-4 items-start group">
    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Tráfego Pago",
      description: "Campanhas estratégicas em Google Ads, Meta Ads e TikTok Ads para maximizar seu retorno sobre o investimento e alcançar clientes qualificados.",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Automação e Funis",
      description: "Automatize suas vendas com funis inteligentes e Inteligência Artificial, convertendo leads em clientes de forma previsível.",
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "Marketing Estratégico",
      description: "Estratégias personalizadas de marketing digital para impulsionar e destacar sua marca na sua região.",
    },
    {
      icon: <Video className="w-6 h-6 text-white" />,
      title: "Produção de Vídeos",
      description: "Conteúdo audiovisual profissional que engaja seu público e fortalece sua presença digital.",
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "Design Gráfico",
      description: "Criação de materiais visuais para redes sociais e publicidade, focados em engajamento e conversão.",
    },
    {
      icon: <Megaphone className="w-6 h-6 text-white" />,
      title: "Gestão de Anúncios",
      description: "Criação e gestão de anúncios online para atrair público qualificado e gerar resultados rápidos via Meta Ads e Google Ads.",
    },
  ];

  return (
    <section className="pdf-page relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="abstract-shape blob-pink w-[600px] h-[600px] -top-40 -left-40" />
      <div className="abstract-shape blob-purple w-[400px] h-[400px] bottom-0 right-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="section-title">
            Serviços <span className="gradient-text">Oferecidos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceItem {...service} />
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="mt-12 card-elevated gradient-border">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 text-center">Plataformas de Anúncios</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {["Meta Ads", "Google Ads", "TikTok Ads", "YouTube Ads"].map((platform, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-3 bg-secondary rounded-full text-sm font-medium"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
