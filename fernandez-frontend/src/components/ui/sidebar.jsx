import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../image/logo.png';
import homeIcon from '../../image/home.png';
import carsIcon from '../../image/cars.png';
import ordersIcon from '../../image/orders.png';
import contactsIcon from '../../image/contacts.png';

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white/10 backdrop-blur-md border-r border-white/20 z-40 hidden lg:block">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center p-4 border-b border-white/20">
          <img
            src={logo}
            alt="FCars Logo"
            className="h-16 w-auto object-contain"
            loading="lazy"
          />
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`flex items-center px-4 py-3 rounded-apple text-body font-medium transition-all duration-200 ${location.pathname === '/'
                    ? 'text-apple-blue bg-apple-gray-100'
                    : 'text-apple-gray-700 hover:text-apple-blue hover:bg-apple-gray-50'
                  }`}
              >
                <img
                  src={homeIcon}
                  alt="Home Icon"
                  className="h-5 w-5 mr-3"
                  loading="lazy"
                />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cars"
                className={`flex items-center px-4 py-3 rounded-apple text-body font-medium transition-all duration-200 ${location.pathname === '/cars'
                    ? 'text-apple-blue bg-apple-gray-100'
                    : 'text-apple-gray-700 hover:text-apple-blue hover:bg-apple-gray-50'
                  }`}
              >
                <img
                  src={carsIcon}
                  alt="Cars Icon"
                  className="h-5 w-5 mr-3"
                  loading="lazy"
                />
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className={`flex items-center px-4 py-3 rounded-apple text-body font-medium transition-all duration-200 ${location.pathname === '/order'
                    ? 'text-apple-blue bg-apple-gray-100'
                    : 'text-apple-gray-700 hover:text-apple-blue hover:bg-apple-gray-50'
                  }`}
              >
                <img
                  src={ordersIcon}
                  alt="Orders Icon"
                  className="h-5 w-5 mr-3"
                  loading="lazy"
                />
                Order
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className={`flex items-center px-4 py-3 rounded-apple text-body font-medium transition-all duration-200 ${location.pathname === '/contacts'
                    ? 'text-apple-blue bg-apple-gray-100'
                    : 'text-apple-gray-700 hover:text-apple-blue hover:bg-apple-gray-50'
                  }`}
              >
                <img
                  src={contactsIcon}
                  alt="Contacts Icon"
                  className="h-5 w-5 mr-3"
                  loading="lazy"
                />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
