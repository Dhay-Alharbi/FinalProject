import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { loginUser, registerUser } from './api/auth';

const PAGES = {
  HOME: 'home',
  LOGIN: 'login',
  SIGNUP: 'signup',
  ADMIN: 'admin',
  USER: 'user',
};

function App() {
  const [page, setPage] = useState(PAGES.HOME);
  const [user, setUser] = useState(null);

  const handleNavigate = (targetPage) => {
    setPage(targetPage);
  };

  const handleLogin = async (email, password) => {
    const result = await loginUser(email, password);
    if (result.success) {
      setUser(result.user);
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));

      // التوجيه حسب الدور
      if (result.user.role === 'admin') {
        setPage(PAGES.ADMIN);
      } else {
        setPage(PAGES.USER);
      }
    }
    return result;
  };

  const handleSignUp = async (formData) => {
    const result = await registerUser(formData);
    if (result.success) {
      setPage(PAGES.LOGIN);
    }
    return result;
  };

  return (
    <>
      {page === PAGES.HOME && <HomePage onNavigate={handleNavigate} />}
      {page === PAGES.ADMIN && <AdminPage userName={user?.name} onNavigate={handleNavigate} />}
      {page === PAGES.USER && <UserPage userName={user?.name} onNavigate={handleNavigate} />}
      {page === PAGES.LOGIN && <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />}
      {page === PAGES.SIGNUP && <SignUpPage onSignUp={handleSignUp} onNavigate={handleNavigate} />}
    </>
  );
}

export default App;
