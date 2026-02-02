import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Finance Agent AI",
    period: "Aug 2025 – Oct 2025",
    description: "AI-Powered Stock Market Analysis with Real-Time Insights and Visualizations",
    details: [
      "Built a full-stack AI agent platform for stock analysis using Groq LLM with the PhiData framework.",
      "Integrated a FastAPI backend and a Chart.js frontend for dynamic visual comparison of market trends.",
      "Designed a modern UI/UX with interactive charts, loading states, and smooth animations.",
    ],
    tech: ["Python", "FastAPI", "Groq API", "PhiData", "Chart.js"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    demoVideo: "#",
    github: "https://github.com/Vimalraj-D/Stock_Market_Analyser",
    live: "#",
  },
  {
    title: "SmartFood AI",
    period: "Feb 2025 – Mar 2025",
    description: "AI-based food recognition and nutritional analysis application",
    details: [
      "AI-based food recognition and nutritional analysis from images.",
      "Personalized diet and meal recommendations based on user preferences.",
      "Ingredient-based recipe suggestions with smart cooking guidance.",
    ],
    tech: ["Python", "Computer Vision", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    demoVideo:"/projects/Screen Recording 2025-02-28 205224.mp4",
    github: "https://github.com/Vimalraj-D/FOODIE_AI",
    live: "public//projects//Screen Recording 2025-02-28 205224.mp4",
  },
  {
    title: "Book Recommendation System",
    period: "Jul 2024 – Aug 2024",
    description: "Personalized book recommendations using collaborative filtering",
    details: [
      "Built a personalized recommendation engine using collaborative filtering and user preferences.",
      "Deployed as a Flask web app with a responsive frontend interface.",
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "Flask"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    demoVideo: "#",
    github: "https://github.com/Vimalraj-D/Book-Recommendation",
    live: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-primary mb-12" />

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-border bg-card hover:border-primary transition-colors group overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Project Image */}
                <div className="h-64 lg:h-auto overflow-hidden relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                        href={project.demoVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Watch Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{project.period}</p>
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-primary transition-colors group/btn"
                      >
                        <Github className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary-foreground transition-colors" />
                      </a>
                      <a 
                        href={project.live}
                        className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-primary transition-colors group/btn"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary-foreground transition-colors" />
                      </a>
                    </div>
                  </div>

                  <p className="text-primary text-sm mb-4">{project.description}</p>

                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                        <span className="text-primary">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted text-xs text-muted-foreground font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
