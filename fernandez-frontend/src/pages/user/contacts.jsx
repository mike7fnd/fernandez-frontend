import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/ui/navbar";

const Contacts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Order Inquiry",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "Order Inquiry",
      message: ""
    });
  };

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

      {/* Page Header */}
      <section className="w-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 gap-6 sm:gap-8 relative z-10 animate-on-scroll opacity-0 transition-all duration-1000">
        <div className="w-full text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sf-pro font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#536976] to-[#292e49] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto px-4">
            We're here to help you with your car ordering journey. Reach out to us for any questions or support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-system-gradient relative z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-200">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-sf-pro font-bold text-gray-900 mb-2 sm:mb-4">Contact Information</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Find us and get in touch
            </p>
          </div>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="glass bg-white/90 backdrop-blur-xl rounded-2xl shadow-apple p-4 sm:p-6 text-center hover:scale-105 transition-all duration-200">
              <img
                src="https://images.icon-icons.com/656/PNG/512/pin_gps_location_find_map_search_icon-icons.com_59982.png"
                alt="Location icon"
                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-base sm:text-lg font-sf-pro font-semibold text-gray-900 mb-1 sm:mb-2">Address</h3>
              <a
                href="https://maps.google.com/?q=123 , AC 12345"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 transition-colors"
              >
                123 Car Street, Auto City, AC 12345
              </a>
            </div>
            <div className="glass bg-white/90 backdrop-blur-xl rounded-2xl shadow-apple p-4 sm:p-6 text-center hover:scale-105 transition-all duration-200">
              <img
                src="https://images.icon-icons.com/614/PNG/512/phone-call-auricular-symbol-in-black_icon-icons.com_56483.png"
                alt="Phone icon"
                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-base sm:text-lg font-sf-pro font-semibold text-gray-900 mb-1 sm:mb-2">Phone</h3>
              <a
                href="tel:1-800-CAR-ORDER"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 transition-colors"
              >
                1-800-CAR-ORDER
              </a>
            </div>
            <div className="glass bg-white/90 backdrop-blur-xl rounded-2xl shadow-apple p-4 sm:p-6 text-center hover:scale-105 transition-all duration-200">
              <img
                src="https://images.icon-icons.com/656/PNG/512/mail_email_message_electronic_online_web_icon-icons.com_59986.png"
                alt="Email icon"
                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-base sm:text-lg font-sf-pro font-semibold text-gray-900 mb-1 sm:mb-2">Email</h3>
              <a
                href="mailto:orders@fernandezcars.com"
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 transition-colors"
              >
                orders@fernandezcars.com
              </a>
            </div>
            <div className="glass bg-white/90 backdrop-blur-xl rounded-2xl shadow-apple p-4 sm:p-6 text-center hover:scale-105 transition-all duration-200">
              <img
                src="https://images.icon-icons.com/3982/PNG/512/time_alarm_stopwatch_watch_hour_timer_clock_icon_252109.png"
                alt="Clock icon"
                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-base sm:text-lg font-sf-pro font-semibold text-gray-900 mb-1 sm:mb-2">Business Hours</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Mon-Fri: 9 AM - 6 PM PST<br />
                Sat: 10 AM - 4 PM PST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-system-gradient relative z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-400">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-sf-pro font-bold text-gray-900 mb-2 sm:mb-4">Send Us a Message</h2>
              <p className="text-sm sm:text-base text-gray-600">
                We'd love to hear from you
              </p>
            </div>
            <div className="glass bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-apple">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-sf-pro font-semibold text-gray-900 mb-1 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 rounded-apple focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-sf-pro text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-sf-pro font-semibold text-gray-900 mb-1 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 rounded-apple focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-sf-pro text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-sf-pro font-semibold text-gray-900 mb-1 sm:mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 rounded-apple focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-sf-pro text-gray-900 text-sm sm:text-base"
                  >
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-sf-pro font-semibold text-gray-900 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 rounded-apple focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 resize-none transition-all duration-200 font-sf-pro text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1A2E44] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-sm sm:text-base active:bg-white active:text-[#1A2E44] active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="w-full py-12 sm:py-16 bg-system-gradient relative z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-600">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-sf-pro font-bold text-gray-900 mb-2 sm:mb-4">Follow Us</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Follow us for the latest car deals and updates.
            </p>
            <div className="flex justify-center gap-6 sm:gap-8">
              <a
                href="https://twitter.com/fernandezcars"
                target="_blank"
                rel="noopener noreferrer"
                className="glass bg-white/90 backdrop-blur-xl p-3 sm:p-4 rounded-full shadow-apple hover:scale-110 hover:shadow-apple-hover transition-all duration-200"
              >
                <img
                  src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_icon_256077.png"
                  alt="Twitter"
                  className="w-6 sm:w-8 h-6 sm:h-8"
                  loading="lazy"
                />
              </a>
              <a
                href="https://instagram.com/fernandezcars"
                target="_blank"
                rel="noopener noreferrer"
                className="glass bg-white/90 backdrop-blur-xl p-3 sm:p-4 rounded-full shadow-apple hover:scale-110 hover:shadow-apple-hover transition-all duration-200"
              >
                <img
                  src="https://images.icon-icons.com/836/PNG/512/Instagram_icon-icons.com_66804.png"
                  alt="Instagram"
                  className="w-6 sm:w-8 h-6 sm:h-8"
                  loading="lazy"
                />
              </a>
              <a
                href="https://facebook.com/fernandezcars"
                target="_blank"
                rel="noopener noreferrer"
                className="glass bg-white/90 backdrop-blur-xl p-3 sm:p-4 rounded-full shadow-apple hover:scale-110 hover:shadow-apple-hover transition-all duration-200"
              >
                <img
                  src="https://images.icon-icons.com/2429/PNG/512/facebook_logo_icon_147291.png"
                  alt="Facebook"
                  className="w-6 sm:w-8 h-6 sm:h-8"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-system-gradient relative z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-800">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-sf-pro font-bold text-gray-900 mb-2 sm:mb-4">Support Options</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Get help when you need it
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="glass bg-white/90 backdrop-blur-xl rounded-2xl shadow-apple p-6 sm:p-8 text-center hover:scale-105 transition-all duration-200">
              <img
                src="https://images.icon-icons.com/2031/PNG/512/faq_icon_124073.png"
                alt="FAQ icon"
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 mb-3 sm:mb-4">FAQ</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Visit our FAQ for quick answers to common questions.
              </p>
              <button
                onClick={() => navigate('/faq')}
                className="bg-[#1A2E44] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-xs sm:text-sm active:bg-white active:text-[#1A2E44] active:scale-95"
              >
                Visit FAQ
              </button>
            </div>
            <div className="glass bg-white/90 backdrop-blur-xl rounded-2xl shadow-apple p-6 sm:p-8 text-center hover:scale-105 transition-all duration-200">
              <img
                src="https://images.icon-icons.com/935/PNG/512/chat-comment-oval-speech-bubble-with-text-lines_icon-icons.com_73302.png"
                alt="Chat icon"
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 mb-3 sm:mb-4">Live Chat</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Chat with us now for real-time support.
              </p>
              <button
                onClick={() => {/* Open live chat */ }}
                className="bg-[#1A2E44] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-xs sm:text-sm active:bg-white active:text-[#1A2E44] active:scale-95"
              >
                Chat Now
              </button>
            </div>
            <div className="glass bg-white/90 backdrop-blur-xl rounded-2xl shadow-apple p-6 sm:p-8 text-center hover:scale-105 transition-all duration-200">
              <img
                src="https://images.icon-icons.com/2449/PNG/512/headphones_head_set_chat_live_support_icon_148822.png"
                alt="Callback icon"
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 mb-3 sm:mb-4">Callback</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Request a callback from our representatives.
              </p>
              <button
                onClick={() => {/* Open callback form */ }}
                className="bg-[#1A2E44] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-xs sm:text-sm active:bg-white active:text-[#1A2E44] active:scale-95"
              >
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-system-gradient relative z-10 animate-on-scroll opacity-0 transition-all duration-1000 delay-1200">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-sf-pro font-bold text-gray-900 mb-2 sm:mb-4">Find Our Showroom</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Visit us in person or explore our location
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="glass bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-apple">
              <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 mb-4 sm:mb-6">Interactive Map</h3>
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 sm:mb-4">
                {/* Placeholder for Google Maps embed */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm sm:text-base">
                  <p>Interactive Map Placeholder</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Click on the map to get directions to our showroom.
              </p>
            </div>
            <div className="glass bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-apple">
              <h3 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 mb-4 sm:mb-6">Contact Status</h3>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full mr-2 sm:mr-3"></div>
                <span className="text-sm sm:text-base font-sf-pro font-semibold text-green-600">Online Now</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Our team is available to assist you during business hours.
              </p>
              <button
                onClick={() => window.open('/brochure.pdf', '_blank')}
                className="bg-[#1A2E44] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-xs sm:text-sm active:bg-white active:text-[#1A2E44] active:scale-95"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="w-full bg-system-secondary text-gray-400 dark:text-gray-300 text-center py-6 sm:py-8 animate-on-scroll opacity-0 transition-all duration-1000 delay-1400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
            <button onClick={() => navigate('/')} className="hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">Home</button>
            <button onClick={() => navigate('/cars')} className="hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">Car Listings</button>
            <button onClick={() => navigate('/order')} className="hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">Order</button>
            <button onClick={() => navigate('/privacy')} className="hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base">Privacy Policy</button>
          </div>
          <p className="text-sm sm:text-base font-sf-pro">
            © 2025 Fernandez Cars. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
