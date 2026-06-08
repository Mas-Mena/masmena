import React, { useEffect } from 'react';

const BookingForm: React.FC = () => {
  useEffect(() => {
    // Inject the Calendly script tag when the component mounts
    const existingScript = document.getElementById('calendly-widget-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-widget-script';
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full max-w-[1060px] bg-[var(--bg-primary)] border border-[var(--border-color)] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col transition-colors duration-700">
      {/* Calendly inline widget */}
      <div 
        className="calendly-inline-widget w-full" 
        data-url="https://calendly.com/masmena-info/30min?background_color=000000&text_color=ffffff" 
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};

export default BookingForm;
