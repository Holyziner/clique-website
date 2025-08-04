import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { apiService } from '../services/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await apiService.getTestimonials();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const trustBadges = [
    { label: "Verified Factories", value: "1000+" },
    { label: "Fast Quotes", value: "24HR" },
    { label: "Transparent Pricing", value: "100%" },
    { label: "Success Rate", value: "98%" }
  ];

  if (loading) {
    return (
      <section id="testimonials" className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center">
            <div className="spinner mx-auto"></div>
            <p className="text-clique-charcoal-600 mt-4">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-clique-charcoal-800 mb-6">
            What Our Clients 
            <span className="text-clique-teal-500"> Say</span>
          </h2>
          <p className="text-large text-clique-charcoal-600 max-w-3xl mx-auto">
            Join hundreds of satisfied African businesses who have successfully sourced products through Clique.
          </p>
        </div>

        {/* Testimonials Carousel */}
        {testimonials.length > 0 && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="bg-gradient-to-br from-clique-teal-500 to-clique-teal-600 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
                {/* Background Quote Icon */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-white/20" />
                
                <div className="relative z-10">
                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Client Info */}
                  <div>
                    <div className="font-semibold text-lg">
                      {testimonials[currentIndex].client_name}
                    </div>
                    <div className="text-clique-teal-100">
                      {testimonials[currentIndex].company}, {testimonials[currentIndex].country}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              {testimonials.length > 1 && (
                <>
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-clique-charcoal-800 hover:bg-gray-50 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-clique-charcoal-800 hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {testimonials.length > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex
                          ? 'bg-clique-teal-500'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="text-3xl font-bold text-clique-teal-500 mb-2">
                  {badge.value}
                </div>
                <div className="text-clique-charcoal-600 font-medium">
                  {badge.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-large text-clique-charcoal-600 mb-6">
            Ready to join our satisfied clients?
          </p>
          <button className="btn-primary">
            Start Your Sourcing Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;