import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Star, 
  Users, 
  Award, 
  CheckCircle,
  Play,
  Truck
} from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Clock, label: "Years of Excellence", value: "15+" },
    { icon: Truck, label: "Vehicles Recovered", value: "2,500+" },
    { icon: Star, label: "Customer Satisfaction", value: "99.8%" },
    { icon: Shield, label: "Emergency Response", value: "24/7" }
  ];

  const features = [
    "Fully Insured & Licensed",
    "Rapid Response Time", 
    "Advanced Equipment",
    "Expert Technicians"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
                About Move It Recovery
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                West Midlands' Premier
                <br />
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Recovery Service
                </span>
                <br />
                Since 2008
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When you're stranded, we're your lifeline. Professional vehicle recovery 
                and transport services delivered with unmatched reliability and care.
              </p>
              <p className="text-primary font-semibold mb-8">
                Serving Birmingham, Wolverhampton, Coventry & Surrounding Areas
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                What began as a small family operation in 2008 has evolved into the West Midlands' 
                most trusted vehicle recovery service. Our founder's vision was simple: provide reliable, 
                professional help when people need it most.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we operate a fleet of modern recovery vehicles, employ certified technicians, 
                and maintain partnerships with major insurance companies. But our core mission remains 
                unchanged – being there for you in your moment of need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Users className="w-5 h-5 group-hover:animate-pulse" />
                Professional Recovery Team
              </Button>
              <Button variant="glass" size="lg" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Right Content - Stats & Features */}
          <div className="space-y-8">
            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="glass-card hover:bg-card/20 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold mb-1">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why We're Different */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Why We're Different</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-hero border-primary/20 text-center p-8">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Need Emergency Recovery?</h3>
              <p className="text-muted-foreground mb-6">
                Don't let a breakdown ruin your day. Our expert team is ready to help 24/7.
              </p>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-primary">Call Now: 07306 129999</div>
                <Button variant="hero" size="lg" className="w-full">
                  View All Services
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;