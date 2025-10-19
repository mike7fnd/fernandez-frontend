import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/ui/navbar';
import Card from '../../components/ui/card';
import PrimaryButton from '../../components/ui/primarybutton';

const initialCars = [
  {
    id: 1,
    title: 'Luxury Sedan',
    info: '30 MPG • Electric • 4 seats',
    price: 89000,
    image: 'https://thumbs.dreamstime.com/b/luxury-sedan-car-isolated-white-background-d-render-luxury-sedan-car-isolated-119431519.jpg',
    type: 'Sedan',
    fuel: 'Electric',
    mpg: 30,
    seats: 4,
    available: true,
    featured: true
  },
  {
    id: 2,
    title: 'SUV Adventure',
    info: '25 MPG • Hybrid • 7 seats',
    price: 62000,
    image: 'https://img.freepik.com/premium-photo/white-suv-with-black-white-design-is-parked-white-background_1167344-10697.jpg?w=740',
    type: 'SUV',
    fuel: 'Hybrid',
    mpg: 25,
    seats: 7,
    available: true,
    featured: false
  },
  {
    id: 3,
    title: 'Sports Coupe',
    info: '22 MPG • Gasoline • 2 seats',
    price: 98000,
    image: 'https://png.pngtree.com/png-vector/20231224/ourlarge/pngtree-sports-coupe-white-png-image_11231924.png',
    type: 'Coupe',
    fuel: 'Gasoline',
    mpg: 22,
    seats: 2,
    available: true,
    featured: true
  },
  {
    id: 4,
    title: 'Compact Hatchback',
    info: '35 MPG • Electric • 4 seats',
    price: 34000,
    image: 'https://tse3.mm.bing.net/th/id/OIP.bwmhM6DjZCK31G9FwUAQwQHaGw?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    type: 'Hatchback',
    fuel: 'Electric',
    mpg: 35,
    seats: 4,
    available: true,
    featured: false
  },
  {
    id: 5,
    title: 'Family Van',
    info: '20 MPG • Gasoline • 8 seats',
    price: 47000,
    image: 'https://as1.ftcdn.net/v2/jpg/02/80/79/00/1000_F_280790035_uxtUj9jweZBMsTgF8RfZOP0uSKiCwCDh.jpg0',
    type: 'Van',
    fuel: 'Gasoline',
    mpg: 20,
    seats: 8,
    available: false,
    featured: false
  },
  {
    id: 6,
    title: 'Electric SUV',
    info: '28 MPG • Electric • 5 seats',
    price: 78000,
    image: 'https://img.freepik.com/premium-photo/white-family-innovative-electric-suv-car-white-background-3d-rendering_1254992-17272.jpg',
    type: 'SUV',
    fuel: 'Electric',
    mpg: 28,
    seats: 5,
    available: true,
    featured: true
  },
  {
    id: 7,
    title: 'Luxury Coupe',
    info: '24 MPG • Hybrid • 4 seats',
    price: 110000,
    image: 'https://tse3.mm.bing.net/th/id/OIP.FkU9dwwEAe4EwHPSwPzqRgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=30',
    type: 'Coupe',
    fuel: 'Hybrid',
    mpg: 24,
    seats: 4,
    available: true,
    featured: false
  },
  {
    id: 8,
    title: 'Compact Sedan',
    info: '32 MPG • Gasoline • 5 seats',
    price: 28000,
    image: 'https://tse2.mm.bing.net/th/id/OIP.0egqTZldF0QF973oLHeIZAHaEJ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    type: 'Sedan',
    fuel: 'Gasoline',
    mpg: 32,
    seats: 5,
    available: true,
    featured: false
  },
  {
    id: 9,
    title: 'Premium SUV',
    info: '26 MPG • Hybrid • 6 seats',
    price: 92000,
    image: 'https://th.bing.com/th/id/OIP.IPN43YU4JfejkGXH6ou1fAHaEJ?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    type: 'SUV',
    fuel: 'Hybrid',
    mpg: 26,
    seats: 6,
    available: true,
    featured: true
  },
  {
    id: 10,
    title: 'Sports Convertible',
    info: '21 MPG • Gasoline • 2 seats',
    price: 125000,
    image: 'https://tse3.mm.bing.net/th/id/OIP.A8OIZothkVQV4HQ2ddJQiwHaF7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    type: 'Convertible',
    fuel: 'Gasoline',
    mpg: 21,
    seats: 2,
    available: false,
    featured: false
  },
  {
    id: 11,
    title: 'Electric Hatchback',
    info: '38 MPG • Electric • 4 seats',
    price: 36000,
    image: 'https://tse2.mm.bing.net/th/id/OIP.ReQ9-k6RSP8grqLMDdRJ_wHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    type: 'Hatchback',
    fuel: 'Electric',
    mpg: 38,
    seats: 4,
    available: true,
    featured: false
  },
  {
    id: 12,
    title: 'Family Minivan',
    info: '23 MPG • Gasoline • 7 seats',
    price: 42000,
    image: 'https://tse3.mm.bing.net/th/id/OIP.uSsJXpdP9p-acmR9O0xRrwHaDt?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    type: 'Van',
    fuel: 'Gasoline',
    mpg: 23,
    seats: 7,
    available: true,
    featured: false
  },
  {
    id: 13,
    title: 'Off-Road Pickup',
    info: '19 MPG • Diesel • 5 seats',
    price: 56000,
    image: 'https://thumbs.dreamstime.com/b/modern-off-road-pickup-truck-white-background-illustration-modern-off-road-pickup-truck-white-background-273938326.jpg',
    type: 'Pickup',
    fuel: 'Diesel',
    mpg: 19,
    seats: 5,
    available: true,
    featured: false
  },
  {
    id: 14,
    title: 'Electric Crossover',
    info: '33 MPG • Electric • 5 seats',
    price: 69000,
    image: 'https://img.freepik.com/premium-photo/crossover-electric-car-isolated-white-background-generative-ai_791958-1860.jpg',
    type: 'Crossover',
    fuel: 'Electric',
    mpg: 33,
    seats: 5,
    available: true,
    featured: true
  },
  {
    id: 15,
    title: 'City Microcar',
    info: '40 MPG • Electric • 2 seats',
    price: 21000,
    image: 'https://c8.alamy.com/comp/2FM9M9J/small-city-car-isolated-on-white-background-2FM9M9J.jpg',
    type: 'Micro',
    fuel: 'Electric',
    mpg: 40,
    seats: 2,
    available: true,
    featured: false
  },
  {
    id: 16,
    title: 'Luxury Electric Sedan',
    info: '31 MPG • Electric • 5 seats',
    price: 98000,
    image: 'https://tse2.mm.bing.net/th/id/OIP.J4YYWLOuevGO6aQ6_xzKtQHaEJ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=30',
    type: 'Sedan',
    fuel: 'Electric',
    mpg: 31,
    seats: 5,
    available: true,
    featured: true
  },
  {
    id: 17,
    title: 'Hybrid Compact SUV',
    info: '34 MPG • Hybrid • 5 seats',
    price: 42000,
    image: 'https://tse4.mm.bing.net/th/id/OIP.VYM257t8PGSccQfZZYvmFwHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    type: 'SUV',
    fuel: 'Hybrid',
    mpg: 34,
    seats: 5,
    available: true,
    featured: false
  },
  {
    id: 18,
    title: 'Performance Sedan',
    info: '23 MPG • Gasoline • 5 seats',
    price: 72000,
    image: 'https://tse4.mm.bing.net/th/id/OIP.Lt9PNMCAMEwKApYaRi2CbgHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    type: 'Sedan',
    fuel: 'Gasoline',
    mpg: 23,
    seats: 5,
    available: true,
    featured: true
  },
  {
    id: 19,
    title: 'Luxury Electric SUV',
    info: '29 MPG • Electric • 6 seats',
    price: 115000,
    image: 'https://img.freepik.com/premium-photo/photo-electric-luxury-suv-isolated-white-background_935822-420.jpg?w=2000',
    type: 'SUV',
    fuel: 'Electric',
    mpg: 29,
    seats: 6,
    available: true,
    featured: true
  },
  {
    id: 20,
    title: 'Supercar',
    info: '16 MPG • Gasoline • 2 seats',
    price: 260000,
    image: 'https://thumbs.dreamstime.com/b/experience-epitome-automotive-innovation-our-animated-futuristic-supercar-set-against-pristine-white-background-326107647.jpg',
    type: 'Coupe',
    fuel: 'Gasoline',
    mpg: 16,
    seats: 2,
    available: true,
    featured: true
  }
];


export default function Listing() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [notification, setNotification] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    type: '',
    fuel: '',
    minPrice: '',
    maxPrice: '',
    minMPG: '',
    maxMPG: ''
  });
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const carsPerPage = 12;
  const navigate = useNavigate();

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Filter and sort cars
  const filtered = initialCars.filter((c) => {
    const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.info.toLowerCase().includes(query.toLowerCase());
    const matchesType = !filters.type || c.type === filters.type;
    const matchesFuel = !filters.fuel || c.fuel === filters.fuel;
    const matchesPrice = (!filters.minPrice || c.price >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || c.price <= parseInt(filters.maxPrice));
    const matchesMPG = (!filters.minMPG || c.mpg >= parseInt(filters.minMPG)) &&
      (!filters.maxMPG || c.mpg <= parseInt(filters.maxMPG));

    return matchesQuery && matchesType && matchesFuel && matchesPrice && matchesMPG;
  });

  // Sort cars
  const sortedCars = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'mpg':
        return b.mpg - a.mpg;
      case 'newest':
        return b.id - a.id;
      case 'featured':
      default:
        return b.featured - a.featured || a.price - b.price;
    }
  });

  // Calculate total pages and slice cars for the current page
  const totalPages = Math.ceil(sortedCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const paginatedCars = sortedCars.slice(startIndex, startIndex + carsPerPage);

  // Handle page navigation
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  // Add to cart function
  const addToCart = (car) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === car.id);
      if (existingItem) {
        // If item already in cart, increase quantity
        return prevCart.map((item) =>
          item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...car, quantity: 1 }];
      }
    });
    // Show notification
    setNotification(`${car.title} added to cart!`);
    setTimeout(() => setNotification(''), 3000); // Hide after 3 seconds
  };

  // Navigate to order page with cart data
  const goToOrder = () => {
    navigate('/order', { state: { cart } });
  };

  return (
    <>
      <Navbar />
      {/* Notification */}
      {notification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg z-50 font-sf-pro font-medium animate-bounce text-sm sm:text-base">
          {notification}
        </div>
      )}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">

        <section className="bg-white rounded-2xl shadow-apple p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <input
                aria-label="search-cars"
                placeholder="Search cars..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-48 sm:w-64 md:w-80 px-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-sf-pro text-gray-900 placeholder-gray-500 text-sm sm:text-base"
              />
            </div>
            <div className="relative">
              <button
                onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 flex items-center justify-center"
              >
                <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isFilterExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isFilterExpanded && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-xl shadow-lg z-50 min-w-[300px] p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-1">Car Type</label>
                      <select
                        value={filters.type}
                        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-sf-pro text-gray-900 text-sm"
                      >
                        <option value="">All Types</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Van">Van</option>
                        <option value="Convertible">Convertible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-1">Fuel Type</label>
                      <select
                        value={filters.fuel}
                        onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-sf-pro text-gray-900 text-sm"
                      >
                        <option value="">All Fuels</option>
                        <option value="Electric">Electric</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Gasoline">Gasoline</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-1">Price Range</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          value={filters.minPrice}
                          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                          className="w-full px-2 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-sf-pro text-gray-900 placeholder-gray-500 text-sm"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={filters.maxPrice}
                          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                          className="w-full px-2 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-sf-pro text-gray-900 placeholder-gray-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <PrimaryButton onClick={() => {
                        setQuery('');
                        setFilters({ type: '', fuel: '', minPrice: '', maxPrice: '', minMPG: '', maxMPG: '' });
                        setSortBy('featured');
                        setIsFilterExpanded(false);
                      }}>
                        Clear All Filters
                      </PrimaryButton>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-2">Sort by</label>
                      <div className="space-y-1">
                        <button
                          onClick={() => { setSortBy('featured'); setIsFilterExpanded(false); }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-xl font-sf-pro text-sm"
                        >
                          Featured
                        </button>
                        <button
                          onClick={() => { setSortBy('price-low'); setIsFilterExpanded(false); }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-xl font-sf-pro text-sm"
                        >
                          Price: Low to High
                        </button>
                        <button
                          onClick={() => { setSortBy('price-high'); setIsFilterExpanded(false); }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-xl font-sf-pro text-sm"
                        >
                          Price: High to Low
                        </button>
                        <button
                          onClick={() => { setSortBy('mpg'); setIsFilterExpanded(false); }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-xl font-sf-pro text-sm"
                        >
                          Best MPG
                        </button>
                        <button
                          onClick={() => { setSortBy('newest'); setIsFilterExpanded(false); }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-xl font-sf-pro text-sm"
                        >
                          Newest
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Popular Picks Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-apple p-4 sm:p-6 sticky top-4">
              <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 mb-3 sm:mb-4">Popular Picks</h3>
              <div className="space-y-3 sm:space-y-4">
                {initialCars.filter(car => car.featured).slice(0, 3).map((car) => (
                  <div key={car.id} className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded-xl">
                    <img
                      src={car.image}
                      alt={car.title}
                      className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-sf-pro font-medium text-gray-900">{car.title}</h4>
                      <p className="text-xs text-gray-600">${car.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <section id="listing" className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {paginatedCars.length === 0 ? (
                <p className="col-span-full text-center text-gray-500 py-6 sm:py-8 font-sf-pro text-sm sm:text-base">No cars match your search.</p>
              ) : (
                paginatedCars.map((car) => (
                  <Card key={car.id} car={car} onAddToCart={addToCart} />
                ))
              )}
            </section>

            {/* Pagination Section */}
            {totalPages > 1 && (
              <section className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 sm:px-4 py-2 bg-[#1A2E44] text-white rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-sm sm:text-base active:bg-white active:text-[#1A2E44] active:scale-95"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => goToPage(index + 1)}
                    className={`px-3 sm:px-4 py-2 rounded-full font-sf-pro font-medium transition-all duration-200 text-sm sm:text-base ${currentPage === index + 1
                      ? 'bg-[#1A2E44] text-white shadow-lg hover:ring-4 ring-white hover:scale-105'
                      : 'bg-white text-gray-900 border border-gray-300 hover:bg-[#1A2E44]/10 hover:scale-102'
                      } focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 active:scale-96`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 sm:px-4 py-2 bg-[#1A2E44] text-white rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-sm sm:text-base active:bg-white active:text-[#1A2E44] active:scale-95"
                >
                  Next
                </button>
              </section>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
