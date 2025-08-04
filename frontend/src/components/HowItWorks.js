import React from 'react';
import { Send, Search, CheckCircle, Eye, Package, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: Send,
      title: "Submit Request",
      description: "Tell us about your product needs, quantity, and specifications through our simple quote form.",
      details: ["Product specifications", "Quantity requirements", "Budget range", "Timeline"],
      color: "bg-clique-orange-500"
    },
    {
      id: 2,
      icon: Search,
      title: "Match Factories",
      description: "Our team identifies and evaluates the best-matched verified factories from our extensive network.",
      details: ["Factory verification", "Capability assessment", "Price negotiation", "Quality evaluation"],
      color: "bg-clique-teal-500"
    },
    {
      id: 3,
      icon: CheckCircle,
      title: "Approve Sample",
      description: "Review and approve product samples before committing to large orders. We handle all logistics.",
      details: ["Sample production", "Quality testing", "Specification review", "Client approval"],
      color: "bg-clique-orange-500"
    },
    {
      id: 4,
      icon: Eye,
      title: "Inspect & Ship",
      description: "We conduct thorough quality inspections and handle all shipping logistics to your destination.",
      details: ["Quality inspection", "Packaging supervision", "Shipping coordination", "Documentation"],
      color: "bg-clique-teal-500"
    },
    {
      id: 5,
      icon: Package,
      title: "Receive Goods",
      description: "Track your shipment and receive your products at your doorstep with complete documentation.",
      details: ["Shipment tracking", "Customs clearance", "Final delivery", "After-sales support"],
      color: "bg-clique-orange-500"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-clique-charcoal-800 mb-6">
            How It 
            <span className="text-clique-teal-500"> Works</span>
          </h2>
          <p className="text-large text-clique-charcoal-600 max-w-3xl mx-auto">
            Our streamlined 5-step process ensures smooth, efficient sourcing from initial request to doorstep delivery.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-clique-teal-200 transform -translate-y-1/2"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Circle */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="font-semibold text-clique-charcoal-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-clique-charcoal-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 right-0 transform translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-clique-teal-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-24 bg-clique-teal-200"></div>
                )}
                
                <div className="flex items-start">
                  {/* Step Circle */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mr-6 shadow-lg flex-shrink-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-clique-charcoal-400 mr-2">STEP {step.id}</span>
                    </div>
                    <h3 className="heading-sm text-clique-charcoal-800 mb-2">{step.title}</h3>
                    <p className="text-clique-charcoal-600 mb-4 leading-relaxed">{step.description}</p>
                    
                    {/* Step Details */}
                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-clique-charcoal-600">
                          <div className="w-1.5 h-1.5 bg-clique-teal-500 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Steps Cards */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => (
            <div key={step.id} className="card p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center mr-3`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-clique-charcoal-400">STEP {step.id}</div>
                  <h3 className="font-semibold text-clique-charcoal-800">{step.title}</h3>
                </div>
              </div>
              
              <p className="text-clique-charcoal-600 mb-4 leading-relaxed">{step.description}</p>
              
              <ul className="space-y-2">
                {step.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-sm text-clique-charcoal-600">
                    <CheckCircle className="w-4 h-4 text-clique-teal-500 mr-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-2xl mx-auto border border-gray-100">
            <h3 className="heading-sm text-clique-charcoal-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-clique-charcoal-600 mb-6">
              Join hundreds of successful African businesses who trust us with their sourcing needs.
            </p>
            <button className="btn-primary">
              Submit Your First Request
            </button>
            <p className="text-sm text-clique-charcoal-500 mt-4">
              Free consultation • Quick response • No obligations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;