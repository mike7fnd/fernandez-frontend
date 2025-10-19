import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../image/logo.png';
import homeIcon from '../../image/home.png'; // Replace with your home icon
import carsIcon from '../../image/cars.png'; // Replace with your cars icon
import ordersIcon from '../../image/orders.png'; // Replace with your orders icon
import contactsIcon from '../../image/contacts.png'; // Replace with your contacts icon

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="glass bg-white/10 bg-glass-gradient border-b border-white/20 sticky top-0 z-50">
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
          {/* Mobile Icon Navigation */}
          <div className="md:hidden flex justify-center items-center space-x-3">
            <Link to="/" className={`p-1 rounded-apple transition-all duration-200 ${location.pathname === '/' ? 'bg-apple-gray-100' : ''}`}>
              <img
                src={homeIcon}
                alt="Home Icon"
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
            </Link>
            <Link to="/cars" className={`p-1 rounded-apple transition-all duration-200 ${location.pathname === '/cars' ? 'bg-apple-gray-100' : ''}`}>
              <img
                src={carsIcon}
                alt="Cars Icon"
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
            </Link>
            <Link to="/order" className={`p-1 rounded-apple transition-all duration-200 ${location.pathname === '/order' ? 'bg-apple-gray-100' : ''}`}>
              <img
                src={ordersIcon}
                alt="Orders Icon"
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
            </Link>
            <Link to="/contacts" className={`p-1 rounded-apple transition-all duration-200 ${location.pathname === '/contacts' ? 'bg-apple-gray-100' : ''}`}>
              <img
                src={contactsIcon}
                alt="Contacts Icon"
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
            </Link>
          </div>
          {/* Web Text Navigation */}
          <div className="hidden md:flex space-x-4 sm:space-x-8">
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
        </div>
      </div>
    </nav>
  );
}
