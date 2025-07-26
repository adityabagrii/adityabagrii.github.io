import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-glow">
              Aditya Bagri
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI Research Scientist & Full-Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Computer Science & AI student passionate about machine learning, natural language processing, 
              and building innovative solutions that make a difference.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="mailto:adityabagri.work@gmail.com" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
            <a 
              href="tel:+917404476034" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Phone className="h-6 w-6 text-primary" />
            </a>
            <a 
              href="https://linkedin.com/in/aditya-bagri" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a 
              href="https://github.com/adityabagri" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;