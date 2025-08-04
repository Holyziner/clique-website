// Utility functions and services

// WhatsApp integration
export const whatsappService = {
  openChat: (phoneNumber, message) => {
    const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  },

  // Predefined messages for different scenarios
  messages: {
    general: "Hi Clique! I'm interested in sourcing products from China. Can you help me?",
    quote: "Hi! I'd like to get a quote for sourcing products. Can we discuss my requirements?",
    support: "Hi! I have some questions about your sourcing services. Can you help?",
    followUp: "Hi! I submitted a quote request and wanted to follow up. Can you provide an update?"
  }
};

// Smooth scroll utility
export const scrollToSection = (sectionId, offset = 0) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Format phone number for display
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1,3})(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
  }
  
  return phoneNumber;
};

// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format currency
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Debounce function for search inputs
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Local storage utilities
export const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },
  
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
};

// Analytics/tracking utilities (placeholder for future implementation)
export const analytics = {
  track: (eventName, properties = {}) => {
    // Placeholder for analytics tracking
    console.log('Analytics Event:', eventName, properties);
  },
  
  trackQuoteRequest: (quoteData) => {
    analytics.track('quote_request_submitted', {
      product: quoteData.product,
      quantity: quoteData.quantity,
      source: 'website_form'
    });
  },
  
  trackWhatsAppClick: () => {
    analytics.track('whatsapp_clicked', {
      source: 'website'
    });
  },
  
  trackSectionView: (sectionName) => {
    analytics.track('section_viewed', {
      section: sectionName
    });
  }
};

// Image optimization utilities
export const imageUtils = {
  optimizeImageUrl: (url, width = 800, quality = 80) => {
    // Placeholder for image optimization
    return url;
  },
  
  lazyLoad: (imgElement) => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      imageObserver.observe(imgElement);
    }
  }
};

// Error handling utilities
export const errorHandler = {
  logError: (error, context = '') => {
    console.error(`Error ${context}:`, error);
    // Here you could send to an error reporting service
  },
  
  getErrorMessage: (error) => {
    if (error.response?.data?.detail) {
      return error.response.data.detail;
    }
    if (error.message) {
      return error.message;
    }
    return 'An unexpected error occurred. Please try again.';
  }
};

// SEO utilities
export const seoUtils = {
  updateTitle: (title) => {
    document.title = title;
  },
  
  updateMetaDescription: (description) => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }
};