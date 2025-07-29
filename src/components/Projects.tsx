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
        githubUrl: "https://github.com/adityabagrii/G28-NLP-Project",
        description: [
          "Leveraged IndicBERT embeddings to support multilingual abuse detection across English, Hindi, and Tamil.",
          "Replaced LSTMs with multi-head attention mechanisms to enhance contextual understanding.",
          "Improved T5-based documentation updating performance by 2% through model refinements."
        ]
      },
      {
        title: "Bank Telemarketing Prediction Model",
        period: "Aug 2024 - Dec 2024",
        tech: ["Python"],
        githubUrl: "https://github.com/adityabagrii/ML-Project/blob/main/Project_Report_Endsem_51.pdf",
        description: [
          "Built a supervised machine learning pipeline to predict customer responses to telemarketing campaigns, achieving 91% accuracy.",
          "Employed techniques like feature engineering, outlier handling, and class balancing to improve model robustness.",
          "Utilized Gini Coefficient for model selection and incorporated MLFlow for experiment tracking and comparison."
        ]
      },
      {
        title: "Rakt - Blood Donation Platform",
        period: "June 2024",
        githubUrl: "https://github.com/adityabagrii/Project-Rakt",
        tech: ["HTML5", "CSS3", "Next.js", "MongoDB", "NextAuth"],
        description: [
          "Developed a full-stack platform to connect individuals in urgent need of blood with verified local donors in real time.",
          "Implemented secure authentication using NextAuth and encrypted passwords with Bcrypt.js.",
          "Deployed the application using Next.js and MongoDB with responsive UI and Git-based version control."
        ]
      },
      {
        title: "Extracting Diagnosis Pathways from EHR using Deep Reinforcement Learning",
        period: "Feb 2024 - May 2024",
        tech: ["Python", "Stable-Baselines", "DQN"],
        githubUrl: "https://github.com/adityabagrii/RL_Project-Extracting-Diagnosis-Pathways-from-EHR-using-DRL",
        description: [
          "Designed and implemented a Deep Q-Learning (DQN) model to predict diagnostic sequences from EHR data.",
          "Defined a customized reward function and state-action space to reflect real-world healthcare decision-making constraints.",
        ]
      },
      {
        title: "SignGPT - Convert Text to Sign Language",
        period: "Apr 2024 - May 2024",
        tech: ["Llama3", "Stable Diffusion XL", "HuggingFace", "Flask", "HTML", "CSS"],
        githubUrl: "https://github.com/adityabagrii/SignGPT",
        description: [
          "Developed a web app that translates text into sign language visuals using NLP and diffusion-based image generation.",
          "Used LLaMA 3 for language modeling and Stable Diffusion XL for rendering realistic sign language images.",
          "Deployed the solution with Flask and HuggingFace Spaces, providing an accessible front-end on Render."
        ]
      },
      {
        title: "Sales Prediction Model",
        period: "March 2024",
        tech: ["Python", "Machine Learning"],
        githubUrl: "https://github.com/adityabagrii/Sales-Prediction-Model",
        description: [
          "Built a regression-based ML model to forecast future item sales based on historical data.",
          "Focused on helping e-commerce platforms optimize stock levels and maximize revenue through predictive analytics.",
          "Explored multiple algorithms and selected the top-performing one using cross-validation and error metrics."
        ]
      },
      {
        title: "Client-Side Web Player – Apple Music Clone",
        period: "Feb 2024",
        tech: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/adityabagrii/Apple-Music-Clone",
        description: [
          "Engineered a responsive, single-page client-side music player mimicking Apple Music's UI.",
          "Created a fluid UX with responsive layout, album cover previews, and minimal controls."
        ]
      },
      {
        title: "Virtual Memory Management System (Operating System Project)",
        period: "Nov 2023 - Jan 2024",
        tech: ["C"],
        githubUrl: "https://github.com/adityabagrii/OS-MeMS-Memory-Management-System",
        description: [
          "Implemented a custom memory management system (MeMS) in C using low-level POSIX APIs like `mmap` and `munmap`.",
          "Enabled virtual memory allocation, deallocation, and reuse tracking to simulate OS-level memory handling.",
          "Project guided by Dhruv Kumar as part of an advanced operating systems course."
        ]
      }
    ];


//   return (
//     <section id="projects" className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             A showcase of my recent work in Artificial Intelligence, Machine Learning, and Web Development
//           </p>
//         </div>
        
//         <div className="grid lg:grid-cols-1 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
//               <CardHeader>
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div className="flex-1">
//                     <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
//                     <div className="flex items-center gap-2 text-muted-foreground mb-4">
//                       <Calendar className="h-4 w-4" />
//                       <span>{project.period}</span>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech, techIndex) => (
//                         <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                   {project.githubUrl && (
//                     <div className="flex gap-2">
//                       <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary" onClick={() => window.open(project.githubUrl, "_blank")}>
//                         <Github className="h-4 w-4 mr-2" />
//                         Code
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   {project.description.map((desc, descIndex) => (
//                     <li key={descIndex} className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                       <span className="text-muted-foreground leading-relaxed">{desc}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            A showcase of my recent work in Artificial Intelligence, Machine Learning, and Web Development
          </p>
        </div>

        {/* Grid updated to 2 columns with center alignment for odd items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="w-full max-w-xl bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant"
            >
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
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {project.githubUrl && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 hover:border-primary"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">
                        {desc}
                      </span>
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