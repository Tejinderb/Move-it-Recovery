import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Truck, Car, Wrench, Recycle, Settings, ClipboardCheck, Zap, Users, ArrowRight } from 'lucide-react';
import { services } from '../data/mockData';

const iconMap = {
  truck: Truck,
  car: Car,
  wrench: Wrench,
  recycle: Recycle,
  settings: Settings,
  clipboard: ClipboardCheck,
  zap: Zap,
  users: Users
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 border border-orange-200 mb-4 sm:mb-6">
            <span className="text-orange-600 font-semibold text-sm sm:text-base">What We Do</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
            Complete Vehicle Solutions
            <span className="block bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto px-4">
            From emergency breakdowns to routine maintenance, we're your trusted partner for all automotive needs across the West Midlands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id}
                className={`relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group ${
                  service.isPopular ? 'ring-2 ring-orange-500 ring-opacity-50' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: hoveredCard === service.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                }}
              >
                {/* Popular Badge */}
                {service.isPopular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white z-10">
                    Most Popular
                  </Badge>
                )}

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      hoveredCard === service.id 
                        ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white shadow-lg' 
                        : 'bg-gradient-to-r from-orange-100 to-blue-100 text-orange-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-200 text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 group/btn"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>

                {/* Floating Animation Elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-200"></div>
              </Card>
            );
          })}
        </div>

        {/* Service Promise */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Our Service Promise</h3>
              <p className="text-slate-300 text-lg">Committed to excellence in every service we provide</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { metric: "24/7", label: "Emergency Response" },
                { metric: "100%", label: "Satisfaction Guaranteed" },
                { metric: "15min", label: "Average Response Time" },
                { metric: "2,500+", label: "Vehicles Recovered" }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.metric}
                  </div>
                  <div className="text-slate-300 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-12 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Need Help Now? Call Us
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;