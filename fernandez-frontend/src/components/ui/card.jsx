import React from 'react';

export default function Card({ car, onAddToCart }) {
  return (
    <div className="glass bg-white/90 dark:bg-gray-900/75 backdrop-blur-xl rounded-2xl shadow-apple hover:shadow-apple-hover hover:scale-105 transition-all duration-200 ease-out cursor-pointer group overflow-hidden">
      <img
        src={car.image || "https://images.unsplash.com/photo-1608889172483-70731f5f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80"}
        alt={car.title}
        className="w-full h-36 sm:h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-sf-pro font-semibold text-gray-900 dark:text-white">{car.title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{car.info}</p>
        <div className="flex flex-col gap-3 sm:gap-4">
          <span className="text-xl sm:text-2xl font-sf-pro font-bold text-blue-500 dark:text-blue-400">${car.price.toLocaleString()}</span>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => onAddToCart(car)}
              className="bg-gray-500 text-white px-3 sm:px-4 py-2 rounded-full shadow-lg hover:ring-2 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-medium text-xs sm:text-sm active:bg-white active:text-gray-500 active:scale-95"
            >
              Add to Cart
            </button>
            <button className="bg-[#1A2E44] text-white px-3 sm:px-4 py-2 rounded-full shadow-lg hover:ring-2 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-medium text-xs sm:text-sm active:bg-white active:text-[#1A2E44] active:scale-95">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
