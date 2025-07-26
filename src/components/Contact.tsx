import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:adityabagri.work@gmail.com" className="text-primary hover:underline">
                      adityabagri.work@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+917404476034" className="text-primary hover:underline">
                      +91-7404476034
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Delhi, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-primary/30 hover:border-primary hover:bg-primary/10" 
                  asChild
                >
                  <a href="https://linkedin.com/in/aditya-bagri" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5 text-primary" />
                    LinkedIn Profile
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-primary/30 hover:border-primary hover:bg-primary/10" 
                  asChild
                >
                  <a href="https://github.com/adityabagri" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5 text-primary" />
                    GitHub Profile
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-primary/30 hover:border-primary hover:bg-primary/10" 
                  asChild
                >
                  <a href="mailto:adityabagri.work@gmail.com">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    Send Email
                  </a>
                </Button>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Feel free to reach out for collaborations, research discussions, or job opportunities!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;