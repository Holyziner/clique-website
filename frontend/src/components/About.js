import React from 'react';
import { Globe, Users, Award, Clock, MapPin, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Globe, value: "1000+", label: "Verified Factories" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: Clock, value: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To bridge the gap between African entrepreneurs and Chinese manufacturers, making international trade accessible, transparent, and profitable for everyone."
    },
    {
      icon: MapPin,
      title: "Local Presence",
      description: "Our team is based in China with deep understanding of local business culture, language, and manufacturing landscapes across different regions."
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description: "We prioritize your success above all else. Your business growth is our primary goal, and we're committed to delivering exceptional results."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-clique-charcoal-800 mb-6">
            About 
            <span className="text-clique-teal-500"> Clique</span>
          </h2>
          <p className="text-large text-clique-charcoal-600 max-w-3xl mx-auto">
            Connecting African importers to real factories, not middlemen. We're your trusted partner in China.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div>
            <h3 className="heading-md text-clique-charcoal-800 mb-6">
              Your Bridge to Chinese Manufacturing
            </h3>
            <div className="space-y-6 text-clique-charcoal-600 leading-relaxed">
              <p>
                Founded with a vision to democratize international trade, Clique has become the most trusted procurement agency connecting African businesses with verified Chinese factories. We understand the unique challenges African entrepreneurs face when sourcing from China.
              </p>
              <p>
                Our team of sourcing experts, quality inspectors, and logistics coordinators work tirelessly to ensure your sourcing journey is smooth, transparent, and successful. With offices in major Chinese manufacturing hubs, we have the local presence and relationships needed to get you the best deals.
              </p>
              <p>
                What sets us apart is our commitment to transparency and authenticity. We don't just connect you with suppliers – we become your eyes and ears on the ground, ensuring every factory visit, quality check, and negotiation is handled with your best interests in mind.
              </p>
            </div>

            <div className="mt-8">
              <button className="btn-primary">
                Learn More About Our Process
              </button>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            {/* This will be replaced with actual image from vision_expert_agent */}
            <div className="aspect-square bg-white rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center overflow-hidden">
              <div className="text-center text-clique-charcoal-600 p-8">
                <div className="w-32 h-32 bg-clique-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-16 h-16 text-clique-teal-500" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Global Connection</h4>
                <p className="text-clique-charcoal-500">
                  Bridging continents through trusted partnerships and local expertise
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-clique-orange-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">$50M+</div>
              <div className="text-sm opacity-90">Trade Volume</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-clique-teal-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-clique-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-clique-teal-500" />
                </div>
                <div className="text-3xl font-bold text-clique-charcoal-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-clique-charcoal-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-clique-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-clique-teal-500" />
                </div>
                <h3 className="heading-sm text-clique-charcoal-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-clique-charcoal-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-clique-teal-500 to-clique-teal-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="heading-md mb-4">
              Our Commitment to Your Success
            </h3>
            <p className="text-xl mb-8 text-clique-teal-50 max-w-3xl mx-auto leading-relaxed">
              We believe in the potential of African businesses to compete globally. That's why we've dedicated ourselves to providing world-class sourcing services that level the playing field and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-clique-orange-500 hover:bg-clique-orange-600">
                Start Your Journey
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-clique-teal-500">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;