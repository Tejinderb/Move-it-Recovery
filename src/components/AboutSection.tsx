import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Users, Clock, Zap, Shield, Star, Play } from 'lucide-react';
import { companyStats } from '../data/mockData';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-blue-100 text-orange-600 border-orange-200">
                About Move It Recovery
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                West Midlands' Premier
                <span className="block bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  Recovery Service Since 2008
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                When you're stranded, we're your lifeline. Professional vehicle recovery and transport services delivered with unmatched reliability and care.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Serving Birmingham, Wolverhampton, Coventry & Surrounding Areas
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Professional Recovery Team
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {companyStats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative z-10 p-0">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-semibold text-sm lg:text-base">{stat.label}</div>
                </CardContent>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Story Section */}
        <div className="mt-24">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Journey</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  What began as a small family operation in 2008 has evolved into the West Midlands' most trusted vehicle recovery service. Our founder's vision was simple: provide reliable, professional help when people need it most.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Today, we operate a fleet of modern recovery vehicles, employ certified technicians, and maintain partnerships with major insurance companies. But our core mission remains unchanged – being there for you in your moment of need.
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Shield, title: "Fully Insured & Licensed", desc: "Complete peace of mind with comprehensive insurance coverage" },
                    { icon: Clock, title: "Rapid Response Time", desc: "Average 25-minute response time across West Midlands" },
                    { icon: Award, title: "Advanced Equipment", desc: "State-of-the-art recovery vehicles and professional tools" },
                    { icon: Star, title: "Expert Technicians", desc: "Certified professionals with extensive recovery experience" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-orange-50/50 to-blue-50/50 border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="flex-shrink-0 p-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg text-white">
                        <feature.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">{feature.title}</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10 relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Zap className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Why We're Different</h4>
                    <p className="text-slate-600">Professional service you can trust</p>
                  </div>
                  
                  {/* Floating Animation Elements */}
                  <div className="absolute top-8 left-8 w-3 h-3 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute bottom-12 right-12 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-1/2 right-8 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Need Emergency Recovery?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Don't let a breakdown ruin your day. Our expert team is ready to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Call Now: 07306 129999
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View All Services
              </Button>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;