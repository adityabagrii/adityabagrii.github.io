import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "C++", "Java", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["PyTorch", "Transformers", "HuggingFace", "Computer Vision", "Natural Language Processing", "Reinforcement Learning", "Algorithm Design", "Nonlinear Optimization"]
    },
    {
      title: "Web Technologies",
      icon: Database,
      skills: ["HTML5", "CSS3", "Next.js", "React.js", "Node.js", "MongoDB", "NextAuth"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["MySQL", "Git", "Pandas", "Numpy", "Matplotlib", "Linux/Unix", "Conda", "LangChain", "ChromaDB"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground">
            My technical expertise across various domains of computer science and AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;