import React from 'react';
import { AlertTriangle, CheckCircle, Shield, Clock, Globe, Users } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Language Barriers",
      description: "Communication challenges with Chinese suppliers lead to misunderstandings and delays."
    },
    {
      icon: Shield,
      title: "Scams & Fraud Risk",
      description: "Difficulty verifying legitimate suppliers from fake ones, leading to financial losses."
    },
    {
      icon: Clock,
      title: "Quality Concerns",
      description: "No way to inspect products before shipping, resulting in poor quality goods."
    },
    {
      icon: Globe,
      title: "Complex Logistics",
      description: "Navigating shipping, customs, and import regulations without local expertise."
    }
  ];

  const solutions = [
    {
      icon: Users,
      title: "Local Expertise",
      description: "Our China-based team speaks fluent Mandarin and understands local business culture."
    },
    {
      icon: Shield,
      title: "Verified Factories",
      description: "We personally visit and verify each supplier for quality, reliability, and compliance."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive quality checks at every stage, from samples to final inspection."
    },
    {
      icon: Clock,
      title: "End-to-End Service",
      description: "We handle everything from sourcing to doorstep delivery with transparent processes."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-clique-charcoal-800 mb-6">
            Why Sourcing from China is 
            <span className="text-clique-orange-500"> Challenging</span>
          </h2>
          <p className="text-large text-clique-charcoal-600 max-w-3xl mx-auto">
            African businesses face significant hurdles when sourcing from China. 
            Clique eliminates these challenges with our proven solutions.
          </p>
        </div>

        {/* Problems vs Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problems Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="heading-sm text-clique-charcoal-800">Common Challenges</h3>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-4 mt-1 group-hover:bg-red-100 transition-colors">
                    <problem.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-clique-charcoal-800 mb-2">{problem.title}</h4>
                    <p className="text-clique-charcoal-600 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-clique-teal-100 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-clique-teal-600" />
              </div>
              <h3 className="heading-sm text-clique-charcoal-800">Our Solutions</h3>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-10 h-10 bg-clique-teal-50 rounded-lg flex items-center justify-center mr-4 mt-1 group-hover:bg-clique-teal-100 transition-colors">
                    <solution.icon className="w-5 h-5 text-clique-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-clique-charcoal-800 mb-2">{solution.title}</h4>
                    <p className="text-clique-charcoal-600 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto border border-gray-100">
            <h3 className="heading-sm text-clique-charcoal-800 mb-4">
              Ready to Source with Confidence?
            </h3>
            <p className="text-large text-clique-charcoal-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of African businesses who trust Clique for their China sourcing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Started Today
              </button>
              <button className="btn-outline">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;