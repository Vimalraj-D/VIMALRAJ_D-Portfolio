import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react"
import emailjs from "@emailjs/browser"

  

export const Contact = () => {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully 🚀")
        formRef.current.reset()
      })
      .catch(() => {
        alert("Failed to send message ❌")
      })
  }
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 pb-40 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="mailto:vimalrajnov172005@gmail.com"
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">vimalrajnov172005@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919361679654"
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 93616 79654</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/imalraj-D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vimalraj-d-8278972a5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
            <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-6 md:p-8 bg-card border border-border rounded-2xl space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />

              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Send a Message
                </h3>
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-xl h-12"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-xl h-12"
                />
              </div>

              <Input
                name="subject"
                placeholder="Subject"
                required
                className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-xl h-12"
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none rounded-xl"
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:opacity-90 py-6 text-base font-medium rounded-xl group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                I typically respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
