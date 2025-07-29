import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">EduVerse Academy</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering students worldwide with quality education and innovative learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#programs" className="text-primary-foreground/80 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Computer Science</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Business Administration</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Online Courses</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span className="text-primary-foreground/80">info@eduverse.edu</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span className="text-primary-foreground/80">123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 EduVerse Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};