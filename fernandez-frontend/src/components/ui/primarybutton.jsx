import React from 'react'

export default function PrimaryButton({ children, onClick, className = '' }) {
  return (
    <button
      className={`bg-[#1A2E44] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-sm sm:text-base lg:text-base active:bg-white active:text-[#1A2E44] active:scale-95 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
