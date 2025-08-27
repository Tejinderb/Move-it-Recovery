import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Shield
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Coverage Area", href: "#coverage" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Vehicle Recovery",
    "Vehicle Transportation", 
    "Pick and Drop Service",
    "Scrap Car Disposal",
    "Vehicle Bodywork",
    "MOT Testing",
    "Car Service",
    "Vehicle Electrician"
  ];

  return (
    <footer className="bg-gradient-to-br from-card to-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-xl">Move It Recovery</div>
                <Badge variant="outline" className="mt-1 text-xs">Since 2015</Badge>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Professional vehicle recovery and transport services across the West Midlands. 
              Available 24/7 for emergency assistance and planned transportation needs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+44 7306 129999</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@moveitrecovery.co.uk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Service */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Emergency Service</h3>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
                  <p className="text-sm text-muted-foreground mb-4">We're available 24/7 for emergency vehicle recovery.</p>
                </div>
                <Button variant="hero" size="lg" className="w-full pulse-glow">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Features Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold">24/7 Emergency Response</div>
                <div className="text-sm text-muted-foreground">Always ready to help</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-secondary" />
              <div>
                <div className="font-semibold">Fully Insured & Licensed</div>
                <div className="text-sm text-muted-foreground">Complete peace of mind</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-accent" />
              <div>
                <div className="font-semibold">West Midlands Coverage</div>
                <div className="text-sm text-muted-foreground">Rapid response area</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Move It Recovery. All rights reserved. | Professional vehicle recovery services across the West Midlands.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow Us</span>
              <div className="flex gap-2">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;