import flyLogo from "@/assets/fly-logo.png";

const CoverPage = () => {
  return (
    <section className="pdf-page relative overflow-hidden flex flex-col justify-center items-center min-h-screen">
      {/* Abstract decorative shapes */}
      <div className="abstract-shape blob-purple w-[600px] h-[600px] -top-40 -right-40" />
      <div className="abstract-shape blob-pink w-[400px] h-[400px] -bottom-20 -left-20" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src={flyLogo} 
            alt="Fly Agency Logo" 
            className="w-56 md:w-72 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 animate-fade-in animation-delay-150">
          ACOMPANHAMENTO
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-8 animate-fade-in animation-delay-300">
          ESTRATÉGICO
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in animation-delay-500">
          Como sua empresa pode{" "}
          <span className="highlight-box">crescer conosco</span>
        </p>

        {/* Decorative line */}
        <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full animate-fade-in animation-delay-500" />
      </div>

      {/* Footer info */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-muted-foreground text-sm animate-fade-in animation-delay-500">
        <p>flyagency.pro • Seu parceiro de crescimento</p>
      </div>
    </section>
  );
};

export default CoverPage;
