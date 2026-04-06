import { X, Quote, Rocket, Lightbulb, Target, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InspirationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InspirationModal = ({ isOpen, onClose }: InspirationModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto chatbot-glossy border border-white/20 rounded-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Always visible */}
        <button 
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors border border-white/20"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>
        
        {/* Header */}
        <div className="relative h-48 overflow-hidden -mt-12">
          <img 
            src="data:image/jpeg;base64,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"
            alt="Elon Musk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <h2 className="text-2xl font-bold text-foreground">Elon Musk</h2>
            <p className="text-muted-foreground">CEO of Tesla, SpaceX & X</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-start gap-4 p-4 bg-muted/30 backdrop-blur-sm rounded-xl border border-white/10">
            <Quote className="w-8 h-8 text-primary flex-shrink-0" />
            <p className="text-foreground italic text-lg leading-relaxed">
              "When something is important enough, you do it even if the odds are not in your favor."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors group">
              <Rocket className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-foreground mb-1">Visionary Thinking</h4>
              <p className="text-sm text-muted-foreground">Dream big and work towards making the impossible possible.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors group">
              <Target className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-foreground mb-1">Relentless Focus</h4>
              <p className="text-sm text-muted-foreground">Stay focused on goals despite challenges and setbacks.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors group">
              <Lightbulb className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-foreground mb-1">Innovation First</h4>
              <p className="text-sm text-muted-foreground">Always push boundaries and embrace creative solutions.</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Elon Musk's journey from a startup founder to leading revolutionary companies like Tesla, SpaceX, 
            and Neuralink inspires me to think beyond conventional limits. His approach to solving humanity's 
            biggest challenges through technology and relentless determination drives my passion for AI and 
            innovation.
          </p>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="flex-1 border-white/20 hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("https://twitter.com/elonmusk", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Follow on X
            </Button>
            <Button 
              className="flex-1 bg-primary text-primary-foreground"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
