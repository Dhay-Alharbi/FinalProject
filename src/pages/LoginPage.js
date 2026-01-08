import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await onLogin(email, password);
    if (!result.success) setError('بيانات الدخول غير صحيحة');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#e3e4e9]" dir="rtl">
      <Header onNavigate={onNavigate} title="تسجيل الدخول" />

      <main className="flex justify-center items-center flex-grow py-20 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-[#0c1f40] mb-6 text-center">
            تسجيل الدخول
          </h2>

          {error && <p className="text-red-600 mb-4 text-right">{error}</p>}

          <div className="mb-4 flex items-center">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full border p-3 rounded text-right"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full border p-3 rounded text-right"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0c1f40] text-white py-3 rounded font-bold"
          >
            دخول
          </button>

          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">ليس لديك حساب؟ </span>
            <button
              onClick={() => onNavigate('signin')}
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
