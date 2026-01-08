import React from 'react';
import { Camera, TrendingUp, MapPin, Shield, BarChart3, Zap } from 'lucide-react';

// ================= FEATURE CARD COMPONENT =================
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#1a2942] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-[#00d4ff]/20 hover:border-[#00d4ff]/50">
    <div className="w-16 h-16 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mb-6">
      <Icon className="w-10 h-10 text-[#00d4ff]" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

// ================= NAV BUTTONS DATA =================
const navButtons = [
  { label: 'إنشاء حساب', page: 'signin', type: 'outline' },
  { label: 'تسجيل الدخول', page: 'login', type: 'solid' },
];

const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#e3e4e9]" dir="rtl">

      {/* ================= HEADER ================= */}
      <nav className="bg-[#0c1f40] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-14 md:h-16 w-auto object-contain" />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {navButtons.map((btn) => (
              <button
                key={btn.page}
                onClick={() => onNavigate(btn.page)}
                className={`px-5 py-2 rounded-lg font-semibold transition ${
                  btn.type === 'solid'
                    ? 'bg-white text-[#0c1f40] hover:bg-gray-100'
                    : 'border border-white text-white hover:bg-white/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c1f40] mb-6">
            نظام الذكاء الاصطناعي <span style={{ color: '#154B68' }}> للأعمال</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            راقب فروعك، حلل الفيديوهات لحظيًا، واتخذ قرارات ذكية باستخدام الذكاء الاصطناعي.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-4 border-2 border-[#0c1f40] text-[#0c1f40] rounded-lg hover:bg-gray-100 font-bold">
              شاهد العرض
            </button>
          </div>
        </div>
      </section>
        

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-16">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c1f40] mb-4">مميزات النظام</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف الميزات القوية لنظام الذكاء الاصطناعي الذي يساعدك على مراقبة الفروع، تحليل الفيديوهات، واتخاذ قرارات ذكية بسرعة وسهولة.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Camera}
            title="إدارة الكاميرات الذكية"
            description="راقب وأدر الكاميرات عبر جميع الفروع باستخدام التحليلات المدعومة بالذكاء الاصطناعي."
          />
          <FeatureCard
            icon={TrendingUp}
            title="التحليلات الفورية"
            description="احصل على رؤى فورية وتقارير شاملة لاتخاذ قرارات عمل مستنيرة."
          />
          <FeatureCard
            icon={MapPin}
            title="دعم متعدد الفروع"
            description="إدارة سلسة للعمليات عبر مواقع أعمال متعددة."
          />
          <FeatureCard
            icon={Shield}
            title="أمان متقدم"
            description="أمان على مستوى المؤسسات مع التحكم في الوصول حسب الدور."
          />
          <FeatureCard
            icon={BarChart3}
            title="تقارير مفصلة"
            description="إنشاء تقارير شاملة مع لوحات معلومات قابلة للتخصيص."
          />
          <FeatureCard
            icon={Zap}
            title="رؤى الذكاء الاصطناعي"
            description="استفد من خوارزميات التعلم الآلي لاكتشاف الأنماط."
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto bg-[#0c1f40] rounded-2xl p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            هل أنت مستعد للبدء؟
          </h2>
          <p className="text-gray-200 mb-8">
            انضم إلى الشركات التي تطور أعمالها باستخدام الذكاء الاصطناعي.
          </p>
          <button
            onClick={() => onNavigate('subscriptions')}
            className="px-10 py-4 bg-white text-[#0c1f40] rounded-lg font-bold hover:bg-gray-100"
          >
            صفحة الاشتراكات
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0c1f40] py-6 text-center">
        <p className="text-gray-300 text-sm sm:text-base">
          © 2026 مَكمَن – جميع الحقوق محفوظة لأفضل فريق: بدر - صالح - ضي - لمى
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
