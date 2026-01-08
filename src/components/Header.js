import React from 'react';

const Header = ({ onNavigate }) => {
  return (
    <nav className="bg-[#0c1f40] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate('/home')}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
