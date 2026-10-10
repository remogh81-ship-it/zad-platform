import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dir-rtl font-sans" dir="rtl">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-extrabold text-emerald-600">زاد</span>
              <span className="mr-2 text-sm text-gray-500 font-medium">لتعليم القرآن</span>
            </div>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">الرئيسية</a>
              <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium">المميزات</a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 font-medium">الأسعار</a>
            </div>
            <div>
              <button className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition shadow-sm hover:shadow-md">
                سجل الآن
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">علم طفلك القرآن مع </span>
            <span className="block text-emerald-600 xl:inline mt-2">أفضل المعلمين المتقنين</span>
          </h1>
          <p className="mt-5 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl leading-relaxed">
            منصة "زاد" توفر لك أفضل تجربة تعليمية عن بُعد بطريقة تفاعلية وممتعة للأطفال، وبأسعار لا تقبل المنافسة في العالم الإسلامي.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <div className="rounded-full shadow-md">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105">
                احجز حصة تجريبية مجانية
              </a>
            </div>
            <div className="mt-3 rounded-full shadow-sm sm:mt-0 sm:mr-3 border border-gray-200">
              <a href="#pricing" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors">
                عرض الأسعار
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white mt-24 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">أسعار في متناول الجميع</h2>
            <p className="mt-4 text-xl text-gray-500">تعليم عالي الجودة بتكلفة أقل من أي مكان آخر.</p>
          </div>

          <div className="mt-16 space-y-4 sm:mt-20 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
            
            {/* Group Plan */}
            <div className="border border-gray-200 rounded-3xl shadow-sm divide-y divide-gray-200 bg-white hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <h2 className="text-2xl leading-6 font-bold text-gray-900">حلقات التلاوة (مجموعات)</h2>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">مثالية لتشجيع الأطفال لبعضهم وخلق بيئة تنافسية إيجابية.</p>
                <p className="mt-8 flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900 tracking-tight">25 ج.م</span>
                  <span className="text-lg font-medium text-gray-500 mr-2"> / للحصة</span>
                </p>
                <p className="mt-2 text-sm text-emerald-600 font-bold bg-emerald-50 inline-block px-3 py-1 rounded-full">أو 3 ريال سعودي للحصة</p>
                <a href="#" className="mt-8 block w-full bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full py-4 text-center text-sm font-bold hover:bg-emerald-100 transition-colors">
                  اشترك في المجموعات
                </a>
              </div>
              <div className="pt-6 pb-8 px-8">
                <h3 className="text-xs font-bold text-gray-900 tracking-wide uppercase">ماذا تشمل؟</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3 space-x-reverse items-start">
                    <span className="text-emerald-500 font-bold text-lg">✓</span>
                    <span className="text-sm text-gray-600">حلقة تفاعلية مع عدد محدود من الطلاب</span>
                  </li>
                  <li className="flex space-x-3 space-x-reverse items-start">
                    <span className="text-emerald-500 font-bold text-lg">✓</span>
                    <span className="text-sm text-gray-600">معلمون مجازون ومتخصصون في تعليم الأطفال</span>
                  </li>
                  <li className="flex space-x-3 space-x-reverse items-start">
                    <span className="text-emerald-500 font-bold text-lg">✓</span>
                    <span className="text-sm text-gray-600">تقارير متابعة دورية لولي الأمر</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Private Plan */}
            <div className="border-2 border-emerald-500 rounded-3xl shadow-lg divide-y divide-gray-200 bg-white relative hover:shadow-2xl transition-all duration-300 transform md:-translate-y-2">
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                <span className="bg-emerald-500 text-white text-sm font-bold px-6 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  الأكثر طلباً
                </span>
              </div>
              <div className="p-8">
                <h2 className="text-2xl leading-6 font-bold text-gray-900">المعلم الخاص (برايفيت)</h2>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">تركيز كامل ومكثف مع طفلك فقط لضمان أسرع تقدم وحفظ متقن.</p>
                <p className="mt-8 flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900 tracking-tight">40 ج.م</span>
                  <span className="text-lg font-medium text-gray-500 mr-2"> / للحصة</span>
                </p>
                <p className="mt-2 text-sm text-emerald-600 font-bold bg-emerald-50 inline-block px-3 py-1 rounded-full">أو 4.5 ريال سعودي للحصة</p>
                <a href="#" className="mt-8 block w-full bg-emerald-600 text-white border border-transparent rounded-full py-4 text-center text-sm font-bold hover:bg-emerald-700 transition-colors shadow-md">
                  احجز معلم خاص
                </a>
              </div>
              <div className="pt-6 pb-8 px-8">
                <h3 className="text-xs font-bold text-gray-900 tracking-wide uppercase">ماذا تشمل؟</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3 space-x-reverse items-start">
                    <span className="text-emerald-500 font-bold text-lg">✓</span>
                    <span className="text-sm text-gray-600">انتباه كامل 100% لطفلك</span>
                  </li>
                  <li className="flex space-x-3 space-x-reverse items-start">
                    <span className="text-emerald-500 font-bold text-lg">✓</span>
                    <span className="text-sm text-gray-600">خطة حفظ ومراجعة مخصصة لسرعة الطفل</span>
                  </li>
                  <li className="flex space-x-3 space-x-reverse items-start">
                    <span className="text-emerald-500 font-bold text-lg">✓</span>
                    <span className="text-sm text-gray-600">تأسيس في نور البيان والتجويد الميسر</span>
                  </li>
                  <li className="flex space-x-3 space-x-reverse items-start">
                    <span className="text-emerald-500 font-bold text-lg">✓</span>
                    <span className="text-sm text-gray-600">مرونة كاملة في اختيار أوقات الحصص</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-gray-50 py-12 text-center border-t border-gray-200">
        <p className="text-gray-500">© 2026 منصة زاد لتعليم القرآن. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
