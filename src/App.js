
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import BranchesPage from './pages/BranchesPage';
import CamerasPage from './pages/CamerasPage';
import ReportsPage from './pages/ReportsPage';
import UploadVideoPage from './pages/UploadVideoPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [branches, setBranches] = useState([]);
  const [cameras, setCameras] = useState([]);

  const API_URL = 'http://localhost:5000/api';

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      loadData();
    }
  }, []);

  const loadData = async () => {
    try {
      const branchesRes = await fetch(`${API_URL}/branches`);
      if (branchesRes.ok) {
        const branchesData = await branchesRes.json();
        setBranches(branchesData);
      }

      const camerasRes = await fetch(`${API_URL}/cameras`);
      if (camerasRes.ok) {
        const camerasData = await camerasRes.json();
        setCameras(camerasData);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleSignIn = async (formData) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        await loadData();
        setCurrentPage('dashboard');
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: 'Registration failed' };
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        await loadData();
        setCurrentPage('dashboard');
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setBranches([]);
    setCameras([]);
    setCurrentPage('home');
  };

  const addBranch = async (branchData) => {
    try {
      const response = await fetch(`${API_URL}/branches`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(branchData)
      });

      if (response.ok) {
        const newBranch = await response.json();
        setBranches([...branches, newBranch]);
        return { success: true };
      }
      return { success: false, error: 'Failed to add branch' };
    } catch (error) {
      return { success: false, error: 'Failed to add branch' };
    }
  };

  const addCamera = async (cameraData) => {
    try {
      const response = await fetch(`${API_URL}/cameras`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cameraData)
      });

      if (response.ok) {
        const newCamera = await response.json();
        setCameras([...cameras, newCamera]);
        return { success: true };
      }
      return { success: false, error: 'Failed to add camera' };
    } catch (error) {
      return { success: false, error: 'Failed to add camera' };
    }
  };

  const uploadVideo = async (videoData) => {
    try {
      const response = await fetch(`${API_URL}/videos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(videoData)
      });

      if (response.ok) {
        return { success: true };
      }
      return { success: false, error: 'Failed to upload video' };
    } catch (error) {
      return { success: false, error: 'Failed to upload video' };
    }
  };

  return (
    <div className="app">
      {!user && currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {!user && currentPage === 'signin' && <SignInPage onSignIn={handleSignIn} onNavigate={setCurrentPage} />}
      {!user && currentPage === 'login' && <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />}
      {user && currentPage === 'dashboard' && <DashboardPage user={user} branches={branches} cameras={cameras} onNavigate={setCurrentPage} onLogout={handleLogout} />}
      {user && currentPage === 'branches' && user.role === 'admin' && <BranchesPage user={user} branches={branches} onAddBranch={addBranch} onNavigate={setCurrentPage} onLogout={handleLogout} />}
      {user && currentPage === 'cameras' && user.role === 'admin' && <CamerasPage user={user} branches={branches} cameras={cameras} onAddCamera={addCamera} onNavigate={setCurrentPage} onLogout={handleLogout} />}
      {user && currentPage === 'reports' && <ReportsPage user={user} branches={branches} cameras={cameras} onNavigate={setCurrentPage} onLogout={handleLogout} />}
      {user && currentPage === 'videos' && <UploadVideoPage user={user} branches={branches} cameras={cameras} onUploadVideo={uploadVideo} onNavigate={setCurrentPage} onLogout={handleLogout} />}
    </div>
  );
};

export default App;