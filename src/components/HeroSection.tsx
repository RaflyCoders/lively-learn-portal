import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce-gentle" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Shape Your 
            <span className="block text-accent-glow">Future Today</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join thousands of students in an innovative learning environment that 
            prepares you for tomorrow's challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">5K+</div>
              <div className="text-white/80">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">200+</div>
              <div className="text-white/80">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-white/80">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </section>
  );
};