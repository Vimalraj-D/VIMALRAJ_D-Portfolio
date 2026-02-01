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
            src="https://images.unsplash.com/photo-1611200945005-403b70229452?w=800&h=400&fit=crop&crop=face"
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
