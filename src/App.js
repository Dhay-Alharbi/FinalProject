import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';

function App() {
  const [page, setPage] = useState('home'); // current page
  const [userName, setUserName] = useState('ضي'); // example username

  const handleNavigate = (targetPage) => {
    setPage(targetPage);
  };

  // Example login/signup functions
  const handleLogin = async (email, password) => {
    // Replace with real login logic
    if (email === 'admin@example.com' && password === '123456') {
      return { success: true };
    }
    return { success: false };
  };

  const handleSignIn = async (formData) => {
    // Replace with real signup logic
    return { success: true };
  };

  return (
    <>
      {page === 'home' && <HomePage onNavigate={handleNavigate} />}
      {page === 'admin' && <AdminPage userName={userName} onNavigate={handleNavigate} />}
      {page === 'login' && <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />}
      {page === 'signin' && <SignInPage onSignIn={handleSignIn} onNavigate={handleNavigate} />}
    </>
  );
}

export default App;
