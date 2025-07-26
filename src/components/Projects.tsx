import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gender Biased Abuse Detection in Indic Languages",
      period: "Jan 2024 - May 2024",
      tech: ["Python", "PyTorch", "IndicBERT"],
      description: [
        "Leveraged IndicBERT to organize embeddings with multi-lingual support for languages like English, Hindi and Tamil",
        "Improved contextual understanding of the model by replacing LSTMs with Attention Heads",
        "Enhanced state-of-the-art T5 Documentation updating by 2%"
      ]
    },
    {
      title: "Bank Telemarketing Prediction Model",
      period: "August 2024 - December 2024",
      tech: ["Python"],
      description: [
        "Built a supervised machine learning model in Python to predict telemarketing call outcomes for banks, achieving 91% accuracy",
        "Applied feature engineering, outlier removal, and class balancing to enhance model reliability and predictive performance",
        "Used Gini Coefficient to implement MLFLOW for algorithms across multiple algorithms, selecting the top-performing model"
      ]
    },
    {
      title: "Rakt - Blood Donation Platform",
      period: "June 2024",
      tech: ["HTML5", "CSS3", "Next.js", "MongoDB", "NextAuth"],
      description: [
        "Developed a full-stack web platform connecting individuals in urgent need of blood with verified local donors in real time",
        "Implemented secure password encryption using Bcrypt.js and robust authentication flows with NextAuth for user data protection",
        "Built and deployed the application using Next.js and MongoDB, managing code efficiently with Git version control"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            A showcase of my recent work in AI, machine learning, and web development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;