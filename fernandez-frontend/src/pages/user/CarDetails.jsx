import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/ui/navbar';

export default function CarDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  if (!car) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-system-gradient flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Car not found</h1>
            <button
              onClick={() => navigate('/cars')}
              className="bg-[#1A2E44] text-white px-6 py-3 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 transition-all duration-300 ease-out font-sf-pro font-semibold"
            >
              Back to Cars
            </button>
          </div>
        </div>
      </>
    );
  }

  const addToCart = () => {
    // Add to cart logic (similar to listing page)
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = existingCart.find(item => item.id === car.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...car, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert(`${car.title} added to cart!`);
  };

  const buyNow = () => {
    // Navigate to order page with this car
    navigate('/order', { state: { cart: [{ ...car, quantity: 1 }] } });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-system-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/cars')}
            className="mb-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-sf-pro font-medium"
          >
            ← Back to Cars
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-apple p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Car Image */}
              <div className="space-y-4">
                <img
                  src={car.image || "https://images.unsplash.com/photo-1608889172483-70731f5f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80"}
                  alt={car.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>

              {/* Car Details */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-sf-pro font-bold text-gray-900 dark:text-white mb-2">{car.title}</h1>
                  <p className="text-lg sm:text-xl font-sf-pro font-semibold text-blue-500 dark:text-blue-400">${car.price.toLocaleString()}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-sf-pro font-medium text-gray-700 dark:text-gray-300">Type:</span>
                    <span className="text-gray-900 dark:text-white">{car.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-sf-pro font-medium text-gray-700 dark:text-gray-300">Fuel:</span>
                    <span className="text-gray-900 dark:text-white">{car.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-sf-pro font-medium text-gray-700 dark:text-gray-300">MPG:</span>
                    <span className="text-gray-900 dark:text-white">{car.mpg}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-sf-pro font-medium text-gray-700 dark:text-gray-300">Seats:</span>
                    <span className="text-gray-900 dark:text-white">{car.seats}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-sf-pro font-medium text-gray-700 dark:text-gray-300">Availability:</span>
                    <span className={`font-medium ${car.available ? 'text-green-600' : 'text-red-600'}`}>
                      {car.available ? 'Available' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-sf-pro font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {car.description || "Experience the perfect blend of performance and luxury with this exceptional vehicle. Featuring cutting-edge technology, superior comfort, and unmatched reliability, this car is designed to exceed your expectations on every drive."}
                  </p>
                </div>

                {car.features && car.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-sf-pro font-semibold text-gray-900 dark:text-white mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {car.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={addToCart}
                    disabled={!car.available}
                    className="flex-1 bg-gray-500 text-white px-4 py-3 rounded-full shadow-lg hover:ring-2 ring-white hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-medium text-sm sm:text-base active:bg-white active:text-gray-500 active:scale-95"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={buyNow}
                    disabled={!car.available}
                    className="flex-1 bg-[#1A2E44] text-white px-4 py-3 rounded-full shadow-lg hover:ring-2 ring-white hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-medium text-sm sm:text-base active:bg-white active:text-[#1A2E44] active:scale-95"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
