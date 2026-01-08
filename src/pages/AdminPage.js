import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserPlus, Users, BarChart3, TrendingUp, Activity, CheckCircle, Clock, Search, Filter, Download } from 'lucide-react';

const AdminPage = ({ userName = 'المدير', onNavigate }) => {
  const [activePage, setActivePage] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const [requests, setRequests] = useState([
    { id: 1, name: 'محمد علي', email: 'mohamed@example.com', date: '2024-01-15', status: 'معلق' },
    { id: 2, name: 'سارة أحمد', email: 'sarah@example.com', date: '2024-01-14', status: 'مكتمل' },
    { id: 3, name: 'خالد يوسف', email: 'khaled@example.com', date: '2024-01-13', status: 'معلق' },
    { id: 4, name: 'فاطمة محمود', email: 'fatima@example.com', date: '2024-01-12', status: 'مكتمل' },
  ]);

  const [subscribersData, setSubscribersData] = useState({
    total: 125,
    active: 100,
    inactive: 25,
    newThisMonth: 15,
    plans: {
      basic: 50,
      premium: 70,
      enterprise: 5,
    },
    recent: [
      { id: 1, name: 'محمد علي', email: 'mohamed@example.com', plan: 'Premium', status: 'Active', joinDate: '2024-01-15' },
      { id: 2, name: 'سارة أحمد', email: 'sarah@example.com', plan: 'Basic', status: 'Inactive', joinDate: '2024-01-10' },
      { id: 3, name: 'خالد يوسف', email: 'khaled@example.com', plan: 'Premium', status: 'Active', joinDate: '2024-01-08' },
      { id: 4, name: 'فاطمة محمود', email: 'fatima@example.com', plan: 'Enterprise', status: 'Active', joinDate: '2024-01-05' },
    ],
  });

  const handleChangePage = (page) => setActivePage(page);

  const handleStatusChange = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const filteredRequests = requests.filter(req =>
    req.name.includes(searchTerm) || req.email.includes(searchTerm)
  );

  return (
    <div className="flex flex-col min-h-screen bg-white" dir="rtl">
      <Header onNavigate={onNavigate} title="لوحة الإدارة" />

      <main className="flex flex-1 p-6 gap-6 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-72 flex-shrink-0 space-y-3">
          <div className="bg-gray-100 rounded-xl p-4 border border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">{userName.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold">{userName}</h3>
                <p className="text-gray-500 text-sm">مدير النظام</p>
              </div>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => handleChangePage('dashboard')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg font-medium transition-all ${
                  activePage === 'dashboard' ? 'bg-blue-400 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span>لوحة القيادة</span>
              </button>

              <button
                onClick={() => handleChangePage('addUser')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg font-medium transition-all ${
                  activePage === 'addUser' ? 'bg-blue-400 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
                }`}
              >
                <UserPlus className="w-5 h-5" />
                <span>إضافة مستخدم</span>
              </button>

              <button
                onClick={() => handleChangePage('subscribers')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg font-medium transition-all ${
                  activePage === 'subscribers' ? 'bg-blue-400 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>المشتركين</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 bg-gray-50 rounded-xl shadow-md border border-gray-200 overflow-hidden">
          
          {/* Dashboard */}
          {activePage === 'dashboard' && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    مرحباً {userName} 👋
                  </h2>
                  <p className="text-gray-500">إليك نظرة عامة على نشاط النظام اليوم</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { title: 'إجمالي الطلبات', value: requests.length, icon: Users, iconColor: 'text-blue-400', bg: 'bg-blue-100' },
                  { title: 'طلبات معلقة', value: requests.filter(r => r.status === 'معلق').length, icon: Clock, iconColor: 'text-yellow-400', bg: 'bg-yellow-100' },
                  { title: 'طلبات مكتملة', value: requests.filter(r => r.status === 'مكتمل').length, icon: CheckCircle, iconColor: 'text-green-400', bg: 'bg-green-100' },
                  { title: 'معدل الإنجاز', value: requests.length > 0 ? Math.round((requests.filter(r => r.status === 'مكتمل').length / requests.length) * 100) + '%' : '0%', icon: Activity, iconColor: 'text-blue-400', bg: 'bg-blue-100' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Search */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="البحث عن طلب..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-10 pl-4 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

              </div>

              {/* Requests Table */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-50 border-b border-gray-200">
                        <th className="text-right p-4 text-blue-400 font-semibold">الاسم</th>
                        <th className="text-right p-4 text-blue-400 font-semibold">البريد الإلكتروني</th>
                        <th className="text-right p-4 text-blue-400 font-semibold">التاريخ</th>
                        <th className="text-right p-4 text-blue-400 font-semibold">الحالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRequests.map((req) => (
                        <tr key={req.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                          <td className="p-4 text-gray-800 font-medium">{req.name}</td>
                          <td className="p-4 text-gray-600">{req.email}</td>
                          <td className="p-4 text-gray-600">{req.date}</td>
                          <td className="p-4">
                            <select
                              value={req.status}
                              onChange={(e) => handleStatusChange(req.id, e.target.value)}
                              className={`px-3 py-2 rounded-lg border font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                req.status === 'معلق' 
                                  ? 'bg-yellow-100 border-yellow-300 text-yellow-600' 
                                  : 'bg-green-100 border-green-300 text-green-600'
                              }`}
                            >
                              <option value="معلق">معلق</option>
                              <option value="مكتمل">مكتمل</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Add User */}
          {activePage === 'addUser' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">إضافة مستخدم جديد</h2>
              <p className="text-gray-500 mb-8">أدخل معلومات المستخدم الجديد</p>
              
              <div className="max-w-2xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: 'الاسم الأول', placeholder: 'محمد', type: 'text' },
                      { label: 'اسم العائلة', placeholder: 'علي', type: 'text' },
                    ].map((field, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full p-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    { label: 'البريد الإلكتروني', placeholder: 'mohamed@example.com', type: 'email' },
                    { label: 'رقم الهاتف', placeholder: '+966 5X XXX XXXX', type: 'tel' },
                    { label: 'كلمة المرور', placeholder: '••••••••', type: 'password' },
                  ].map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full p-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نوع المستخدم</label>
                    <select className="w-full p-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition">
                      <option value="user">مستخدم عادي</option>
                      <option value="admin">مدير</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-400 text-white py-4 rounded-lg font-bold hover:bg-blue-500 transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-5 h-5" />
                    إضافة المستخدم
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Subscribers */}
          {activePage === 'subscribers' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">معلومات المشتركين</h2>
              <p className="text-gray-500 mb-8">إدارة ومتابعة المشتركين في النظام</p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'إجمالي المشتركين', value: subscribersData.total, icon: Users, bg: 'bg-blue-100', color: 'text-blue-800' },
                  { label: 'المشتركين النشطين', value: subscribersData.active, icon: CheckCircle, bg: 'bg-green-100', color: 'text-green-800' },
                  { label: 'غير النشطين', value: subscribersData.inactive, icon: Activity, bg: 'bg-red-100', color: 'text-red-800' },
                  { label: 'جديد هذا الشهر', value: subscribersData.newThisMonth, icon: TrendingUp, bg: 'bg-blue-100', color: 'text-blue-800' },
                ].map((stat, idx) => (
                  <div key={idx} className={`p-6 rounded-xl shadow ${stat.bg} flex flex-col items-start`}>
                    <stat.icon className={`w-8 h-8 mb-2 ${stat.color}`} />
                    <p className={`text-sm mb-1 ${stat.color}/80`}>{stat.label}</p>
                    <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Plans */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">توزيع الخطط</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(subscribersData.plans).map(([plan, value], idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-500 text-sm mb-2">{plan === 'basic' ? 'الخطة الأساسية' : plan === 'premium' ? 'الخطة المميزة' : 'الخطة المؤسسية'}</p>
                      <p className="text-3xl font-bold text-gray-800">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Subscribers */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800">أحدث المشتركين</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-50 border-b border-gray-200">
                        <th className="text-right p-4 text-blue-400 font-semibold">الاسم</th>
                        <th className="text-right p-4 text-blue-400 font-semibold">البريد</th>
                        <th className="text-right p-4 text-blue-400 font-semibold">الخطة</th>
                        <th className="text-right p-4 text-blue-400 font-semibold">تاريخ الانضمام</th>
                        <th className="text-right p-4 text-blue-400 font-semibold">الحالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscribersData.recent.map((sub) => (
                        <tr key={sub.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                          <td className="p-4 text-gray-800 font-medium">{sub.name}</td>
                          <td className="p-4 text-gray-600">{sub.email}</td>
                          <td className="p-4 text-gray-600">{sub.plan}</td>
                          <td className="p-4 text-gray-600">{sub.joinDate}</td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              sub.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {sub.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPage;
