import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Phone, MessageCircle, Mail, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { contactInfo } from '../data/mockData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Message sent successfully! We'll get back to you within 30 minutes.", {
        description: "Our team has received your inquiry and will contact you shortly.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        urgency: '',
        location: '',
        message: ''
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again or call us directly.", {
        description: "Emergency line: 07306 129999",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-blue-100 text-orange-600 border-orange-200">
            Get In Touch
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Need Help? We're Here
            <span className="block bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              24/7
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether it's an emergency breakdown or planned service, our expert team is ready to assist you across the West Midlands.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <a href="tel:+447306129999" className="block">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-slate-900">Emergency Hotline</CardTitle>
                      <p className="text-slate-600 text-sm">Available 24/7</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-2 hover:text-orange-700 transition-colors">{contactInfo.emergency}</div>
                  <p className="text-slate-600 text-sm">Immediate roadside assistance</p>
                </CardContent>
              </Card>
            </a>

            {/* WhatsApp */}
            <a href={`https://wa.me/447306129999?text=Hello, I need vehicle recovery assistance in the West Midlands.`} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-slate-900">WhatsApp</CardTitle>
                      <p className="text-slate-600 text-sm">Quick Response</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2 hover:text-green-700 transition-colors">{contactInfo.whatsapp}</div>
                  <p className="text-slate-600 text-sm">Message us instantly</p>
                </CardContent>
              </Card>
            </a>

            {/* Email */}
            <a href="mailto:info@moveitrecovery.co.uk?subject=Vehicle Recovery Inquiry&body=Hello, I would like to inquire about your vehicle recovery services in the West Midlands." className="block">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-slate-900">Email Support</CardTitle>
                      <p className="text-slate-600 text-sm">General Inquiries</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-blue-600 mb-2 hover:text-blue-700 transition-colors">{contactInfo.email}</div>
                  <p className="text-slate-600 text-sm">Get detailed quotes</p>
                </CardContent>
              </Card>
            </a>

            {/* Business Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                Business Information
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium text-slate-700">Service Area</div>
                  <div className="text-slate-600">West Midlands & Surrounding Areas</div>
                  <div className="text-slate-500 text-xs">Birmingham • Wolverhampton • Coventry • Walsall</div>
                </div>
                <div>
                  <div className="font-medium text-slate-700">Operating Hours</div>
                  <div className="text-slate-600">24/7 Emergency Service</div>
                  <div className="text-slate-500 text-xs">Office: {contactInfo.hours.office} • Emergency: {contactInfo.hours.emergency}</div>
                </div>
                <div>
                  <div className="font-medium text-slate-700">Fully Licensed</div>
                  <div className="text-slate-600">Insured & Certified</div>
                  <div className="text-slate-500 text-xs">All work guaranteed • Insurance approved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Send us a Message</CardTitle>
                <p className="text-slate-600">Get a personalized quote or ask about our services</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-slate-700 font-medium">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="07XXX XXXXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-slate-700 font-medium">Service Required</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                        <SelectTrigger className="border-slate-300 focus:border-orange-500 focus:ring-orange-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency-recovery">Emergency Recovery</SelectItem>
                          <SelectItem value="vehicle-transport">Vehicle Transportation</SelectItem>
                          <SelectItem value="bodywork">Vehicle Bodywork</SelectItem>
                          <SelectItem value="scrap-collection">Scrap Car Collection</SelectItem>
                          <SelectItem value="servicing">Vehicle Servicing</SelectItem>
                          <SelectItem value="mot-testing">MOT Testing</SelectItem>
                          <SelectItem value="auto-electrical">Auto Electrical</SelectItem>
                          <SelectItem value="fleet-services">Fleet Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="urgency" className="text-slate-700 font-medium">Urgency Level</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)} required>
                        <SelectTrigger className="border-slate-300 focus:border-orange-500 focus:ring-orange-500">
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency - Immediate Assistance</SelectItem>
                          <SelectItem value="urgent">Urgent - Within 2 hours</SelectItem>
                          <SelectItem value="same-day">Same Day Service</SelectItem>
                          <SelectItem value="flexible">Flexible - Next Available</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-slate-700 font-medium">Location</Label>
                      <Input
                        id="location"
                        placeholder="Birmingham, Wolverhampton, etc."
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">Message Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your situation, vehicle details, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 min-h-32"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-slate-500 text-center">
                    Your information is secure and will only be used to contact you about your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Move It Recovery?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Clock, title: "Fast Response", desc: "Average 25-minute emergency response time" },
                    { icon: Shield, title: "Fully Insured", desc: "Comprehensive coverage for your peace of mind" },
                    { icon: CheckCircle, title: "Expert Team", desc: "Certified professionals with years of experience" },
                    { icon: Phone, title: "Modern Fleet", desc: "State-of-the-art recovery and transport vehicles" }
                  ].map((feature, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="font-semibold mb-2">{feature.title}</div>
                      <div className="text-slate-300 text-sm">{feature.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;