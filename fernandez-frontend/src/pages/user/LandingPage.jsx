import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/ui/navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  const images = [
    './1.jpg',
    './2.jpg',
    './3.jpg',
    './4.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-system-gradient min-h-screen w-full relative">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 sm:py-20 md:py-32 gap-8 sm:gap-12 relative z-10 animate-on-scroll opacity-0 transition-all duration-1000">
        <div className="w-full">
          <img
            src="./car2.png"
            alt="Premium luxury car showcase"
            className="rounded-2xl shadow-apple w-full h-48 sm:h-64 md:h-96 lg:h-[500px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-full text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sf-pro font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Wanna Ride?{" "}
            <span className="bg-gradient-to-r from-[#536976] to-[#292e49] bg-clip-text text-transparent">
              I Have a Classy Car for you
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
            Choose from our premium selection of luxury cars, SUVs, and sports models. Order online in minutes and drive your dream car tomorrow.
          </p>
 <div className="flex flex-row gap-2 sm:gap-6 justify-center">
  <button
    onClick={() => navigate('/cars')}
    className="bg-[#1A2E44] text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-xs sm:text-base active:bg-white active:text-[#1A2E44] active:scale-95"
  >
    Start Your Order →
  </button>
  <button
    onClick={() => navigate('/cars')}
    className="bg-[#4B5563] text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-xs sm:text-base active:bg-white active:text-[#4B5563] active:scale-95"
  >
    Browse Cars
  </button>
        </div>
      </div>
    </section>

      <section className="w-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 sm:py-20 md:py-32 gap-8 sm:gap-12 relative z-10 animate-on-scroll opacity-0 transition-all duration-1000">
        {/* First image */}
        <div className="w-full">
          <img
            src="https://wallpapercave.com/wp/wc1764107.jpg"
            alt="Premium luxury car showcase"
            className="rounded-2xl shadow-apple w-full h-48 sm:h-64 md:h-96 lg:h-[500px] object-cover"
            loading="lazy"
          />
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="w-full py-16 sm:py-20 md:py-24 bg-system-gradient relative z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-200">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-sf-pro font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">Why Order with Us</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Seamless car ordering, tailored to you
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="glass bg-white/90 dark:bg-gray-900/75 backdrop-blur-xl rounded-2xl shadow-apple hover:shadow-apple-hover hover:scale-105 transition-all duration-200 ease-out cursor-pointer group">
              <div className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                <img
                  src="https://images.icon-icons.com/37/PNG/512/purchaseorderapplication_compra_orde_4474.png"
                  alt="Online ordering icon"
                  className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-center">
                  Easy Online Ordering
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  Configure and order your car in just a few clicks, from anywhere.
                </p>
              </div>
            </div>
            <div className="glass bg-white/90 dark:bg-gray-900/75 backdrop-blur-xl rounded-2xl shadow-apple hover:shadow-apple-hover hover:scale-105 transition-all duration-200 ease-out cursor-pointer group">
              <div className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                <img
                  src="https://images.icon-icons.com/3553/PNG/512/shipment_shipments_package_delivery_box_ecommerce_icon_224941.png"
                  alt="Fast delivery truck icon"
                  className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-center">
                  Fast Shipment
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  Get your car delivered to your door in as little as 48 hours.
                </p>
              </div>
            </div>
            <div className="glass bg-white/90 dark:bg-gray-900/75 backdrop-blur-xl rounded-2xl shadow-apple hover:shadow-apple-hover hover:scale-105 transition-all duration-200 ease-out cursor-pointer group">
              <div className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                <img
                  src="https://images.icon-icons.com/3583/PNG/512/good_quality_winner_achievement_favorite_award_tick_check_mark_rating_star_icon_225923.png"
                  alt="Quality check icon"
                  className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-center">
                  Trusted Quality
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  Every car is certified and backed by our satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


            {/* Featured Cars Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-system-gradient relative z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-100">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <h2 className="text-3xl sm:text-4xl font-sf-pro font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#536976] to-[#292e49] bg-clip-text text-transparent animate-fade-in">
          </h2>
          <div className="glass bg-white/90 dark:bg-gray-900/75 backdrop-blur-xl rounded-2xl shadow-apple p-6 sm:p-8 overflow-hidden relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={images[currentIndex]}
                alt={`Featured car ${currentIndex + 1}`}
                className="w-full h-auto object-cover rounded-lg"
                style={{ aspectRatio: '3/4' }}
              />
              <img
                src={images[(currentIndex + 1) % images.length]}
                alt={`Featured car ${(currentIndex + 1) % images.length + 1}`}
                className="w-full h-auto object-cover rounded-lg"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section id="brands" className="w-full py-12 sm:py-16 bg-system-gradient relative z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-400">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-sf-pro font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">Trusted Brands</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Order from the world's leading car manufacturers
            </p>
          </div>
          <div className="glass bg-white/90 dark:bg-gray-900/75 backdrop-blur-xl rounded-2xl shadow-apple overflow-hidden">
            <div className="flex animate-scroll hover:pause-scroll">
              {[
                { src: "https://tse3.mm.bing.net/th/id/OIP.m1ar389tpEOAFN1NTurqvwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Tesla logo" },
                { src: "https://tse2.mm.bing.net/th/id/OIP.1FR5dWqdKCuYy7mJxUZUcQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "BMW logo" },
                { src: "https://tse4.mm.bing.net/th/id/OIP.gA4aVvBIqb8bvH6-u-DbPwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Mercedes-Benz logo" },
                { src: "https://tse4.mm.bing.net/th/id/OIP.WjUdnMRzelbbnNCNVzA74gHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Audi logo" },
                { src: "https://th.bing.com/th/id/R.34362162cfe15152af26f2be1aa23814?rik=mNTI8%2fzmRxIbzA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fporsche_logo%2fporsche_logo_PNG1.png&ehk=viyJGrSvoJsH3wwAWviFXn%2bRDqbPUEaUiW4Cndw0V9I%3d&risl=&pid=ImgRaw&r=0", alt: "Porsche logo" },
                { src: "https://th.bing.com/th/id/R.28af9f9e7d9a24312579eeb763670105?rik=LdtMaMFfR0XyfA&riu=http%3a%2f%2fwww.car-brand-names.com%2fwp-content%2fuploads%2f2015%2f07%2fToyota-emblem-3.jpg&ehk=XzpjNK%2bJcTTvYi0km9tQ3CBt%2bzZ2Sua1b%2bi%2bKFza%2bJ0%3d&risl=&pid=ImgRaw&r=0", alt: "Toyota Logo" },
                { src: "https://th.bing.com/th/id/R.27b0b67cdf9ad5e8e7ef21fcf0f265c2?rik=fIePzUEcCGoWcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fHonda-Logo-High-Definition-Backgrounds.png&ehk=FhtmbjyteXmiuSjraHFpaAhA2mFsT0MhrvboVRI9obI%3d&risl=&pid=ImgRaw&r=0", alt: "Honda" },
                { src: "https://tse1.mm.bing.net/th/id/OIP.rCier55RtLlFnTH9QIB4nwHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Ford logo" },
                { src: "https://logos-world.net/wp-content/uploads/2021/03/Chevrolet-Emblem.png", alt: "Chevrolet logo" }
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 mx-4 sm:mx-6 object-contain"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 sm:py-20 md:py-24 bg-system-gradient relative z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-800">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-sf-pro font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">Need Help Ordering?</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Our team is here to assist with your car order
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="glass bg-white/90 dark:bg-gray-900/75 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-apple">
              <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">Contact Us</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <img
                    src="https://images.icon-icons.com/2959/PNG/512/pins_placeholders_location_map_markers_geolocation_address_icon_185988.png"
                    alt="Location pin icon"
                    className="w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-sf-pro font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Showroom</p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">123 Car Street, Auto City, AC 12345</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://images.icon-icons.com/218/PNG/512/Contact_25380.png"
                    alt="Phone icon"
                    className="w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-sf-pro font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Support Line</p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">1-800-CAR-ORDER</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://images.icon-icons.com/156/PNG/128/email_send_22054.png"
                    alt="Email icon"
                    className="w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-sf-pro font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">orders@fernandezcars.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass bg-white/90 dark:bg-gray-900/75 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-apple">
              <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">Ask About Your Order</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 dark:bg-gray-800/50 rounded-apple focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-sf-pro text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base"
                    aria-describedby="name-label"
                  />
                  <span id="name-label" className="sr-only">Your Name</span>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 dark:bg-gray-800/50 rounded-apple focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-sf-pro text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base"
                    aria-describedby="email-label"
                  />
                  <span id="email-label" className="sr-only">Your Email</span>
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Order Inquiry"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 dark:bg-gray-800/50 rounded-apple focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 resize-none transition-all duration-200 font-sf-pro text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base"
                    aria-describedby="message-label"
                  ></textarea>
                  <span id="message-label" className="sr-only">Your Order Inquiry</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1A2E44] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-sm sm:text-base active:bg-white active:text-[#1A2E44] active:scale-95"
                >
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-system-secondary text-gray-400 dark:text-gray-300 text-center py-6 sm:py-8 animate-on-scroll opacity-0 transition-all duration-1000 delay-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
            <a href="https://twitter.com/fernandezcars" className="hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">Twitter</a>
            <a href="https://instagram.com/fernandezcars" className="hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">Instagram</a>
            <a href="https://facebook.com/fernandezcars" className="hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">Facebook</a>
          </div>
          <p className="text-sm sm:text-base font-sf-pro">
            <a href="/privacy" className="hover:text-blue-500 transition-colors duration-200">Privacy Policy</a> | © 2025 Fernandez Cars. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
