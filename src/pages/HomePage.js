import React from 'react';
import { Camera, TrendingUp, MapPin, Shield, BarChart3, Zap } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              {/* Replace this image src with your actual logo path */}
              <img 
                src="/logo.png" 
                alt="Masool Logo" 
                className="h-12"
                onError={(e) => {
                  // Fallback if logo image not found
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback logo if image doesn't exist */}
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('signin')}
                className="px-6 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Sign Up
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-md hover:shadow-lg transition-all"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Business
            <span className="text-blue-600"> Intelligence System</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with our cutting-edge AI system. Monitor multiple branches, 
            analyze video feeds in real-time, and gain actionable insights to optimize performance.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition-all text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Camera className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Smart Camera Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor and manage cameras across all branches with AI-powered analytics. 
              Real-time alerts and intelligent detection systems keep your business secure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-Time Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Get instant insights and comprehensive reports to make informed business decisions. 
              Track KPIs and monitor performance metrics in real-time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <MapPin className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Multi-Branch Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Seamlessly manage operations across multiple business locations. 
              Centralized control with branch-specific insights and reporting.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Advanced Security</h3>
            <p className="text-gray-600 leading-relaxed">
              Enterprise-grade security with role-based access control. 
              Your data is encrypted and protected with industry-leading standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Detailed Reports</h3>
            <p className="text-gray-600 leading-relaxed">
              Generate comprehensive reports with customizable dashboards. 
              Export data in multiple formats for further analysis and presentations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">AI-Powered Insights</h3>
            <p className="text-gray-600 leading-relaxed">
              Leverage machine learning algorithms to detect patterns. 
              Predictive analytics help you stay ahead of potential issues.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us to better understand your business, improve it, and increase your income.          </p>
          <button
            onClick={() => onNavigate('signin')} //Subscriptions page
            className="px-10 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-bold shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Subscriptions page
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2026 All rights reserved to the best group: Bador, Dhay, Lama and Saleh</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;