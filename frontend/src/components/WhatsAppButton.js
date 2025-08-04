import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Hide tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const openWhatsApp = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "+1234567890"; // Update with real number
    const message = "Hi Clique! I'm interested in sourcing products from China. Can you help me?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    setShowTooltip(false);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 mr-2">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-xs relative animate-fade-in">
            {/* Close button */}
            <button
              onClick={closeTooltip}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="pr-6">
              <h4 className="font-semibold text-clique-charcoal-800 mb-1">
                Need help sourcing?
              </h4>
              <p className="text-sm text-clique-charcoal-600 mb-3">
                Chat with our sourcing experts on WhatsApp for instant assistance!
              </p>
              <button
                onClick={openWhatsApp}
                className="text-sm bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors"
              >
                Start Chat
              </button>
            </div>
            
            {/* Arrow pointing to WhatsApp button */}
            <div className="absolute bottom-0 right-8 transform translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 whatsapp-pulse"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Pulse animation circles */}
      <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-30 animate-ping"></div>
      <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default WhatsAppButton;