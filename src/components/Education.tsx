import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech Computer Science and Artificial Intelligence",
      institution: "Indraprastha Institute of Information Technology, Delhi",
      period: "Nov. 2022 - Present",
      grade: "CGPA - 7.45"
    },
    {
      degree: "CBSE - XII",
      institution: "Adarsh Jain Dharmik Shiksha Sadan, Najafgarh, New Delhi",
      period: "2021-2022",
      grade: "93.4/100"
    },
    {
      degree: "CBSE - X",
      institution: "St. Xavier's Sr. Sec. School, Sirsa",
      period: "2019-2020",
      grade: "93.4/100"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground">
            My academic journey in computer science and artificial intelligence
          </p>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium text-primary">{edu.institution}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          <span className="font-semibold text-primary">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;