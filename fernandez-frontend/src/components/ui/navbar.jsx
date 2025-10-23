import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../image/logo.png';
import homeIcon from '../../image/home.png'; // Replace with your home icon
import carsIcon from '../../image/cars.png'; // Replace with your cars icon
import ordersIcon from '../../image/orders.png'; // Replace with your orders icon
import contactsIcon from '../../image/contacts.png'; // Replace with your contacts icon

export default function Navbar({ onToggleSidebar }) {
  const location = useLocation();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="glass bg-white/10 bg-glass-gradient border-b border-white/20 sticky top-0 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 sm:h-16">
            <Link to="/" className="flex items-center p-1">
              <img
                src={logo}
                alt="FCars Logo"
                className="h-20 sm:h-28 w-auto object-contain"
                loading="lazy"
              />
            </Link>
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
            {/* Sidebar Toggle Button */}
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-apple hover:bg-apple-gray-50 transition-colors"
            >
              <svg
                className="w-6 h-6 text-apple-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-white/20 z-50">
        <div className="flex justify-around items-center h-16 px-4">
          <Link to="/" className={`flex flex-col items-center p-2 rounded-apple transition-all duration-200 ${location.pathname === '/' ? 'bg-apple-gray-100' : ''}`}>
            <img
              src={homeIcon}
              alt="Home Icon"
              className="h-6 w-6 object-contain mb-1"
              loading="lazy"
            />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link to="/cars" className={`flex flex-col items-center p-2 rounded-apple transition-all duration-200 ${location.pathname === '/cars' ? 'bg-apple-gray-100' : ''}`}>
            <img
              src={carsIcon}
              alt="Cars Icon"
              className="h-6 w-6 object-contain mb-1"
              loading="lazy"
            />
            <span className="text-xs font-medium">Cars</span>
          </Link>
          <Link to="/order" className={`flex flex-col items-center p-2 rounded-apple transition-all duration-200 ${location.pathname === '/order' ? 'bg-apple-gray-100' : ''}`}>
            <img
              src={ordersIcon}
              alt="Orders Icon"
              className="h-6 w-6 object-contain mb-1"
              loading="lazy"
            />
            <span className="text-xs font-medium">Order</span>
          </Link>
          <Link to="/contacts" className={`flex flex-col items-center p-2 rounded-apple transition-all duration-200 ${location.pathname === '/contacts' ? 'bg-apple-gray-100' : ''}`}>
            <img
              src={contactsIcon}
              alt="Contacts Icon"
              className="h-6 w-6 object-contain mb-1"
              loading="lazy"
            />
            <span className="text-xs font-medium">Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
