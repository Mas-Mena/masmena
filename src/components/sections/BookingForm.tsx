import React, { useEffect, useRef } from 'react';

const BookingForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWidget = () => {
      const calendly = (window as any).Calendly;
      if (calendly && containerRef.current) {
        containerRef.current.innerHTML = '';
        calendly.initInlineWidget({
          url: 'https://calendly.com/masmena-info/30min?background_color=000000&text_color=ffffff',
          parentElement: containerRef.current,
        });
      }
    };

    let script = document.getElementById('calendly-widget-script') as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.id = 'calendly-widget-script';
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        initWidget();
      };
    } else {
      if ((window as any).Calendly) {
        initWidget();
      } else {
        const oldOnload = script.onload;
        script.onload = (e) => {
          if (oldOnload) (oldOnload as any)(e);
          initWidget();
        };
      }
    }
  }, []);

  return (
    <div className="w-full max-w-[1060px] bg-[var(--bg-primary)] border border-[var(--border-color)] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col transition-colors duration-700">
      {/* Container where Calendly will dynamically render the iframe */}
      <div 
        ref={containerRef}
        className="w-full" 
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};

export default BookingForm;
