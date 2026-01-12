import React, { useState } from 'react';
import { Calendar, Shield, Clock, Phone, User, Activity } from 'lucide-react';

export default function App() {
  const [booked, setBooked] = useState(false);
  const [lang, setLang] = useState('ar'); // حالة اللغة (عربي افتراضي)

  // نصوص الموقع باللغتين
  const content = {
    ar: {
      dir: 'rtl',
      title: 'دكتور باتمان',
      nav: ['السيرة الذاتية', 'الخدمات', 'احجز الآن'],
      heroH1: 'العدالة تبدأ',
      heroH1Span: 'بصحتك الجسدية',
      heroDesc: 'دكتور هاني واين (باتمان) متخصص في علاج إصابات الملاعب والكسور الناتجة عن مكافحة الجريمة. نعتني بك في عيادة غوثام المتطورة.',
      btns: ['ابدأ العلاج الآن'],
      stats: ['عملية ناجحة', 'طوارئ ليلية', 'سنة خبرة', 'خسائر بشرية'],
      formTitle: 'حدد موعد النداء',
      formDesc: 'سيتم التواصل معك عبر إشارة "الخفاش" لتأكيد موعدك السري.',
      labels: { name: 'الاسم الكامل', date: 'تاريخ الحجز', case: 'حالة الإصابة', submit: 'ارسال الطلب' },
      success: 'تم استلام نداء الاستغاثة! انتظر الإشارة في السماء.'
    },
    en: {
      dir: 'ltr',
      title: 'DR. BATMAN',
      nav: ['Biography', 'Services', 'Book Now'],
      heroH1: 'Justice Starts',
      heroH1Span: 'With Your Health',
      heroDesc: 'Dr. Hani Wayne (Batman) specializes in sports injuries and fractures resulting from crime-fighting. We care for you at Gotham Clinic.',
      btns: ['Start Treatment'],
      stats: ['Success Surgery', 'Night Emergency', 'Years Exp', 'Human Losses'],
      formTitle: 'Set Call Time',
      formDesc: 'You will be contacted via "Bat-Signal" to confirm your secret appointment.',
      labels: { name: 'Full Name', date: 'Booking Date', case: 'Injury Case', submit: 'Send Request' },
      success: 'Distress Signal Received! Watch the sky.'
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans" dir={t.dir}>
      
      {/* 1. Navbar (الشريط العلوي) */}
      <nav className="p-6 flex justify-between items-center border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          {/* صورة اللوجو الصغيرة */}
          <img 
            src="/imgs/logo (1).png" 
            alt="Logo" 
            className="w-10 h-10 object-contain"
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
          <h1 className="text-2xl font-black tracking-tighter text-yellow-500">{t.title}</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="text-xs border border-yellow-500/50 px-3 py-1 rounded hover:bg-yellow-500 hover:text-black transition uppercase font-bold"
          >
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>
          <a href="#booking" className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition">
            {t.nav[2]}
          </a>
        </div>
      </nav>

      {/* 2. Hero Section (واجهة الموقع) */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-6xl font-black mb-6 leading-tight">
            {t.heroH1} <br /> <span className="text-yellow-500">{t.heroH1Span}</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">{t.heroDesc}</p>
          <div className="flex gap-4">
            <a href="#booking" className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition">{t.btns[0]}</a>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-yellow-500/10 blur-[100px] rounded-full"></div>
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] bg-zinc-900 border-2 border-yellow-500/30 rounded-3xl overflow-hidden shadow-2xl">
             <img 
               src="/imgs/doctor.png.png" 
               alt="Dr Batman"
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
               onError={(e) => { e.target.src = "https://via.placeholder.com/500x500/111/Y?text=Doctor+Photo"; }}
             />
          </div>
        </div>
      </section>

      {/* 3. Stats (أرقام) */}
      <div className="bg-zinc-900/50 py-12 border-y border-zinc-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[ 
            {n: "+1000", s: t.stats[0]}, {n: "24/7", s: t.stats[1]}, 
            {n: "26", s: t.stats[2]}, {n: "0", s: t.stats[3]} 
          ].map((item, i) => (
            <div key={i}>
              <h5 className="text-3xl font-bold text-yellow-500">{item.n}</h5>
              <p className="text-gray-500">{item.s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Booking Form (نموذج الحجز) */}
      <section id="booking" className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="flex-1 p-12 bg-yellow-500 text-black">
            <h3 className="text-4xl font-black mb-6">{t.formTitle}</h3>
            <p className="mb-8 font-medium">{t.formDesc}</p>
            <div className="space-y-4 font-bold">
              <p className="flex items-center gap-2"><Clock size={20}/> 8 PM - 4 AM</p>
              <p className="flex items-center gap-2"><Shield size={20}/> {lang === 'ar' ? 'سري للغاية' : 'Top Secret'}</p>
            </div>
          </div>
          <div className="flex-[1.5] p-12 text-black">
            {!booked ? (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setBooked(true); }}>
                <input type="text" placeholder={t.labels.name} className="w-full p-3 bg-black text-white border border-zinc-700 rounded-xl focus:border-yellow-500 outline-none" required />
                <input type="date" className="w-full p-3 bg-black text-white border border-zinc-700 rounded-xl focus:border-yellow-500 outline-none" required />
                <textarea placeholder={t.labels.case} className="w-full p-3 bg-black text-white border border-zinc-700 rounded-xl focus:border-yellow-500 outline-none h-24"></textarea>
                <button className="w-full bg-white text-black py-4 rounded-xl font-black hover:bg-yellow-500 transition uppercase tracking-widest">{t.labels.submit}</button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10 text-white">
                <Activity size={50} className="text-green-500 animate-pulse" />
                <h4 className="text-2xl font-bold">{t.success}</h4>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-10 text-center text-gray-600 border-t border-zinc-900">
        <p>© 2026 {t.title} - Gotham Medical Center</p>
      </footer>
    </div>
  );
}