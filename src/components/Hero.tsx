import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-recovery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-fade-in">
          <Shield className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">Trusted Since 2015 • 24/7 Emergency Service</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-6 mb-12">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold leading-tight animate-fade-in">
            When You're <span className="bg-gradient-primary bg-clip-text text-transparent">Stuck</span>,
            <br />
            We're Your <span className="bg-gradient-secondary bg-clip-text text-transparent">Lifeline</span>
          </h1>
          
          <p className="text-md lg:text-md text-white max-w-3xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            Professional vehicle recovery and roadside assistance across the West Midlands. 
            Fast response, fair pricing, and the expertise to get you back on the road safely.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" className="group text-white">
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            Call Now - Free Quote
          </Button>
          <Button variant="glass" size="lg" className="text-white">
            View Our Services
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
          {[
            { icon: Clock, label: "Response Time", value: "15min", color: "text-primary" },
            { icon: Shield, label: "Success Rate", value: "99.8%", color: "text-secondary" },
            { icon: Zap, label: "Years Experience", value: "15+", color: "text-yellow-300" },
            { icon: Phone, label: "Available", value: "24/7", color: "text-green-500" }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-3 rounded-3xl hover:bg-card/20 transition-all duration-300 group">
              <stat.icon className={`w-7 h-7 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              <div className="text-xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;