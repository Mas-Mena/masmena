import React from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-background-soft overflow-hidden">
      <div className="container-custom">
        <div className="glass-card overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Info Side */}
            <div className="lg:w-1/3 bg-primary p-12 text-white relative">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Ready to grow your brand?</h2>
                <p className="text-primary-light/80 mb-12 text-lg">
                  Let's create something extraordinary together. Contact us today to start your journey.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary-light/60">Phone</div>
                      <div className="font-bold">+962 7X XXX XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary-light/60">Email</div>
                      <div className="font-bold">hello@masmena.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary-light/60">Location</div>
                      <div className="font-bold">Amman, Jordan</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-16 border-t border-white/10">
                  <button className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition-all w-full justify-center shadow-lg">
                    <MessageCircle size={24} />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            </div>

            {/* Form Side */}
            <div className="lg:w-2/3 p-12 bg-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy/60">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy/60">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy/60">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none">
                    <option>Influencer Marketing</option>
                    <option>Social Media Management</option>
                    <option>Video Production</option>
                    <option>Other Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy/60">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your campaign goals..."
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="btn-primary w-full py-5 text-lg group">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
