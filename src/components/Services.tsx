import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Car, 
  Wrench, 
  Recycle, 
  Settings, 
  Shield, 
  Zap, 
  Building,
  Clock,
  MapPin,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Emergency Recovery",
      description: "Fast response breakdown recovery service available 24/7 across the West Midlands",
      features: ["24/7 Availability", "GPS Tracking", "15min Response"],
      isPopular: true,
      color: "text-primary"
    },
    {
      icon: Car,
      title: "Vehicle Transportation",
      description: "Professional vehicle transport for dealerships, auctions, and private customers",
      features: ["Secure Transport", "Fully Insured", "Door-to-Door"],
      color: "text-secondary"
    },
    {
      icon: Wrench,
      title: "Vehicle Bodywork",
      description: "Expert collision repair and bodywork restoration using latest techniques",
      features: ["Paint Matching", "Dent Removal", "Insurance Work"],
      color: "text-accent"
    },
    {
      icon: Recycle,
      title: "Scrap Car Collection",
      description: "Eco-friendly vehicle disposal with proper documentation and recycling",
      features: ["Free Collection", "DVLA Notification", "Certificate Provided"],
      color: "text-primary"
    },
    {
      icon: Settings,
      title: "Vehicle Servicing",
      description: "Complete maintenance packages to keep your vehicle running smoothly",
      features: ["Full Service", "Oil Changes", "Safety Checks"],
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "MOT Testing",
      description: "Official MOT testing center with experienced technicians and fair pricing",
      features: ["Same Day Results", "Retest Included", "Advisory Reports"],
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Auto Electrical",
      description: "Advanced diagnostic equipment for all electrical and electronic issues",
      features: ["Diagnostic Scans", "Battery Testing", "Wiring Repairs"],
      color: "text-primary"
    },
    {
      icon: Building,
      title: "Fleet Services",
      description: "Comprehensive fleet management solutions for businesses of all sizes",
      features: ["Contract Rates", "Priority Service", "Fleet Discounts"],
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            What We Do
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Vehicle Solutions
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Under One Roof</span>
          </h2>
          <p className="text-md text-muted-foreground hover:text-white max-w-3xl mx-auto">
            From emergency breakdowns to routine maintenance, we're your trusted partner 
            for all automotive needs across the West Midlands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card hover:bg-card/20 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.isPopular && (
                <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-card to-muted/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 transition-colors duration-300">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Promise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5 rounded-2xl">
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p className="text-muted-foreground">Emergency Response</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-muted-foreground">Satisfaction Guaranteed</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">15min</h3>
            <p className="text-muted-foreground">Average Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;