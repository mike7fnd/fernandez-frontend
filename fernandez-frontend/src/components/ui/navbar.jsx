import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../image/logo.png';
import homeIcon from '../../image/home.png'; // Replace with your home icon
import carsIcon from '../../image/cars.png'; // Replace with your cars icon
import ordersIcon from '../../image/orders.png'; // Replace with your orders icon
import contactsIcon from '../../image/contacts.png'; // Replace with your contacts icon

export default function Navbar() {
  const location = useLocation();
  const [isPulsing, setIsPulsing] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTap = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 500);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="glass bg-white/10 bg-glass-gradient border-b border-white/20 sticky top-0 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 sm:h-16">

            {/* Web Text Navigation */}
            <div className="flex space-x-4 sm:space-x-8">
              <Link
                to="/"
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-apple text-body font-medium transition-all duration-200 text-sm sm:text-base ${location.pathname === '/' ? 'text-apple-blue bg-apple-gray-100' : 'text-apple-gray-700 hover:text-apple-blue'}`}
              >
                Home
              </Link>
              <Link
                to="/cars"
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-apple text-body font-medium transition-all duration-200 text-sm sm:text-base ${location.pathname === '/cars' ? 'text-apple-blue bg-apple-gray-100' : 'text-apple-gray-700 hover:text-apple-blue'}`}
              >
                Cars
              </Link>
              <Link
                to="/order"
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-apple text-body font-medium transition-all duration-200 text-sm sm:text-base ${location.pathname === '/order' ? 'text-apple-blue bg-apple-gray-100' : 'text-apple-gray-700 hover:text-apple-blue'}`}
              >
                Order
              </Link>
              <Link
                to="/contacts"
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-apple text-body font-medium transition-all duration-200 text-sm sm:text-base ${location.pathname === '/contacts' ? 'text-apple-blue bg-apple-gray-100' : 'text-apple-gray-700 hover:text-apple-blue'}`}
              >
                Contact
              </Link>
            </div>
            {/* Burger Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="ml-4 p-2 rounded-apple hover:bg-apple-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-apple-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className={`md:hidden fixed floating-nav-safe left-1/2 transform -translate-x-1/2 glass bg-white/10 backdrop-blur-sm rounded-full shadow-floating-nav z-50 h-14 px-6 ${isPulsing ? 'animate-pulse' : ''}`}>
        <div className="flex items-center justify-center gap-4 h-full">
          <Link to="/" onClick={handleTap} className={`relative flex items-center justify-center p-2 rounded-full transition-all duration-200 ${location.pathname === '/' ? 'scale-110 animate-bounce-spring' : ''}`}>
            <img
              src={homeIcon}
              alt="Home Icon"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
            {location.pathname === '/' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full"></div>}
          </Link>
          <Link to="/cars" onClick={handleTap} className={`relative flex items-center justify-center p-2 rounded-full transition-all duration-200 ${location.pathname === '/cars' ? 'scale-110 animate-bounce-spring' : ''}`}>
            <img
              src={carsIcon}
              alt="Cars Icon"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
            {location.pathname === '/cars' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full"></div>}
          </Link>
          <Link to="/order" onClick={handleTap} className={`relative flex items-center justify-center p-2 rounded-full transition-all duration-200 ${location.pathname === '/order' ? 'scale-110 animate-bounce-spring' : ''}`}>
            <img
              src={ordersIcon}
              alt="Orders Icon"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
            {location.pathname === '/order' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full"></div>}
          </Link>
          <Link to="/contacts" onClick={handleTap} className={`relative flex items-center justify-center p-2 rounded-full transition-all duration-200 ${location.pathname === '/contacts' ? 'scale-110 animate-bounce-spring' : ''}`}>
            <img
              src={contactsIcon}
              alt="Contacts Icon"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
            {location.pathname === '/contacts' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full"></div>}
          </Link>
        </div>
      </nav>

      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed bottom-4 right-4 glass bg-white/10 backdrop-blur-sm rounded-full shadow-floating-nav z-50 h-14 w-14 flex items-center justify-center"
      >
        <svg className="w-6 h-6 text-apple-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          {/* Sidebar Content */}
          <div className="fixed top-0 right-0 h-full w-64 glass bg-white/10 backdrop-blur-md border-l border-white/20 z-50 transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="mb-6 p-2 rounded-apple hover:bg-apple-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-apple-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsSidebarOpen(false)}
                  className={`block px-4 py-2 rounded-apple text-body font-medium transition-all duration-200 ${location.pathname === '/' ? 'text-apple-blue bg-apple-gray-100' : 'text-apple-gray-700 hover:text-apple-blue'}`}
                >
                  Home
                </Link>
                <Link
                  to="/cars"
                  onClick={() => setIsSidebarOpen(false)}
                  className={`block px-4 py-2 rounded-apple text-body font-medium transition-all duration-200 ${location.pathname === '/cars' ? 'text-apple-blue bg-apple-gray-100' : 'text-apple-gray-700 hover:text-apple-blue'}`}
                >
                  Cars
                </Link>
                <Link
                  to="/order"
                  onClick={() => setIsSidebarOpen(false)}
                  className={`block px-4 py-2 rounded-apple text-body font-medium transition-all duration-200 ${location.pathname === '/order' ? 'text-apple-blue bg-apple-gray-100' : 'text-apple-gray-700 hover:text-apple-blue'}`}
                >
                  Order
                </Link>
                <Link
                  to="/contacts"
                  onClick={() => setIsSidebarOpen(false)}
                  className={`block px-4 py-2 rounded-apple text-body font-medium transition-all duration-200 ${location.pathname === '/contacts' ? 'text-apple-blue bg-apple-gray-100' : 'text-apple-gray-700 hover:text-apple-blue'}`}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
