import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "+1234567890"; // Update with real number
    const message = "Hi Clique! I'm interested in sourcing products from China. Can you help me?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-clique-teal-600 via-clique-teal-500 to-clique-teal-700">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-clique-orange-500 rounded-full mr-2"></span>
              Trusted by 500+ African Businesses
            </div>

            {/* Main Headline */}
            <h1 className="heading-xl text-white mb-6 leading-tight">
              Connecting Africa & China, 
              <span className="text-clique-orange-500"> One Click</span> at a Time
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl lg:text-2xl text-clique-teal-100 font-semibold mb-4">
              Sourcing Made Simple from product hunt to doorstep delivery
            </h2>

            {/* Description */}
            <p className="text-lg text-clique-teal-50 mb-8 leading-relaxed max-w-2xl">
              Whether you're a wholesaler, importer, or startup retailer, we connect you directly with trusted Chinese factories — handling everything from factory visits to logistics, so you can focus on growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary bg-clique-orange-500 hover:bg-clique-orange-600 inline-flex items-center justify-center group"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={openWhatsApp}
                className="btn-outline border-white text-white hover:bg-white hover:text-clique-teal-500 inline-flex items-center justify-center group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Talk to a Sourcing Agent
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-clique-teal-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm">Verified Factories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Placeholder for hero image - will be replaced with actual image */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden">
                {/* This will be replaced with actual image from vision_expert_agent */}
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 bg-clique-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold">International Trade Connection</p>
                  <p className="text-sm text-clique-teal-100 mt-2">
                    African entrepreneurs connecting with Chinese factories
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-clique-orange-500 rounded-full opacity-80 float-animation"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm float-animation" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs mt-2 font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;