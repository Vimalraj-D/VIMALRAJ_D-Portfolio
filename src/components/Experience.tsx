import { Building2, Calendar, ExternalLink, X, Award, Code2, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <div className="relative border border-border p-6 md:p-8 bg-background rounded-xl hover:border-primary/50 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/5">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-border/50">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      AI/ML Developer Intern
                    </h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      <span className="font-semibold text-lg">CubeAI Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground bg-gradient-to-r from-muted/50 to-muted/30 px-4 py-2.5 rounded-lg border border-border/50 backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium">Mar 2025 – Jun 2025</span>
              </div>
            </div>

            {/* Key Highlights Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all group/card">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Automation</h5>
                </div>
                <p className="text-sm text-muted-foreground">FastAPI modules for procurement workflows</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all group/card">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">AI Assistant</h5>
                </div>
                <p className="text-sm text-muted-foreground">LangChain-powered intelligent query system</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all group/card">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Computer Vision</h5>
                </div>
                <p className="text-sm text-muted-foreground">YOLO-driven material verification</p>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-primary rounded-full" />
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Key Responsibilities
                </h4>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3 group/item hover:bg-muted/20 p-3 rounded-lg transition-all">
                  <span className="text-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform">▸</span>
                  <span className="leading-relaxed">
                    Contributed to a <span className="text-foreground font-medium">Construction Automation Project</span> transforming procurement and on-site operations.
                  </span>
                </li>
                <li className="flex gap-3 group/item hover:bg-muted/20 p-3 rounded-lg transition-all">
                  <span className="text-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform">▸</span>
                  <span className="leading-relaxed">
                    Developed <span className="text-foreground font-medium">FastAPI-based automation modules</span> for purchase orders, batch slips, and invoices integrated with Tally for GST and inventory tracking.
                  </span>
                </li>
                <li className="flex gap-3 group/item hover:bg-muted/20 p-3 rounded-lg transition-all">
                  <span className="text-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform">▸</span>
                  <span className="leading-relaxed">
                    Designed and deployed a <span className="text-foreground font-medium">LangChain-powered LLM Assistant</span> for intelligent query handling, documentation automation, and real-time decision support.
                  </span>
                </li>
                <li className="flex gap-3 group/item hover:bg-muted/20 p-3 rounded-lg transition-all">
                  <span className="text-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform">▸</span>
                  <span className="leading-relaxed">
                    Collaborated on <span className="text-foreground font-medium">YOLO-driven material verification</span> and data analytics dashboards, improving accuracy, transparency, and process efficiency across modules.
                  </span>
                </li>
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-primary rounded-full" />
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Technologies Used
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["FastAPI", "LangChain", "YOLO", "Python", "Tally Integration", "Data Analytics"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-foreground text-sm font-mono rounded-lg border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border/50">
              <Button
                variant="outline"
                onClick={() => setShowCertificate(true)}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20"
              >
                <Award className="w-4 h-4 mr-2" />
                View Certificate
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <a href="https://github.com/Vimalraj-D/CubeAI-Solutions---Internship-Detail" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Projects on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

      {/* Certificate Popup Modal */}
{showCertificate && (
  <div 
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8 animate-in fade-in duration-300 backdrop-blur-sm" 
    onClick={() => setShowCertificate(false)}
  >
    <div className="relative w-full h-full max-w-5xl max-h-full flex flex-col animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowCertificate(false)}
          className="text-white hover:text-primary transition-all flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-lg backdrop-blur-md border border-white/20 hover:border-primary/50 hover:scale-105"
        >
          <X className="w-5 h-5" />
          <span className="font-medium">Close</span>
        </button>
      </div>
      <div className="bg-black rounded-xl overflow-hidden  border-primary/30 shadow-2xl shadow-primary/20 flex-1 flex items-center justify-center">
        <img 
          src="/certificates/Mr Vimalraj D - ICCAS180725199_page-0001.jpg" 
          alt="Internship Certificate" 
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const iframe = document.createElement('iframe');
              iframe.src = "/certificates/Mr Vimalraj D - ICCAS180725199.pdf";
              iframe.className = "w-full h-full";
              parent.appendChild(iframe);
            }
          }}
        />
      </div>
    </div>
  </div>
)}
      </div>
    </section>
  );
};