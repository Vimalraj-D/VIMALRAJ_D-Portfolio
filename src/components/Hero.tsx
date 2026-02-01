import { Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const useTypingEffect = (text: string, speed: number = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    setIsComplete(false);
    
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete };
};

export const Hero = () => {
  const { displayedText, isComplete } = useTypingEffect("Hi, I'm Vimalraj D", 80);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 pb-32">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">
              AI & Machine Learning Engineer
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">{displayedText}</span>
              <span className={`typing-cursor text-primary ${isComplete ? 'opacity-0' : ''}`}>|</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Innovative AI & Machine Learning Engineer with hands-on experience in developing, 
              optimizing, and deploying intelligent systems. Passionate about transforming 
              real-world challenges into scalable, data-driven AI solutions.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="border-border text-foreground hover:bg-muted px-8 py-6 text-base font-medium"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/certificates/VIMALRAJ_AIML-Resume.pdf';
                  link.download = 'VIMALRAJ_AIML-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://github.com/Vimalraj-D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-muted hover:bg-primary transition-colors group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/vimalraj-d-8278972a5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-muted hover:bg-primary transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:vimalrajnov172005@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-muted hover:bg-primary transition-colors group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-muted border-2 border-primary overflow-hidden">
                <img 
                  src="public//mine.jpg"
                  alt="Vimalraj D"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
