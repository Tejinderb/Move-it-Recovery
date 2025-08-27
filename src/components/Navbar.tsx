import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Truck } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Coverage", href: "#coverage" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto glass-card border-b border-white/10 backdrop-blur-lg rounded-full transition-all duration-500 ease-in-out">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-md">Move It Recovery</div>
              <div className="text-sm text-muted-foreground hidden md:block">Professional Recovery Services</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 animated-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Emergency Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm font-semibold">Emergency:</div>
              <div className="text-primary font-semibold">07306 129999</div>
            </div>
            <Button variant="hero" size="sm" className="text-white bg-primary">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-white/10 p-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Badge variant="outline" className="mb-3 text-primary border-primary/20">
                  Emergency Contact
                </Badge>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-primary">07306 129999</div>
                  <div className="text-sm text-muted-foreground">Available 24/7</div>
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  <Phone className="w-5 h-5" />
                  Call Emergency Line
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;