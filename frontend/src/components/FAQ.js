import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { apiService } from '../services/api';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const data = await apiService.getFAQ();
        setFaqs(data);
        setLoading(false);
        // Open the first FAQ by default
        if (data.length > 0) {
          setOpenIndex(0);
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return (
      <section id="faq" className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center">
            <div className="spinner mx-auto"></div>
            <p className="text-clique-charcoal-600 mt-4">Loading FAQ...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-clique-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-clique-teal-500" />
          </div>
          <h2 className="heading-lg text-clique-charcoal-800 mb-6">
            Frequently Asked 
            <span className="text-clique-teal-500"> Questions</span>
          </h2>
          <p className="text-large text-clique-charcoal-600 max-w-3xl mx-auto">
            Get answers to the most common questions about sourcing from China through Clique.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.length > 0 ? (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                  >
                    <h3 className="font-semibold text-clique-charcoal-800 pr-8">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-clique-teal-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-clique-charcoal-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gray-200 mb-4"></div>
                      <p className="text-clique-charcoal-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-clique-charcoal-600">No FAQs available at the moment.</p>
            </div>
          )}
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 max-w-2xl mx-auto border border-gray-100">
            <h3 className="heading-sm text-clique-charcoal-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-clique-charcoal-600 mb-6">
              Our sourcing experts are here to help. Get personalized answers to your specific questions about sourcing from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Ask Our Experts
              </button>
              <button
                onClick={() => {
                  const phoneNumber = "+1234567890";
                  const message = "Hi! I have some questions about sourcing from China. Can you help?";
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="btn-outline"
              >
                WhatsApp Support
              </button>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-clique-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h4 className="font-semibold text-clique-charcoal-800 mb-2">Pro Tip</h4>
            <p className="text-sm text-clique-charcoal-600">
              Always request samples before placing large orders to ensure quality meets your standards.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-clique-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-clique-charcoal-800 mb-2">Fast Track</h4>
            <p className="text-sm text-clique-charcoal-600">
              Use WhatsApp for quickest responses during China business hours (9 AM - 6 PM CST).
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h4 className="font-semibold text-clique-charcoal-800 mb-2">Personal Touch</h4>
            <p className="text-sm text-clique-charcoal-600">
              Schedule a video call to discuss complex requirements and get personalized advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;