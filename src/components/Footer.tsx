import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Move It Recovery
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Professional vehicle recovery and transport services across the West Midlands. Available 24/7 for emergency assistance and planned transportation needs.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a href="tel:+447306129999" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold hover:text-orange-400 transition-colors">+44 7306 129999</div>
                    <div className="text-slate-400 text-sm">24/7 Emergency</div>
                  </div>
                </a>
                
                <a href="mailto:info@moveitrecovery.co.uk?subject=Vehicle Recovery Inquiry" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold hover:text-blue-400 transition-colors">info@moveitrecovery.co.uk</div>
                    <div className="text-slate-400 text-sm">General Inquiries</div>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Linkedin, label: "LinkedIn" }
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-500 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <div className="space-y-3">
                {[
                  "Home", "Services", "Coverage Area", "About Us", "Contact"
                ].map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="block text-slate-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300" />
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Our Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Our Services</h3>
              <div className="space-y-3">
                {[
                  "Vehicle Recovery",
                  "Vehicle Transportation", 
                  "Pick and Drop Service",
                  "Scrap Car Disposal",
                  "Vehicle Bodywork",
                  "MOT Testing",
                  "Car Service",
                  "Vehicle Electrician"
                ].map((service, index) => (
                  <a
                    key={index}
                    href="#services"
                    className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300" />
                    {service}
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency Service */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Emergency Service</h3>
              <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-500/30 rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-2 text-red-400">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Need immediate assistance?</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We're available 24/7 for emergency vehicle recovery.
                </p>
                <a href="tel:+447306129999" className="block">
                  <Button 
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>

              {/* Business Hours */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-orange-400" />
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Office:</span>
                    <span className="text-slate-300">Mon-Fri 8AM-6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Emergency:</span>
                    <span className="text-orange-400 font-semibold">Always Available</span>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                  Service Area
                </h4>
                <div className="text-sm text-slate-300">
                  <div className="mb-2">West Midlands & Surrounding Areas</div>
                  <div className="text-slate-400 text-xs leading-relaxed">
                    Birmingham • Wolverhampton • Coventry • Walsall • West Bromwich • Solihull • Dudley
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Bottom Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-slate-400">
                © {currentYear} Move It Recovery. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm mt-1">
                Professional vehicle recovery services across the West Midlands since 2008
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                Cookie Policy
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Service Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <a href="tel:+447306129999">
            <Button
              size="lg"
              className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-2xl animate-bounce hover:animate-none transform hover:scale-110 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;