import flyLogo from "@/assets/fly-logo.png";
import { Users, TrendingUp, Award, Heart } from "lucide-react";

const AboutPage = () => {
  const highlights = [
    { icon: <Users className="w-6 h-6" />, label: "Equipe especializada e dedicada" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Resultados mensuráveis e escaláveis" },
    { icon: <Award className="w-6 h-6" />, label: "Estratégias personalizadas" },
    { icon: <Heart className="w-6 h-6" />, label: "Atendimento próximo e consultivo" },
  ];

  return (
    <section className="pdf-page relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="abstract-shape blob-purple w-[500px] h-[500px] -top-20 right-0" />
      <div className="abstract-shape blob-pink w-[400px] h-[400px] bottom-40 -left-40" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header with Logo */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="section-title">
              Quem <span className="gradient-text">Somos?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto md:mx-0" />
          </div>
          <div className="shrink-0">
            <img 
              src={flyLogo} 
              alt="Fly Agency Logo" 
              className="w-48 md:w-56 drop-shadow-2xl animate-float"
            />
          </div>
        </div>

        {/* Description */}
        <div className="card-elevated gradient-border mb-8">
          <div className="relative z-10 space-y-4">
            <p className="text-lg leading-relaxed">
              A <span className="text-primary font-bold">Fly Agency</span> é uma assessoria de marketing especializada em{" "}
              <span className="font-semibold">soluções estratégicas</span> para comunicação e marketing digital.
            </p>
            <p className="text-lg leading-relaxed">
              Somos seu <span className="highlight-box">parceiro de crescimento</span>, focados em gerar resultados previsíveis e duradouros para o seu negócio. Nossa abordagem combina estratégia, criatividade e tecnologia.
            </p>
            <p className="text-lg leading-relaxed">
              Nosso objetivo é <span className="font-semibold text-primary">potencializar a presença online e offline</span> de nossos clientes, criando conteúdos e campanhas que geram resultados reais, com mensuração financeira sobre o projeto.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="text-center p-4 rounded-xl bg-card/50 hover:bg-card transition-colors animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-3 text-white">
                {item.icon}
              </div>
              <p className="text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-2xl font-display italic text-muted-foreground">
            "A partir de agora, seu maior problema será{" "}
            <span className="gradient-text font-semibold not-italic">ter clientes demais</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
