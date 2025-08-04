import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { apiService } from '../services/api';
import { useFormValidation, validationRules } from '../utils/hooks';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form validation rules
  const rules = {
    name: [validationRules.required, validationRules.minLength(2)],
    email: [validationRules.required, validationRules.email],
    whatsapp: [validationRules.required, validationRules.phone],
    product: [validationRules.required, validationRules.minLength(5)],
    quantity: [validationRules.required],
  };

  const { values, errors, isValid, handleChange, handleBlur, validateForm, reset } = useFormValidation({
    name: '',
    email: '',
    whatsapp: '',
    product: '',
    quantity: '',
  }, rules);

  const openWhatsApp = () => {
    const phoneNumber = "+1234567890"; // Update with real number
    const message = "Hi Clique! I'm interested in sourcing products from China. Can you help me?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiService.submitQuoteRequest(values);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting quote:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+86 138 1234 5678",
      action: openWhatsApp,
      color: "text-green-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@clique.com",
      action: () => window.open('mailto:hello@clique.com'),
      color: "text-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+86 21 1234 5678",
      action: () => window.open('tel:+862112345678'),
      color: "text-clique-teal-600"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Shanghai, China",
      color: "text-clique-orange-600"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-clique-charcoal-800 mb-6">
            Get Your 
            <span className="text-clique-teal-500"> Quote Today</span>
          </h2>
          <p className="text-large text-clique-charcoal-600 max-w-3xl mx-auto">
            Ready to start sourcing? Send us your requirements and get a personalized quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="heading-sm text-clique-charcoal-800 mb-6">
                Request a Quote
              </h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <p className="text-green-800">Quote request submitted successfully! We'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <p className="text-red-800">Sorry, there was an error submitting your request. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-clique-charcoal-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={values.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-clique-charcoal-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-semibold text-clique-charcoal-800 mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={values.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    onBlur={() => handleBlur('whatsapp')}
                    className={`form-input ${errors.whatsapp ? 'border-red-500' : ''}`}
                    placeholder="+234 801 234 5678"
                  />
                  {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                </div>

                {/* Product */}
                <div>
                  <label className="block text-sm font-semibold text-clique-charcoal-800 mb-2">
                    Product Description *
                  </label>
                  <textarea
                    value={values.product}
                    onChange={(e) => handleChange('product', e.target.value)}
                    onBlur={() => handleBlur('product')}
                    className={`form-input min-h-[100px] resize-none ${errors.product ? 'border-red-500' : ''}`}
                    placeholder="Describe the product you want to source (e.g., LED Trucks, Electronics, Furniture)"
                    rows={4}
                  />
                  {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-clique-charcoal-800 mb-2">
                    Quantity Needed *
                  </label>
                  <input
                    type="text"
                    value={values.quantity}
                    onChange={(e) => handleChange('quantity', e.target.value)}
                    onBlur={() => handleBlur('quantity')}
                    className={`form-input ${errors.quantity ? 'border-red-500' : ''}`}
                    placeholder="e.g., 100 pieces, 50 units, 10 containers"
                  />
                  {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Quote Request
                    </>
                  )}
                </button>
              </form>

              <p className="text-sm text-clique-charcoal-500 mt-4 text-center">
                We typically respond within 24 hours with a detailed quote.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="heading-sm text-clique-charcoal-800 mb-6">
              Get in Touch
            </h3>
            <p className="text-clique-charcoal-600 mb-8 leading-relaxed">
              Prefer to speak directly? Our sourcing experts are available to discuss your requirements and provide personalized guidance.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center group cursor-pointer" onClick={contact.action}>
                  <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-200 transition-colors`}>
                    <contact.icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-clique-charcoal-800">{contact.label}</div>
                    <div className="text-clique-charcoal-600">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="font-semibold text-clique-charcoal-800">Quick Chat on WhatsApp</h4>
              </div>
              <p className="text-clique-charcoal-600 mb-4">
                Get instant answers to your sourcing questions. Our team is available on WhatsApp for immediate assistance.
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </button>
            </div>

            {/* Response Time */}
            <div className="mt-8 bg-clique-teal-50 rounded-xl p-6">
              <h4 className="font-semibold text-clique-charcoal-800 mb-2">Our Response Promise</h4>
              <ul className="space-y-2 text-clique-charcoal-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-clique-teal-500 mr-2" />
                  WhatsApp: Instant response during business hours
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-clique-teal-500 mr-2" />
                  Quote requests: Within 24 hours
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-clique-teal-500 mr-2" />
                  Email inquiries: Within 12 hours
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;