import React from 'react';
import { Search, MapPin, Shield, Truck, Headphones, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Product Sourcing",
      description: "We find the best factories for your specific products, comparing quality, pricing, and capabilities across our verified network.",
      features: ["Factory Research", "Price Comparison", "Capability Assessment", "Supplier Matching"]
    },
    {
      icon: MapPin,
      title: "Factory Visits",
      description: "Our China-based team conducts on-site factory visits to verify facilities, inspect equipment, and assess production capabilities.",
      features: ["Facility Inspection", "Equipment Assessment", "Compliance Check", "Photo Documentation"]
    },
    {
      icon: Shield,
      title: "Quality Checks",
      description: "Comprehensive quality control from samples to final products, ensuring your specifications are met every time.",
      features: ["Sample Testing", "In-Process Inspection", "Pre-Shipment QC", "Quality Reports"]
    },
    {
      icon: Truck,
      title: "Logistics & Shipping",
      description: "End-to-end logistics management including packaging, shipping, customs clearance, and delivery to your doorstep.",
      features: ["Packaging Solutions", "Shipping Coordination", "Customs Handling", "Delivery Tracking"]
    },
    {
      icon: Headphones,
      title: "After-Sales Support",
      description: "Continuous support throughout your sourcing journey and beyond, ensuring your success is our priority.",
      features: ["24/7 Support", "Issue Resolution", "Supplier Management", "Ongoing Consultation"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-clique-charcoal-800 mb-6">
            Our Comprehensive 
            <span className="text-clique-teal-500"> Sourcing Services</span>
          </h2>
          <p className="text-large text-clique-charcoal-600 max-w-3xl mx-auto">
            From initial product search to doorstep delivery, we handle every aspect of your China sourcing journey with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="card p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-clique-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-clique-teal-500 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-8 h-8 text-clique-teal-500 group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="heading-sm text-clique-charcoal-800 mb-4 group-hover:text-clique-teal-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-clique-charcoal-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-clique-charcoal-600">
                      <div className="w-1.5 h-1.5 bg-clique-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button className="text-clique-teal-500 font-semibold inline-flex items-center group-hover:text-clique-teal-600 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Service Benefits */}
        <div className="bg-gradient-to-r from-clique-teal-500 to-clique-teal-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-4">
                Why Choose Our Services?
              </h3>
              <p className="text-lg mb-6 text-clique-teal-50">
                With over 5 years of experience in China-Africa trade, we've helped hundreds of businesses successfully source products worth millions of dollars.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm text-clique-teal-100">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">30%</div>
                  <div className="text-sm text-clique-teal-100">Cost Savings</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn-secondary bg-clique-orange-500 hover:bg-clique-orange-600">
                Start Your Sourcing Journey
              </button>
              <p className="text-sm text-clique-teal-100 mt-4">
                Free consultation • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;