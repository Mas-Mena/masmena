import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Video, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const TIME_SLOTS = [
  '6:30am', '7:00am', '7:30am', '8:00am', '8:30am', 
  '9:00am', '9:30am', '10:00am', '10:30am', '11:00am',
  '11:30am', '12:00pm'
];

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number>(18);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStep(3);
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1060px] bg-[var(--bg-primary)] border border-[var(--border-color)] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row transition-colors duration-700">
      
      {/* ── Left Sidebar ── */}
      <div className="w-full lg:w-[280px] bg-[#0c0c0c] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
        
        {/* Compact Collage Header */}
        <div className="relative w-full h-[90px] bg-black p-3 grid grid-cols-5 grid-rows-2 gap-1">
           <div className="bg-red-800/40 rounded-sm col-span-2 row-span-1" />
           <div className="bg-zinc-800 rounded-sm col-span-2 row-span-1" />
           <div className="bg-zinc-900 rounded-sm col-span-1 row-span-2" />
           <div className="bg-zinc-800 rounded-sm col-span-1 row-span-1" />
           <div className="bg-zinc-700/50 rounded-sm col-span-2 row-span-1" />
           
           {/* Floating Logo Circle */}
           <div className="absolute left-5 bottom-[-16px] w-10 h-10 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center shadow-lg z-20">
             <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]" />
             </div>
           </div>
        </div>

        {/* Info Content */}
        <div className="p-6 pt-10 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">MAS MENA®</span>
          </div>

          <h3 className="text-[24px] font-semibold tracking-tight text-white mb-4">Discovery Call</h3>
          
          <div className="space-y-3 text-white/50 text-[13px] leading-relaxed mb-6">
            <p>Curious how you and we can work on your next idea?</p>
            <p className="hidden lg:block">In a 30-minute call, we'll break down what's working and how can we help.</p>
          </div>

          <div className="mt-auto space-y-3">
            <div className="flex items-center gap-3 text-white/50">
              <Clock size={14} className="opacity-70" />
              <span className="text-[12px] font-medium tracking-tight">30m</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <Video size={14} className="opacity-70" />
              <span className="text-[12px] font-medium tracking-tight">Google Meet</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <Globe size={14} className="opacity-70" />
              <span className="text-[12px] font-medium tracking-tight">Asia/Amman</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Panel ── */}
      <div className="flex-1 flex flex-col lg:flex-row relative">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div 
              key="step1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col lg:flex-row"
            >
              {/* Calendar Section */}
              <div className="flex-1 p-7 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[16px] font-semibold text-[var(--text-primary)]">May 2026</span>
                  <div className="flex gap-1">
                    <button className="p-1.5 hover:bg-[var(--text-primary)]/5 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"><ChevronLeft size={16} /></button>
                    <button className="p-1.5 hover:bg-[var(--text-primary)]/5 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"><ChevronRight size={16} /></button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-y-2 gap-x-1">
                  {DAYS.map(day => (
                    <span key={day} className="text-[9px] font-bold text-center text-white/30 tracking-[0.1em] mb-2">{day}</span>
                  ))}
                  
                  {[1,2,3,4,5].map(i => <div key={`empty-${i}`} />)}

                  {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
                    const isSelectable = day >= 8;
                    const isSelected = selectedDate === day;
                    
                    return (
                      <div key={day} className="flex justify-center">
                        <button 
                          onClick={() => isSelectable && setSelectedDate(day)}
                          className={`group relative w-10 h-10 flex flex-col items-center justify-center transition-all rounded-lg ${
                            isSelected 
                              ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold shadow-xl' 
                              : isSelectable 
                                ? 'bg-[var(--text-primary)]/[0.03] hover:bg-[var(--text-primary)]/10 text-[var(--text-primary)]' 
                                : 'text-[var(--text-secondary)]/30 cursor-default'
                          }`}
                        >
                          <span className="text-[14px]">
                            {day === 1 ? <div className="text-[8px] font-bold opacity-30 absolute -top-1">JUN</div> : null}
                            {day}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Section */}
              <div className="w-full lg:w-[280px] p-7 flex flex-col">
                <div className="flex items-center justify-between mb-7">
                  <span className="text-[16px] font-semibold text-white">Mon 18</span>
                  <div className="flex bg-white/5 rounded-full p-1 border border-white/5 scale-90">
                    <button className="px-3 py-1 text-[10px] font-bold bg-white/10 rounded-full text-white">12h</button>
                    <button className="px-3 py-1 text-[10px] font-bold text-white/40">24h</button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar max-h-[380px]">
                  {TIME_SLOTS.map(time => (
                    <button
                      key={time}
                      onClick={() => { setSelectedTime(time); setStep(2); }}
                      className="w-full py-3 border border-[var(--border-color)] rounded-xl text-[13px] font-medium text-[var(--text-primary)]/90 hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)]/5 transition-all text-center"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : step === 2 ? (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 p-8 flex flex-col"
            >
              <button 
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-6 group"
              >
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-medium">Back</span>
              </button>

              <h3 className="text-2xl font-semibold tracking-tight mb-1">Enter Details</h3>
              <p className="text-sm text-white/40 mb-8">Mon, May 18, 2026 at {selectedTime}</p>

              <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Full Name *</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-colors text-white text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Email Address *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-colors text-white text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Notes</label>
                  <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-colors text-white text-sm resize-none" />
                </div>
                <button disabled={isSubmitting} type="submit"
                  className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-[#e0e0e0] transition-all flex items-center justify-center gap-3 text-sm"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : 'Schedule Call'}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-10"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-[28px] font-semibold tracking-tight mb-3">Confirmed!</h3>
              <p className="text-[14px] text-white/40 max-w-sm mb-10 leading-relaxed">
                Check your inbox for the calendar invite.
              </p>
              <button onClick={() => setStep(1)} className="bg-white/5 border border-white/20 px-8 py-3 rounded-full text-xs font-bold hover:bg-white/10 transition-all">
                Done
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
      `}} />
    </div>
  );
};

export default BookingForm;
