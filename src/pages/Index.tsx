import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverPage from "@/components/proposal/CoverPage";
import CasesPage from "@/components/proposal/CasesPage";
import ServicesPage from "@/components/proposal/ServicesPage";
import AboutPage from "@/components/proposal/AboutPage";
import ProcessPage from "@/components/proposal/ProcessPage";
import ContactPage from "@/components/proposal/ContactPage";

const navItems = [
  { label: "Pilares", href: "#pilares" },
  { label: "Incluso", href: "#incluso" },
  { label: "Investimento", href: "#investimento" },
  { label: "Contato", href: "#contato" },
];

const Index = () => {
  const documentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    if (!documentRef.current) return;
    setIsGenerating(true);
    const opt = {
      margin: 0,
      filename: "Fly-Agency-Acompanhamento-Estrategico.pdf",
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, allowTaint: true, backgroundColor: "#0a0a0f", logging: false },
      jsPDF: { unit: "mm" as const, format: "a4", orientation: "landscape" as const },
      pagebreak: { mode: ["css", "legacy"] },
    };
    try {
      await html2pdf().set(opt).from(documentRef.current).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 no-print">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8 px-5 py-2.5 rounded-full border border-border/60 bg-card/70 backdrop-blur-md">
            <a href="#cover" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">← Início</a>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 rounded-full px-5"
            >
              {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
              <span className="ml-2 hidden sm:inline">{isGenerating ? "Gerando..." : "PDF"}</span>
            </Button>
            <a
              href="https://wa.link/r4rqk9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
            >
              APROVAR →
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div ref={documentRef}>
        <CoverPage />
        <CasesPage />
        <ServicesPage />
        <AboutPage />
        <ProcessPage />
        <ContactPage />
      </div>
    </div>
  );
};

export default Index;
