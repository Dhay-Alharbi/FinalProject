import React from 'react';

const UserPage = ({ userName, onNavigate }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">صفحة المستخدم</h1>
      <p>مرحباً {userName || 'User'}!</p>
      <button
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('home')}
      >
        العودة للرئيسية
      </button>
    </div>
  );
};

export default UserPage;
