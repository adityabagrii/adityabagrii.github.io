import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Scientist - Intern (Research)",
      company: "5C Network",
      location: "Bengaluru",
      period: "May 2025 - Aug 2025",
      teamSize: "Team Size - 9",
      achievements: [
        "Engineered a custom loss function for Google's SigLip vision encoder specifically for medical imaging, improving fracture classification recall by 19%",
        "Developed localization models in Wrist and Hand X-ray images achieving 0.6 Average Precision and classification recall of 96.4%",
        "Trained multi-class fracture classifier with an accuracy of 91.07% for classifying the detected fractures",
        "Built pipeline for combining detection and classification models to achieve significant accuracy in automated radiology scanning for X-ray images"
      ]
    },
    {
      title: "Undergraduate Researcher - AskAlma - AI Query Assistant",
      company: "IIIT Delhi",
      location: "New Delhi",
      period: "Jun 2025 - May 2025",
      teamSize: "Team Size - 3",
      achievements: [
        "Developed an Advanced RAG pipeline comprising of Standard and Graph RAG making the information retrieval more efficient and accurate",
        "Utilized context caching for handling static knowledge cache to avoid redundant information retrieval",
        "Employed Qwen 0.5B for relevance classification for the queries based on which Qwen 8B is used for main generative tasks"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey in AI research and development
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="font-semibold text-primary">{exp.company}</span>
                      {exp.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/40 text-primary">
                    {exp.teamSize}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
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

export default Experience;