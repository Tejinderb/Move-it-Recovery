import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Phone, MessageCircle, HelpCircle, ChevronRight } from 'lucide-react';
import { faqs } from '../data/mockData';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([]);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-blue-100 text-orange-600 border-orange-200">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Quick Answers to
            <span className="block bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Common Questions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Find answers to the most frequently asked questions about our vehicle recovery and transport services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <CardContent className="p-0">
                <Accordion type="multiple" className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={faq.id} 
                      value={`item-${faq.id}`}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <AccordionTrigger 
                        className="text-left px-8 py-6 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 transition-all duration-300 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-orange-50 [&[data-state=open]]:to-blue-50 group"
                      >
                        <div className="flex items-start space-x-4 text-left">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mt-1 group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 pr-4 leading-tight">
                              {faq.question}
                            </h3>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 pt-2">
                        <div className="ml-12 pr-8">
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Still Have Questions?</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Our friendly team is here to help 24/7. Give us a call for immediate assistance.
                </p>
                <div className="text-3xl font-bold text-orange-600 mb-4">07306 129999</div>
                <Button 
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quick WhatsApp</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Send us a quick message on WhatsApp for fast response and easy communication.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </CardContent>
            </Card>

            {/* Quick Help Topics */}
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <HelpCircle className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-bold text-slate-900">Popular Topics</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Emergency Breakdown Service",
                    "Vehicle Transportation Rates",
                    "MOT Testing Schedule", 
                    "Fleet Service Packages",
                    "Insurance Claims Process"
                  ].map((topic, index) => (
                    <button 
                      key={index}
                      className="w-full text-left px-4 py-3 rounded-xl border border-slate-200 hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 transition-all duration-300 group flex items-center justify-between"
                    >
                      <span className="text-slate-700 font-medium">{topic}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact Strip */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-700/90"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-white rounded-full animate-ping mr-3"></div>
              <h3 className="text-2xl font-bold">Emergency Service Available Now</h3>
              <div className="w-3 h-3 bg-white rounded-full animate-ping ml-3"></div>
            </div>
            <p className="text-red-100 mb-6">
              Breakdown? Stuck? Need immediate help? Don't wait - call our emergency hotline now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-4xl font-bold">07306 129999</div>
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency Call
              </Button>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;