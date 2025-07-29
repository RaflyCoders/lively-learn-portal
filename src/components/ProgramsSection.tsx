import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";

export const ProgramsSection = () => {
  const programs = [
    {
      title: "Computer Science",
      description: "Master programming, algorithms, and software development with hands-on projects.",
      duration: "4 Years",
      students: "1,200+",
      rating: "4.9",
      color: "bg-gradient-primary"
    },
    {
      title: "Digital Marketing",
      description: "Learn modern marketing strategies, social media, and data analytics.",
      duration: "2 Years",
      students: "800+",
      rating: "4.8",
      color: "bg-gradient-accent"
    },
    {
      title: "Business Administration",
      description: "Develop leadership skills and business acumen for the corporate world.",
      duration: "3 Years",
      students: "950+",
      rating: "4.7",
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of programs designed to equip you with 
            the skills and knowledge needed for success in your chosen field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="group hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in bg-gradient-card border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className={`h-2 ${program.color}`} />
                <div className="p-6 pb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {program.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {program.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-accent fill-current" />
                    {program.rating}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};