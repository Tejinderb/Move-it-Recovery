import React from 'react';
import { Button } from './ui/button';
import { Phone, ArrowRight, Clock, MapPin, Shield } from 'lucide-react';

const HeroSection = ({ scrollY }) => {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Revolutionary Futuristic Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-800"></div>
        
        {/* Animated Particle Field */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            {/* Large flowing particles */}
            <div 
              className="absolute w-96 h-96 bg-gradient-to-br from-orange-500/30 to-transparent rounded-full blur-3xl"
              style={{ 
                top: '10%', 
                left: '10%',
                transform: `translate(${scrollY * 0.1}px, ${Math.sin(scrollY * 0.01) * 20}px)`,
                animation: 'float 8s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/40 to-transparent rounded-full blur-2xl"
              style={{ 
                top: '60%', 
                right: '20%',
                transform: `translate(${-scrollY * 0.15}px, ${Math.cos(scrollY * 0.01) * 30}px)`,
                animation: 'float 6s ease-in-out infinite reverse'
              }}
            ></div>
            <div 
              className="absolute w-64 h-64 bg-gradient-to-br from-orange-400/50 to-blue-400/30 rounded-full blur-xl"
              style={{ 
                bottom: '20%', 
                left: '30%',
                transform: `translate(${scrollY * 0.08}px, ${Math.sin(scrollY * 0.015) * 25}px)`,
                animation: 'float 10s ease-in-out infinite'
              }}
            ></div>
          </div>
        </div>
        
        {/* Advanced Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1920 1080">
            <defs>
              <pattern id="techGrid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M0 60 L120 60 M60 0 L60 120" stroke="url(#techGradient)" strokeWidth="1" opacity="0.5" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                </path>
                <circle cx="60" cy="60" r="2" fill="url(#techGradient)" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
              </pattern>
              <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#techGrid)" transform={`translate(${scrollY * 0.1}, 0)`}/>
          </svg>
        </div>
        
        {/* Dynamic Energy Streams */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Flowing energy lines */}
          <div 
            className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"
            style={{ 
              transform: `translateX(${scrollY * 0.3}px)`,
              animation: 'energyFlow 4s linear infinite'
            }}
          ></div>
          <div 
            className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
            style={{ 
              transform: `translateX(${-scrollY * 0.25}px)`,
              animation: 'energyFlow 6s linear infinite reverse'
            }}
          ></div>
          <div 
            className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"
            style={{ 
              transform: `translateX(${scrollY * 0.2}px)`,
              animation: 'energyFlow 5s linear infinite'
            }}
          ></div>
        </div>
        
        {/* Holographic Vehicle Recovery Elements */}
        <div className="absolute inset-0">
          {/* Vehicle recovery symbols */}
          <div 
            className="absolute top-1/6 right-1/4 opacity-20"
            style={{ transform: `rotate(${scrollY * 0.1}deg) translateY(${parallaxOffset * 0.3}px)` }}
          >
            <svg className="w-24 h-24 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9V5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01Z"/>
              <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite"/>
            </svg>
          </div>
          
          {/* Recovery truck silhouette */}
          <div 
            className="absolute bottom-1/4 left-1/6 opacity-15"
            style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
          >
            <svg className="w-32 h-20 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 7H18V6C18 4.9 17.1 4 16 4H4C2.9 4 2 4.9 2 6V17H3C3 18.66 4.34 20 6 20S9 18.66 9 17H15C15 18.66 16.34 20 18 20S21 18.66 21 17H22V12L19 7ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17S5.17 15.5 6 15.5 7.5 16.17 7.5 17 6.83 18.5 6 18.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17S17.17 15.5 18 15.5 19.5 16.17 19.5 17 18.83 18.5 18 18.5Z"/>
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/>
            </svg>
          </div>
        </div>
        
        {/* Atmospheric Effects */}
        <div className="absolute inset-0">
          {/* Subtle rotating glow */}
          <div 
            className="absolute top-1/2 left-1/2 w-full h-full opacity-10"
            style={{ 
              transform: `translate(-50%, -50%) rotate(${scrollY * 0.05}deg)`,
              background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)'
            }}
          ></div>
          
          {/* Ambient light rays */}
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-orange-400/40 via-transparent to-orange-400/40 transform -rotate-12"
              style={{ animation: 'lightRay 8s ease-in-out infinite' }}
            ></div>
            <div 
              className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-400/40 via-transparent to-blue-400/40 transform rotate-6"
              style={{ animation: 'lightRay 10s ease-in-out infinite reverse' }}
            ></div>
          </div>
        </div>
        
        {/* Professional Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/20 to-slate-900/60"></div>
      </div>

      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vehicle Recovery Icons/Shapes */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 opacity-20"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        >
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl rotate-12 animate-pulse shadow-2xl"></div>
        </div>
        
        <div 
          className="absolute bottom-32 right-16 w-24 h-24 opacity-30"
          style={{ transform: `translateY(${-parallaxOffset * 0.3}px)` }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-bounce shadow-2xl"></div>
        </div>
        
        {/* Futuristic Grid Pattern */}
        <div 
          className="absolute top-1/4 right-1/4 w-48 h-48 opacity-10"
          style={{ transform: `rotate(${scrollY * 0.1}deg) translateY(${parallaxOffset * 0.2}px)` }}
        >
          <div className="w-full h-full border-2 border-orange-400 rotate-45 animate-pulse"></div>
          <div className="absolute inset-4 border-2 border-blue-400 rotate-12 animate-pulse delay-500"></div>
        </div>
        
        {/* Tech Circuit Pattern */}
        <div 
          className="absolute bottom-1/3 left-1/4 w-40 h-40 opacity-15"
          style={{ transform: `translateY(${parallaxOffset * 0.25}px)` }}
        >
          <svg className="w-full h-full text-orange-500 animate-pulse" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="3"/>
            <circle cx="80" cy="20" r="3"/>
            <circle cx="50" cy="50" r="4"/>
            <circle cx="20" cy="80" r="3"/>
            <circle cx="80" cy="80" r="3"/>
            <line x1="20" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="1"/>
            <line x1="80" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="50" x2="20" y2="80" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/3 left-1/6 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/95 backdrop-blur-md border border-orange-200 mb-6 sm:mb-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mr-2" />
            <span className="text-slate-700 font-medium text-sm sm:text-base">Trusted Since 2015 • 24/7 Emergency Service</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 relative">
            <span className="block text-white mb-2 drop-shadow-2xl" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6)' }}>
              When You're Stuck,
            </span>
            <span 
              className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl relative"
              style={{ 
                textShadow: '0 0 30px rgba(249,115,22,0.8), 0 0 60px rgba(59,130,246,0.6)',
                filter: 'drop-shadow(0 0 10px rgba(249,115,22,0.5))'
              }}
            >
              We're Your Lifeline
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Professional vehicle recovery and roadside assistance across the West Midlands. 
            Fast response, fair pricing, and the expertise to get you back on the road safely.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <a href="tel:+447306129999" className="w-full sm:w-auto">
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/25 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 relative z-10" />
                <span className="relative z-10">Call Now - Free Quote</span>
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-white/70 text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View Our Services</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 relative z-10" />
              </Button>
            </a>
          </div>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto px-4">
            {[
              { icon: Clock, text: "15min Response", color: "orange" },
              { icon: MapPin, text: "West Midlands Coverage", color: "blue" },
              { icon: Shield, text: "Fully Insured", color: "orange" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 ${feature.color === 'orange' ? 'text-orange-600' : 'text-blue-600'}`} />
                <span className="font-medium text-slate-700 text-sm sm:text-base text-center">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* Emergency Contact CTA */}
          <div className="mt-8 sm:mt-12 px-4">
            <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 sm:p-6 max-w-md mx-auto shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center relative z-10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2"></div>
                  <span className="text-white font-semibold text-sm sm:text-base">Emergency Service Available</span>
                </div>
                <a href="tel:+447306129999" className="block hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2 hover:text-orange-300 transition-colors duration-300">07306 129999</div>
                </a>
                <p className="text-white/80 text-xs sm:text-sm">24/7 Response • West Midlands Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75 delay-1000"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
    </section>
  );
};

export default HeroSection;