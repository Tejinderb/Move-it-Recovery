import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { MapPin, Clock, Shield, Zap } from 'lucide-react';
import { coverageAreas } from '../data/mockData';

const CoverageSection = () => {
  return (
    <section id="coverage" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-blue-100 text-orange-600 border-orange-200">
            Our Service Coverage
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            We Provide Comprehensive
            <span className="block bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Vehicle Recovery Services
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Across the West Midlands and surrounding areas with rapid response times and professional service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Coverage Map Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 relative overflow-hidden min-h-96">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <div className="text-center mt-3">
                  <div className="font-bold text-slate-900 text-sm">West Midlands</div>
                  <div className="text-slate-600 text-xs">Coverage Hub</div>
                </div>
              </div>

              {/* Animated Circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border-2 border-orange-300 rounded-full animate-ping opacity-60"></div>
                <div className="absolute inset-0 w-48 h-48 border-2 border-blue-300 rounded-full animate-ping opacity-40 delay-1000"></div>
                <div className="absolute inset-0 w-64 h-64 border-2 border-orange-200 rounded-full animate-ping opacity-20 delay-2000"></div>
              </div>

              {/* Coverage Points */}
              {[
                { name: "Birmingham", position: "top-1/4 left-1/3", delay: "0ms" },
                { name: "Wolverhampton", position: "top-1/3 right-1/4", delay: "200ms" },
                { name: "Coventry", position: "bottom-1/4 right-1/3", delay: "400ms" },
                { name: "Walsall", position: "top-1/6 left-1/2", delay: "600ms" },
                { name: "Solihull", position: "bottom-1/3 left-1/4", delay: "800ms" }
              ].map((area, index) => (
                <div 
                  key={index}
                  className={`absolute ${area.position} transform -translate-x-1/2 -translate-y-1/2 animate-bounce`}
                  style={{ animationDelay: area.delay, animationDuration: "2s" }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full shadow-lg"></div>
                  <div className="text-xs font-medium text-slate-700 mt-1 whitespace-nowrap">{area.name}</div>
                </div>
              ))}

              {/* Background Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-orange-200/50 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-blue-200/50 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Right Column - Coverage Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                West Midlands Coverage
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Comprehensive vehicle recovery services across the West Midlands and surrounding areas
              </p>
            </div>

            {/* Coverage Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {coverageAreas.map((area, index) => (
                <div 
                  key={index}
                  className="px-4 py-3 bg-white rounded-xl border border-slate-200 text-center font-medium text-slate-700 hover:shadow-lg hover:border-orange-200 transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {area}
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {[
                {
                  icon: MapPin,
                  title: "Service Radius",
                  details: ["30-mile radius from our base", "Extended coverage available"]
                },
                {
                  icon: Clock,
                  title: "Response Time",
                  details: ["Emergency: 15-30 minutes", "Standard: Same day service"]
                }
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-slate-600">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mr-3"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Shield, label: "Fully Insured", color: "orange" },
                { icon: Zap, label: "Rapid Response", color: "blue" },
                { icon: Clock, label: "24/7 Available", color: "orange" },
                { icon: MapPin, label: "GPS Tracked", color: "blue" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-orange-200 group"
                >
                  <feature.icon className={`w-5 h-5 mr-3 ${feature.color === 'orange' ? 'text-orange-600' : 'text-blue-600'} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="font-medium text-slate-700">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contact CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Emergency Breakdown?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Don't panic! Our emergency response team is standing by.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              {[
                { text: "Average 25min response", icon: Clock },
                { text: "Fully insured service", icon: Shield },
                { text: "Professional technicians", icon: Zap }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center text-slate-300">
                  <item.icon className="w-5 h-5 mr-2 text-orange-400" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="text-4xl font-bold text-orange-400 mb-2">07306 129999</div>
            <div className="text-slate-300 mb-6">Call Emergency Line</div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;