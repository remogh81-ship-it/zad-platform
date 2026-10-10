"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, Users, Video, ShieldCheck, Sparkles, ArrowLeft, CheckCircle2, PlayCircle, Heart } from 'lucide-react';

export default function LandingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dir-rtl font-sans text-slate-800 overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-900" dir="rtl">
      
      {/* Navbar (Glassmorphism) */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-l from-emerald-600 to-teal-800">
                زاد
              </span>
            </div>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#" className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors">الرئيسية</a>
              <a href="#features" className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors">المميزات</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors">طريقة العمل</a>
              <a href="#pricing" className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors">الأسعار</a>
            </div>
            <div className="flex gap-4">
              <button className="hidden md:block text-emerald-700 font-bold hover:text-emerald-800 transition">دخول</button>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all">
                ابدأ مجاناً
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-300 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            
            <motion.div 
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-semibold text-sm mb-6 border border-amber-200 shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>المنصة الأولى المخصصة للأطفال</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl leading-tight">
                علم طفلك القرآن بـ <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-l from-emerald-500 to-teal-600">
                  متعة وإتقان
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="mt-6 text-lg text-slate-600 sm:text-xl leading-relaxed">
                رحلة إيمانية مصممة خصيصاً للأطفال. معلمين مجازين، ألعاب تحفيزية، ومتابعة دقيقة، بأسعار في متناول كل أسرة.
              </motion.p>
              
              <motion.div variants={fadeIn} className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-500/20 hover:-translate-y-1 transition-all">
                  احجز حصة تجريبية <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all">
                  <PlayCircle className="w-5 h-5 text-emerald-600" /> شاهد كيف نعمل
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image/Graphic */}
            <motion.div 
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden bg-white border border-slate-100 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
                  <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
                  
                  <Heart className="w-16 h-16 text-rose-400 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">بيئة آمنة ومحفزة</h3>
                  <p className="text-slate-500 mb-6">يجمع زاد بين متعة التعلم وروحانية القرآن</p>
                  
                  <div className="flex justify-center gap-2 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-sm font-bold text-slate-700">&quot;أفضل قرار اتخذته لطفلي هذا العام&quot;</p>
                  <p className="text-xs text-slate-400 mt-1">- أم أحمد</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-2">لماذا زاد؟</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              كل ما يحتاجه طفلك لحفظ القرآن بتميز
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'معلمون مجازون', desc: 'نخبة مختارة بعناية من المعلمين والمعلمات المتخصصين في التعامل مع الأطفال.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
              { icon: Users, title: 'فردي أو جماعي', desc: 'اختر بين التركيز الكامل في الحصص الفردية، أو التنافس الإيجابي في المجموعات.', color: 'text-amber-600', bg: 'bg-amber-100' },
              { icon: Video, title: 'مرونة تامة', desc: 'جدول حصص مرن يناسب وقت طفلك من أي مكان وفي أي وقت عبر تقنية الفيديو.', color: 'text-indigo-600', bg: 'bg-indigo-100' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Vastly Improved) */}
      <section id="pricing" className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">استثمار حقيقي في مستقبل طفلك</h2>
            <p className="mt-4 text-lg text-slate-600">أسعار لا تقبل المنافسة، جودة تعليمية لن تجدها في مكان آخر.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto">
            
            {/* Group Plan */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-2xl font-bold text-slate-900">المجموعات التفاعلية</h3>
              <p className="mt-2 text-slate-500">لخلق روح التنافس بين الأطفال</p>
              <div className="mt-6 flex items-baseline text-5xl font-extrabold text-slate-900">
                25<span className="text-xl font-medium text-slate-500 ml-1">ج.م</span>
                <span className="text-lg font-medium text-slate-400 mx-2">/</span>
                <span className="text-lg font-medium text-slate-500">حصة</span>
              </div>
              <p className="mt-2 text-sm font-bold text-amber-600 bg-amber-50 inline-block px-3 py-1 rounded-full">أو 3 ريال سعودي للحصة</p>
              
              <ul className="mt-8 space-y-4">
                {['عدد محدود جداً لضمان الجودة', 'تقارير أسبوعية لولي الأمر', 'ألعاب تنافسية بين الطلاب'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 w-full bg-slate-100 text-slate-800 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors">
                اختر المجموعات
              </button>
            </motion.div>

            {/* Private Plan */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-emerald-600 to-teal-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden transform md:-translate-y-4 text-white"
            >
              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-amber-950" /> الأكثر طلباً
                </span>
              </div>
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-bl-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold">المعلم الخاص (برايفيت)</h3>
              <p className="mt-2 text-emerald-100">تركيز 100% مع طفلك فقط لسرعة الحفظ</p>
              <div className="mt-6 flex items-baseline text-5xl font-extrabold text-white">
                40<span className="text-xl font-medium text-emerald-200 ml-1">ج.م</span>
                <span className="text-lg font-medium text-emerald-300 mx-2">/</span>
                <span className="text-lg font-medium text-emerald-200">حصة</span>
              </div>
              <p className="mt-2 text-sm font-bold text-teal-900 bg-emerald-300 inline-block px-3 py-1 rounded-full">أو 4.5 ريال سعودي للحصة</p>
              
              <ul className="mt-8 space-y-4">
                {['خطة مخصصة تماماً لقدرات طفلك', 'أوقات مرنة جداً حسب جدولك', 'تأسيس مكثف في نور البيان', 'متابعة مباشرة ومستمرة'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                    <span className="text-emerald-50">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 w-full bg-white text-emerald-700 font-bold py-4 rounded-xl hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl">
                احجز معلم خاص الآن
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <BookOpen className="text-emerald-600 w-6 h-6" />
            <span className="text-2xl font-bold text-slate-800">زاد</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">© 2026 منصة زاد لتعليم القرآن. بنيت بحب للأطفال.</p>
        </div>
      </footer>
    </div>
  );
}
