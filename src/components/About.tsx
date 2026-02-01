import { useState } from "react";
import { MapPin, Phone, Mail, GraduationCap, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InspirationModal } from "./InspirationModal";

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Computer Science Engineering student specializing in AI & Machine Learning 
              at Dr. Mahalingam College of Engineering and Technology, Coimbatore. 
              Currently maintaining a CGPA of 8.4.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Skilled in integrating LLMs, Generative AI, and Computer Vision to automate 
              complex workflows and enhance decision-making. I'm passionate about building 
              intelligent systems that solve real-world problems.
            </p>

            {/* Inspiration Section */}
            <div className="mt-8 p-6 bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-xl hover:border-primary/50 transition-colors group">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    My Inspiration
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  </h3>
                  <p className="text-muted-foreground italic mb-4">
                    "When something is important enough, you do it even if the odds are not in your favor."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://images.unsplash.com/photo-1611200945005-403b70229452?w=60&h=60&fit=crop&crop=face"
                        alt="Elon Musk"
                        className="w-12 h-12 object-cover rounded-lg ring-2 ring-primary/30"
                      />
                      <div>
                        <p className="text-foreground font-semibold">Elon Musk</p>
                        <p className="text-muted-foreground text-sm">CEO of Tesla & SpaceX</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsModalOpen(true)}
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground">+91 93616 79654</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground">vimalrajnov172005@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <GraduationCap className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="text-foreground">B.E. CSE (AI & ML) - CGPA: 8.4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InspirationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
