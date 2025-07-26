import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain, Code, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Computer Science & AI student at IIIT Delhi with a strong foundation in 
            machine learning, deep learning, and software development. I love tackling complex problems 
            and building innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">B.Tech CSAI at IIIT Delhi</p>
              <p className="text-sm text-muted-foreground">CGPA: 7.45</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">AI Research</h3>
              <p className="text-sm text-muted-foreground">Machine Learning, Natural Language Processing,</p>
              <p className="text-sm text-muted-foreground">Computer Vision, Deep Learning, Reinforcement Learning</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              <p className="text-sm text-muted-foreground">Python, React, Next.js</p>
            </CardContent>
          </Card>
          
          {/* <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Achievements</h3>
              <p className="text-sm text-muted-foreground">500+ Coding Problems</p>
              <p className="text-sm text-muted-foreground">Competition Winner</p>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default About;