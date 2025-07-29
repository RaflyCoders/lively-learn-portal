import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Target } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert Curriculum",
      description: "Carefully crafted courses designed by industry experts and academic professionals."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Learn alongside peers in an interactive environment that promotes teamwork."
    },
    {
      icon: Award,
      title: "Recognized Certificates",
      description: "Earn certificates that are valued by employers and universities worldwide."
    },
    {
      icon: Target,
      title: "Career Focused",
      description: "Programs designed to align with current industry needs and future trends."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">EduVerse</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing world-class education that empowers students 
            to achieve their dreams and make a positive impact in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in bg-gradient-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-block p-3 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};