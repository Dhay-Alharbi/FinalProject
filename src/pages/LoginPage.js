import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await onLogin(email, password);
    setLoading(false);

    if (!result.success) {
      setError(result.error || 'بيانات الدخول غير صحيحة');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#e3e4e9]" dir="rtl">
      <Header onNavigate={onNavigate} title="تسجيل الدخول" />
      <main className="flex justify-center items-center flex-grow py-20 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-[#0c1f40] mb-6 text-center">تسجيل الدخول</h2>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm text-right">{error}</div>
          )}
          <div className="mb-4 flex items-center border rounded-lg p-3">
            <Mail className="text-gray-400 ml-2" size={20} />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full outline-none text-right"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 flex items-center border rounded-lg p-3">
            <Lock className="text-gray-400 ml-2" size={20} />
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full outline-none text-right"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0c1f40] text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            {loading ? 'جاري الدخول...' : 'دخول'}
          </button>
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">ليس لديك حساب؟ </span>
            <button
              type="button"
              onClick={() => onNavigate('signup')}
              className="text-[#0c1f40] font-semibold hover:underline"
            >
              إنشاء حساب
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
