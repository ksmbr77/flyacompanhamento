import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import { Download, Eye, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverPage from "@/components/proposal/CoverPage";
import CasesPage from "@/components/proposal/CasesPage";
import ServicesPage from "@/components/proposal/ServicesPage";
import AboutPage from "@/components/proposal/AboutPage";
import ProcessPage from "@/components/proposal/ProcessPage";
import ContactPage from "@/components/proposal/ContactPage";

const Index = () => {
  const documentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewMode, setPreviewMode] = useState(true);

  const handleDownloadPDF = async () => {
    if (!documentRef.current) return;

    setIsGenerating(true);

    const element = documentRef.current;
    const opt = {
      margin: 0,
      filename: "Fly-Agency-Acompanhamento-Estrategico.pdf",
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#0d0d0d",
        logging: false,
      },
      jsPDF: { 
        unit: "mm" as const, 
        format: "a4", 
        orientation: "landscape" as const
      },
      pagebreak: { mode: ["css", "legacy"] },
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Action Bar */}
      <div className="fixed top-4 right-4 z-50 flex gap-3 no-print">
        <Button
          variant="outline"
          onClick={() => setPreviewMode(!previewMode)}
          className="bg-card/80 backdrop-blur-sm border-border hover:bg-secondary"
        >
          <Eye className="w-4 h-4 mr-2" />
          {previewMode ? "Modo Scroll" : "Modo Preview"}
        </Button>
        <Button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="bg-gradient-primary hover:opacity-90 text-white border-0"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Gerando PDF...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Baixar PDF
            </>
          )}
        </Button>
      </div>

      {/* Document Content */}
      <div 
        ref={documentRef}
        className={previewMode ? "space-y-0" : "space-y-8 py-8"}
      >
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
