import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignInPage = ({ onSignIn, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      return;
    }

    setLoading(true);
    const result = await onSignIn(formData);
    setLoading(false);

    if (!result.success) {
      setError(result.error || 'فشل إنشاء الحساب');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#e3e4e9]" dir="rtl">
      <Header onNavigate={onNavigate} title="إنشاء حساب" />

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0c1f40]">إنشاء حساب</h2>
            <p className="text-gray-600 mt-2">انضم إلى مَكمَن الآن</p>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="كلمة المرور"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="تأكيد كلمة المرور"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />


            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0c1f40] text-white py-3 rounded-lg font-bold"
            >
              {loading ? 'جاري الإنشاء...' : 'إنشاء حساب'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">لديك حساب؟ </span>
            <button
              onClick={() => onNavigate('login')}
              className="text-[#0c1f40] font-semibold hover:underline"
            >
              تسجيل الدخول
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignInPage;
