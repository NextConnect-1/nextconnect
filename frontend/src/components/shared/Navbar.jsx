import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Or use emoji instead

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'About Us', path: '/aboutUs' },
    { label: 'Get in Touch', path: '/getInTouch' },
    { label: 'Freelancer Marketplace', path: '/freelanceMarketPlace' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className='w-full border-b'>
      <div className='px-5 py-3 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center text-xl font-bold'>
          <h1>NEXTCONNECT</h1>
          <span className='text-blue-700'>HUB</span>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-3'>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className={`px-3 cursor-pointer py-1 rounded font-medium ${
                location.pathname === item.path
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-100 text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className='flex flex-col px-5 pb-4 gap-2 md:hidden'>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className={`text-left px-3 py-2 rounded font-medium ${
                location.pathname === item.path
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-100 text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
