
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, ArrowUpRight, Aperture, Layers, Fingerprint, Gem, CheckCircle2, ShieldCheck, RefreshCw, CreditCard } from 'lucide-react';
import LiquidText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import AIChat from './components/AIChat';
import VideoBackground from './components/VideoBackground';
import { Project, ServicePackage } from './types';

// Data
const PORTFOLIO: Project[] = [
  { 
    id: '1', 
    title: 'Void Aesthetic', 
    category: 'Editorial', 
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    description: 'High-contrast portraiture for the digital age.'
  },
  { 
    id: '2', 
    title: 'Chrome Hearts Vibe', 
    category: 'Campaign', 
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop',
    description: 'Gothic futurism meets luxury streetwear.'
  },
  { 
    id: '3', 
    title: 'Liquid Silk', 
    category: 'Motion', 
    image: 'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=1000&auto=format&fit=crop',
    description: 'Generative fluid simulations for fabric rendering.'
  },
  { 
    id: '4', 
    title: 'Neo-Tehran', 
    category: 'Brand Identity', 
    image: 'https://images.unsplash.com/photo-1500917293047-325b96908695?q=80&w=1000&auto=format&fit=crop',
    description: 'Merging cultural heritage with cyberpunk aesthetics.'
  },
  { 
    id: '5', 
    title: 'Ethereal Models', 
    category: 'AI Cast', 
    image: 'https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=1000&auto=format&fit=crop',
    description: 'Perfectly imperfect digital humans.'
  },
  { 
    id: '6', 
    title: 'Glass Reality', 
    category: 'Lookbook', 
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop',
    description: 'Refractive visuals for accessory launch.'
  },
];

const PACKAGES: ServicePackage[] = [
  {
    title: 'پکیج پایه',
    price: '۱۹,۸۰۰,۰۰۰ تومان',
    description: 'شروع قدرتمند برای حضور در شبکه‌های اجتماعی.',
    features: [
      '۱ ردیف کامل پست‌های گرید (۳ پست شبکه‌ای)',
      '۲ تصویر هیرو با کیفیت بالا',
      '۱ ویدیو موشن (ریل)',
      '۱ دور بازبینی'
    ],
    bonus: 'شامل ایجاد "سفیر برند" (مدل شخصی‌سازی‌شده)',
    whatsappMessage: 'سلام، آماده‌ام پکیج پایه رو رزرو کنم.'
  },
  {
    title: 'پکیج استاندارد',
    price: '۴۸,۰۰۰,۰۰۰ تومان',
    description: 'کمپین کامل برای تاثیرگذاری حداکثری.',
    isPopular: true,
    features: [
      '۲ ردیف کامل پست‌های گرید (۶ پست شبکه‌ای)',
      '۴ تصویر ادیتوریال (سبک مجله‌ای)',
      '۲ ریل سینمایی (داستانی)',
      'کپشن‌های Narrative (فارسی و انگلیسی)',
      '۲ دور بازبینی'
    ],
    bonus: 'شامل «تریپتیک هیجان» (۳ تصویر استوری پیوسته)',
    whatsappMessage: 'سلام، می‌خوام پکیج استاندارد رو رزرو کنم.'
  },
  {
    title: 'پکیج پیشرفته',
    price: '۹۵,۰۰۰,۰۰۰ تومان',
    description: 'تحول کامل برند و استراتژی ویروسی.',
    features: [
      'کمپین کامل (بیش از ۱۵ دارایی)',
      '۱ فیلم برند سینمایی (4K)',
      'لوک‌بوک دیجیتال (لی‌اوت PDF)',
      'طراحی صدای حرفه‌ای',
      '۳ دور بازبینی + مشاوره مدیر خلاق'
    ],
    bonus: 'شامل "دک ویژن آینده" (مفاهیم فصل بعدی)',
    whatsappMessage: 'سلام، برای پکیج پیشرفته و تحول برند تماس می‌گیرم.'
  }
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  const openWhatsApp = (message: string) => {
    // Replace with actual phone number
    const phoneNumber = "989123456789"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black text-white selection:bg-white selection:text-black cursor-auto md:cursor-none overflow-x-hidden">
      <CustomCursor />
      <AIChat />
      
      {/* Video Background Commented Out to fix potential crash on deployment */}
      {/* <VideoBackground /> */}

      {/* Navigation - Glassy Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 flex justify-center items-center mix-blend-difference">
        {/* Logo Centered - Adjusted size and tracking */}
        <div 
          className="text-3xl font-heading font-black tracking-widest text-white z-50 cursor-pointer text-center" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
        >
          ASCEND
        </div>
        
        {/* Desktop Links - Absolute Positioning to keep logo centered */}
        <div className="absolute right-8 hidden md:flex gap-12 items-center">
          {['Work', 'Services', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-colors relative group"
              data-hover="true"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button - Absolute Right */}
        <button 
          className="absolute right-6 md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center gap-10"
          >
            {['Work', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-4xl font-heading font-bold uppercase text-white tracking-widest"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-gray-400"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_15px_#60a5fa]" />
            AI Campaign Visuals
          </motion.div>

          <LiquidText 
            text="ASCEND" 
            as="h1" 
            className="text-[18vw] leading-[0.8] tracking-tighter opacity-100"
          />
          
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="mt-12 text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed mix-blend-screen"
          >
            We merge cultural storytelling with cinematic AI visuals to make your brand <span className="text-white font-bold italic">untouchable</span>.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </header>

      {/* WORK / GALLERY SECTION */}
      <section id="work" className="relative z-10 py-32 px-4 md:px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
            <h2 className="text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
              Select<br/>Work
            </h2>
            <div className="hidden md:block text-right text-gray-400 font-mono text-sm max-w-xs">
              SHOWCASING THE FUTURE OF DIGITAL FASHION CAMPAIGNS.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {PORTFOLIO.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden bg-[#050505] border border-white/5 cursor-pointer"
                data-hover="true"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Liquid Glass Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-white/5 backdrop-blur-[2px]" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1 block">{project.category}</span>
                        <h3 className="text-2xl font-heading font-bold uppercase">{project.title}</h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / PRICING SECTION */}
      <section id="services" className="relative z-10 py-32 bg-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-24">
             <h2 className="text-5xl md:text-8xl font-heading font-bold mb-6">SERVICES</h2>
             <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-widest text-sm">Elevate your brand aesthetic</p>
           </div>

           {/* Cards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
             {PACKAGES.map((pkg, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className={`relative flex flex-col justify-between group overflow-hidden font-persian ${pkg.isPopular ? 'border border-white/40 bg-white/5' : 'border border-white/10 bg-black/20'}`}
                 style={{
                   boxShadow: pkg.isPopular ? '0 0 50px rgba(255,255,255,0.05)' : 'none'
                 }}
               >
                 {/* Glass Reflection */}
                 <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-y-12 translate-y-[-50%]" />

                 <div className="p-8 md:p-12 text-right" dir="rtl">
                   <div className="flex justify-between items-center mb-8 flex-row-reverse">
                      {i === 0 && <Aperture className="w-8 h-8 text-gray-500" />}
                      {i === 1 && <Layers className="w-8 h-8 text-white" />}
                      {i === 2 && <Fingerprint className="w-8 h-8 text-gray-500" />}
                      {pkg.isPopular && <span className="text-[10px] font-bold bg-white text-black px-2 py-1 uppercase tracking-widest font-heading">Most Popular</span>}
                   </div>
                   
                   <h3 className="text-3xl font-bold mb-2">{pkg.title}</h3>
                   <div className="text-4xl font-light text-blue-300 mb-8 tracking-tight">{pkg.price}</div>
                   
                   <ul className="space-y-4 mb-8">
                     {pkg.features.map((feature, fIdx) => (
                       <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                         <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                         {feature}
                       </li>
                     ))}
                   </ul>

                   {pkg.bonus && (
                     <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-lg">
                        <div className="flex items-center gap-2 text-[#ff4d4d] mb-1 font-bold text-sm">
                          <Gem className="w-4 h-4" />
                          <span>جایزه محدود</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{pkg.bonus}</p>
                     </div>
                   )}
                 </div>

                 <div className="p-8 md:p-12 pt-0">
                  <button 
                    onClick={() => openWhatsApp(pkg.whatsappMessage || '')}
                    className="w-full py-4 border border-white/20 font-persian font-bold text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                    data-hover="true"
                  >
                    رزرو پکیج
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                 </div>
               </motion.div>
             ))}
           </div>

           {/* Terms & Protocols Section */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 font-persian" dir="rtl">
             <div className="space-y-4 text-right">
                <div className="flex items-center gap-3 text-white">
                  <CreditCard className="w-6 h-6 text-gray-400" />
                  <h4 className="font-bold text-lg">ساختار پرداخت</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  برای رزرو جایگاه تولید، ۵۰٪ پیش‌پرداخت لازم هست. ۵۰٪ باقی‌مانده بعد از تکمیل کار و قبل از تحویل فایل‌های باکیفیت بالا و بدون واترمارک پرداخت می‌شه.
                </p>
             </div>
             
             <div className="space-y-4 text-right">
                <div className="flex items-center gap-3 text-white">
                  <RefreshCw className="w-6 h-6 text-gray-400" />
                  <h4 className="font-bold text-lg">پروتکل بازبینی</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  ما بین "اصلاحات فنی" (نامحدود) و "تغییرات خلاقانه" (محدود به پکیج) تفاوت قائل می‌شیم. اگر مفهوم اصلی بعد از تولید تغییر کنه، هزینه کمیسیون جدید اعمال می‌شه.
                </p>
             </div>

             <div className="space-y-4 text-right">
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="w-6 h-6 text-gray-400" />
                  <h4 className="font-bold text-lg">حقوق دارایی‌ها</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  پس از پرداخت نهایی، مشتری حقوق کامل استفاده از محتوا رو می‌گیره. BERUDED حقوق روش‌های تولید (مثل فناوری AI) رو نگه می‌داره.
                </p>
             </div>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative z-10 pt-32 pb-12 px-4 md:px-8 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="mb-12 md:mb-0">
            <h2 className="text-[12vw] md:text-[8vw] font-heading font-bold leading-none text-white mix-blend-difference mb-4">
              ASCEND
            </h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
              Tehran — Global <br/> © 2025
            </p>
          </div>
          
          <div className="flex flex-col gap-6 text-right">
             <a href="mailto:hello@ascend.agency" className="text-xl md:text-2xl text-white hover:text-gray-400 transition-colors">hello@ascend.agency</a>
             <div className="flex gap-8 justify-end items-center">
               <a 
                 href="https://instagram.com/beruded" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-sm uppercase tracking-widest hover:text-white text-gray-400 transition-colors hover:underline"
                 data-hover="true"
               >
                 Instagram
               </a>
               <a 
                 href="#" 
                 className="text-sm uppercase tracking-widest hover:text-white text-gray-400 transition-colors hover:underline"
                 data-hover="true"
               >
                 Twitter
               </a>
               <a 
                 href="#" 
                 className="text-sm uppercase tracking-widest hover:text-white text-gray-400 transition-colors hover:underline"
                 data-hover="true"
               >
                 LinkedIn
               </a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
