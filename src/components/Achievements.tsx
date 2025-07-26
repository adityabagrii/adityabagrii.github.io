import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Users, Code2 } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Google DeepMind Speaker",
      description: "Invited as speaker to Google DeepMind's Open Models Meet-up to present research work on PaliGemma in medical imaging",
      icon: Trophy,
      category: "Speaking"
    },
    {
      title: "3rd Place - Autonomous Ideation",
      description: "Placed 3rd at the Autonomous Ideation at DTU for ideating solutions for improving security on two-wheeler vehicles",
      icon: Medal,
      category: "Competition"
    },
    {
      title: "Silver Medal - Computer Olympiad",
      description: "Won silver medal at district Computer Olympiad conducted by SOF at school",
      icon: Medal,
      category: "Academic"
    },
    {
      title: "500+ Coding Problems Solved",
      description: "Solved 500+ questions on platforms like Leetcode, Codeforces, GeeksforGeeks etc.",
      icon: Code2,
      category: "Coding"
    },
    {
      title: "PR Team Leadership",
      description: "Lead various PR teams for events in my college including Odyssey'24, TechIIITD'24 and Esya'24 - IIITD's Techfest",
      icon: Users,
      category: "Leadership"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-muted-foreground">
            Recognition and accomplishments throughout my academic and professional journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;