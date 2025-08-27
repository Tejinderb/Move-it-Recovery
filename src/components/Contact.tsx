import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Shield,
  Zap,
  Users,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Help? We're Here
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">24/7</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether it's an emergency breakdown or planned service, our expert team 
            is ready to assist you across the West Midlands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="glass-card hover:bg-card/20 transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground animate-pulse" />
                  </div>
                  <div>
                    <CardTitle className="text-primary">Emergency Hotline</CardTitle>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">07306 129999</div>
                <p className="text-sm text-muted-foreground mb-4">Immediate roadside assistance</p>
                <Button variant="hero" className="w-full">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="glass-card hover:bg-card/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-secondary">WhatsApp</CardTitle>
                    <p className="text-sm text-muted-foreground">Quick Response</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold mb-2">07306 129999</div>
                <p className="text-sm text-muted-foreground mb-4">Message us instantly</p>
                <Button variant="neon" className="w-full">
                  <MessageSquare className="w-4 h-4" />
                  Message Us
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="glass-card hover:bg-card/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle>Email Support</CardTitle>
                    <p className="text-sm text-muted-foreground">General Inquiries</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold mb-2">info@moveitrecovery.co.uk</div>
                <p className="text-sm text-muted-foreground mb-4">Get detailed quotes</p>
                <Button variant="glass" className="w-full">
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* Business Info */}
            <Card className="glass-card p-6">
              <h3 className="font-bold text-lg mb-4">Business Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Service Area</div>
                    <div className="text-sm text-muted-foreground">West Midlands & Surrounding Areas</div>
                    <div className="text-xs text-muted-foreground mt-1">Birmingham • Wolverhampton • Coventry • Walsall</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-semibold">Operating Hours</div>
                    <div className="text-sm text-muted-foreground">Office: Mon-Fri 8AM-6PM</div>
                    <div className="text-sm text-muted-foreground">Emergency: Always Available</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <div className="font-semibold">Fully Licensed</div>
                    <div className="text-sm text-muted-foreground">Insured & Certified</div>
                    <div className="text-xs text-muted-foreground mt-1">All work guaranteed • Insurance approved</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">Get a personalized quote or ask about our services</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input placeholder="07XXX XXXXXX" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Required</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency Recovery</SelectItem>
                        <SelectItem value="transport">Vehicle Transportation</SelectItem>
                        <SelectItem value="bodywork">Vehicle Bodywork</SelectItem>
                        <SelectItem value="scrap">Scrap Car Collection</SelectItem>
                        <SelectItem value="service">Vehicle Servicing</SelectItem>
                        <SelectItem value="mot">MOT Testing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Urgency Level</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency - Immediate</SelectItem>
                        <SelectItem value="urgent">Urgent - Same Day</SelectItem>
                        <SelectItem value="standard">Standard - Within 24hrs</SelectItem>
                        <SelectItem value="flexible">Flexible - This Week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input placeholder="Birmingham, Wolverhampton, etc." />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message Details</label>
                  <Textarea 
                    placeholder="Please describe your situation, vehicle details, and any specific requirements..."
                    rows={4}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your information is secure and will only be used to contact you about your inquiry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16">
          <Card className="bg-gradient-hero border-primary/20 text-center p-8">
            <h3 className="text-2xl font-bold mb-4">Emergency Breakdown?</h3>
            <p className="text-muted-foreground mb-6">
              Don't panic! Our emergency response team is standing by.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span>Average 25min response</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span>Fully insured service</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span>Professional technicians</span>
              </div>
            </div>
            <Button variant="hero" size="xl" className="pulse-glow">
              <Phone className="w-6 h-6" />
              Call Emergency Line
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;