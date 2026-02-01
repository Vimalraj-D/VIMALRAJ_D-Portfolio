import { Code, Brain, Database, Cloud, LineChart, Wrench, Zap } from "lucide-react";
import { useState } from 'react';

const skillCategories = [
  {
    title: "AI / ML Frameworks",
    icon: Brain,
    skills: ["PyTorch", "Scikit-Learn", "OpenCV", "LangChain", "Hugging Face", "Transformers"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C", "Java"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Backend & Deployment",
    icon: Wrench,
    skills: ["FastAPI", "Streamlit", "Flask", "Git", "VS Code", "Jupyter Notebook"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Data Handling",
    icon: Database,
    skills: ["Pandas", "NumPy", "Tesseract OCR", "YFinance"],
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "Google Vertex AI"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Visualization",
    icon: LineChart,
    skills: ["Chart.js", "Matplotlib", "HTML/CSS Dashboards"],
    gradient: "from-pink-500 to-rose-500",
  },
];

const runningSkills = [
  "Python", "PyTorch", "TensorFlow", "LangChain", "OpenCV", "FastAPI", 
  "AWS", "Azure", "Docker", "Git", "Hugging Face", "Scikit-Learn",
  "NumPy", "Pandas", "Flask", "Streamlit", "Computer Vision", "NLP"
];

const certifications = [
  {
    title: "Building RAG Apps Using MongoDB",
    issuer: "MongoDB",
    description: "Learn to build RAG applications using MongoDB with vector search and LLM integration.",
    logo:"https://www.designyourway.net/blog/wp-content/uploads/2025/01/MongoDB-featured-1.jpg",
    image: "public//certificates//SkillsCert20260130-32-x5zmc_page-0001.jpg",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "AWS x DeepLearning.AI",
    description: "Comprehensive course on LLM fundamentals, fine-tuning, and deployment strategies for production applications.",
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3W-EYGbhdyzNBQNdHDCVAimQdqgCWoRHNA&s",
    image: "public//certificates//Coursera 81ZCUFRLRC7F_page-0001.jpg",
  },
  {
    title: "Computer Vision Certification",
    issuer: "Kaggle",
    description: "In-depth training on image processing, object detection, and convolutional neural networks.",
    logo:"https://media.licdn.com/dms/image/sync/v2/D5627AQErGOkuSz9XaQ/articleshare-shrink_800/B56ZYGS1HYGsAI-/0/1743862322115?e=2147483647&v=beta&t=M-wN8Rk6EAHiLcu7ZR37zqPrKqPOzrrh3fjirwcgmkM",
    image: "public//certificates//VIMALRAJ D - Computer Vision.png",
  },
  {
    title: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA DLI",
    description: "Hands-on experience deploying AI models on edge devices using NVIDIA Jetson Nano.",
    logo:"https://developer-blogs.nvidia.com/wp-content/uploads/2020/03/DLI_Feature_new.png",
    image: "public//certificates//nvidiac1.jpg",
  },
  {
    title: "Communication Skills (B1)",
    issuer: "Linguaskill",
    description: "Certification demonstrating professional English communication abilities.",
    logo:"https://ednastics.com/wp-content/uploads/2020/01/logo1.png",
    image: "public//certificates//Linguaskill_1.jpg",
  },
  {
    title: "Introduction to Programming in C (Elite + Silver)",
    issuer: "NPTEL",
    description: "Advanced C programming concepts with elite certification and silver badge achievement.",
    logo:"https://mite.ac.in/wp-content/uploads/2020/01/nptel-mite.jpg",
    image: "public//certificates//NPTEL_C.jpg",
  },
  {
    title: "Learning Data Science: Understanding the Basics",
    issuer: "LinkedIn",
    description: "Introduction to core data science concepts, tools, and workflows for beginners.",
    logo:"https://cdn.lynda.com/course/496940/496940-1593629650385-16x9.jpg",
    image: "public//certificates//Data_Science.jpg",
  },
];

export const Skills = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-primary mb-6" />
        
        {/* Running Skills Marquee */}
        <div className="relative mb-12 overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...runningSkills, ...runningSkills].map((skill, i) => (
              <span
                key={i}
                className="mx-4 px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Zap className="w-3 h-3 text-primary" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="relative border border-border p-6 bg-background hover:border-transparent transition-all duration-300 group rounded-xl overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute inset-[1px] bg-background rounded-xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-muted/50 text-foreground text-sm font-mono rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default group-hover:animate-pulse"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          Certifications
          <span className="text-sm font-normal text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
            {certifications.length} earned
          </span>
        </h3>
        <div className="w-16 h-1 bg-primary mb-8" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-border bg-background hover:border-primary transition-all duration-300 group overflow-hidden rounded-xl hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={cert.logo} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <span className="absolute bottom-3 left-3 text-primary font-bold text-2xl">0{index + 1}</span>
              </div>
              <div className="p-5">
                <h4 className="text-foreground font-semibold leading-tight group-hover:text-primary transition-colors">{cert.title}</h4>
                <p className="text-primary text-sm mt-1 font-medium">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-3">{cert.description}</p>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="mt-4 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCert(null)}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors text-xl font-bold px-4 py-2"
              >
                ✕ Close
              </button>
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};