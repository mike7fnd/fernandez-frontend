import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/ui/navbar';

export default function Order() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState(location.state?.cart || JSON.parse(localStorage.getItem('cart') || '[]'));
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryDate: '',
    deliveryTime: ''
  });
  const [insurance, setInsurance] = useState('');
  const [addons, setAddons] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [orderId, setOrderId] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [orderDetails, setOrderDetails] = useState(null);

  const statusSteps = [
    { id: 1, label: 'Cart', status: 'Processing shipment' },
    { id: 2, label: 'To Ship', status: 'Processing shipment' },
    { id: 3, label: 'Shipped', status: 'Shipped' },
    { id: 4, label: 'To Deliver', status: 'Delivered' }
  ];

  const handleStepClick = (stepId) => {
    if (stepId === 1) {
      setCurrentStep(1);
      setOrderDetails(null);
    } else if (stepId === 2 && !orderDetails) {
      placeOrder();
    } else if (stepId === 3 && orderDetails && currentStep === 2) {
      markAsShipped();
    } else if (stepId === 4 && orderDetails && currentStep === 3) {
      markAsDelivered();
    } else if (orderDetails) {
      const step = statusSteps.find(s => s.id === stepId);
      setCurrentStep(stepId);
      setOrderDetails(prev => ({
        ...prev,
        shippingStatus: step.status,
        trackingNumber: stepId >= 3 ? (prev.trackingNumber || `TN${Math.floor(Math.random() * 1000000)}`) : null,
        courier: stepId >= 3 ? (prev.courier || 'FedEx') : null,
        expectedDelivery: stepId === 3 ? (prev.expectedDelivery || new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()) : null,
        deliveryDate: stepId === 4 ? (prev.deliveryDate || new Date().toLocaleDateString()) : null
      }));
    }
  };

  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 50;
  const insuranceCost = insurance === 'basic' ? 10 * cart.reduce((total, item) => total + item.quantity, 0) :
                       insurance === 'premium' ? 20 * cart.reduce((total, item) => total + item.quantity, 0) : 0;
  const addonsCost = addons.reduce((total, addon) => {
    const cost = addon === 'gps' ? 5 : addon === 'carseat' ? 8 : addon === 'cleaning' ? 15 : 0;
    return total + cost * cart.reduce((total, item) => total + item.quantity, 0);
  }, 0);
  const total = subtotal + deliveryFee + insuranceCost + addonsCost - discount;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  const handleAddonChange = (addon) => {
    setAddons(prev =>
      prev.includes(addon)
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };

  const placeOrder = () => {
    const generatedOrderId = `#${Math.floor(Math.random() * 90000) + 10000}`;
    setOrderId(generatedOrderId);
    setCurrentStep(2);
    setOrderDetails({
      orderId: generatedOrderId,
      cart,
      userInfo,
      total,
      paymentMethod,
      estimatedDispatchDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      trackingNumber: null,
      shippingStatus: 'Processing shipment',
      courier: null,
      expectedDelivery: null,
      deliveryDate: null
    });
    // Clear cart after placing order
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  const markAsShipped = () => {
    setCurrentStep(3);
    setOrderDetails(prev => ({
      ...prev,
      trackingNumber: `TN${Math.floor(Math.random() * 1000000)}`,
      courier: 'FedEx',
      shippingStatus: 'Shipped',
      expectedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()
    }));
  };

  const markAsDelivered = () => {
    setCurrentStep(4);
    setOrderDetails(prev => ({
      ...prev,
      deliveryDate: new Date().toLocaleDateString(),
      shippingStatus: 'Delivered'
    }));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 max-w-7xl">
        {/* Progress Indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {statusSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center">
                  <button
                    onClick={() => handleStepClick(step.id)}
                    className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center font-sf-pro font-semibold text-sm sm:text-base transition-colors ${
                      currentStep === step.id
                        ? 'bg-[#1A2E44] text-white'
                        : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                    }`}
                  >
                    {step.id}
                  </button>
                  <span
                    className={`ml-1 sm:ml-2 text-xs sm:text-sm font-sf-pro font-medium ${
                      currentStep === step.id ? 'text-[#1A2E44]' : 'text-gray-600'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < statusSteps.length - 1 && (
                  <div className="w-8 sm:w-16 h-0.5 bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">Order Summary</h1>

        {orderDetails ? (
          <div className="max-w-4xl mx-auto">
            {/* Order Tracking */}
            <div className="bg-white rounded-2xl shadow-apple p-6 mb-6">
              <h2 className="text-2xl font-sf-pro font-bold text-gray-900 mb-4">Order Tracking</h2>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="text-lg font-sf-pro font-bold text-gray-900">{orderDetails.orderId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Status</p>
                    <p className={`text-lg font-sf-pro font-bold ${orderDetails.shippingStatus === 'Delivered' ? 'text-green-600' : orderDetails.shippingStatus === 'Shipped' ? 'text-blue-600' : 'text-orange-600'}`}>
                      {orderDetails.shippingStatus}
                    </p>
                  </div>
                </div>
                {orderDetails.trackingNumber && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Tracking Number</p>
                    <p className="text-lg font-sf-pro font-bold text-gray-900">{orderDetails.trackingNumber}</p>
                  </div>
                )}
                {orderDetails.courier && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Courier</p>
                    <p className="text-lg font-sf-pro font-bold text-gray-900">{orderDetails.courier}</p>
                  </div>
                )}
                {orderDetails.expectedDelivery && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Expected Delivery</p>
                    <p className="text-lg font-sf-pro font-bold text-gray-900">{orderDetails.expectedDelivery}</p>
                  </div>
                )}
                {orderDetails.deliveryDate && (
                  <div>
                    <p className="text-sm text-gray-600">Delivered On</p>
                    <p className="text-lg font-sf-pro font-bold text-green-600">{orderDetails.deliveryDate}</p>
                  </div>
                )}
              </div>

              {/* Order Items */}
              <h3 className="text-xl font-sf-pro font-semibold text-gray-900 mb-4">Order Items</h3>
              <div className="space-y-3 mb-6">
                {orderDetails.cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image || "https://images.unsplash.com/photo-1608889172483-70731f5f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80"}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-lg font-sf-pro font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.info}</p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-sf-pro font-bold text-blue-500">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center text-xl font-sf-pro font-bold text-gray-900 pt-4 border-t border-gray-200">
                <span>Total:</span>
                <span>${orderDetails.total}</span>
              </div>

              {/* Continue Shopping Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => navigate('/cars')}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors font-sf-pro font-semibold"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        ) : cart.length === 0 ? (
          <p className="text-center text-gray-600 text-base sm:text-lg">Your cart is empty. Add some cars to get started!</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Summary */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="bg-white rounded-2xl shadow-apple p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-sf-pro font-semibold text-gray-900 mb-4 sm:mb-6">List of Selected Cars</h2>
                <div className="space-y-3 sm:space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <img
                          src={item.image || "https://images.unsplash.com/photo-1608889172483-70731f5f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80"}
                          alt={item.title}
                          className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="text-base sm:text-lg font-sf-pro font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{item.info}</p>
                          <p className="text-xs sm:text-sm text-gray-500">${item.price}/day</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors text-sm sm:text-base"
                          >
                            -
                          </button>
                          <span className="w-6 sm:w-8 text-center font-sf-pro font-medium text-sm sm:text-base">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors text-sm sm:text-base"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-base sm:text-xl font-sf-pro font-bold text-blue-500">${item.price * item.quantity}</span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-6 sm:w-8 h-6 sm:h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-sm sm:text-base"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Cost */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span>Subtotal:</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span>Delivery Fee:</span>
                      <span>${deliveryFee}</span>
                    </div>
                    {insuranceCost > 0 && (
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span>Insurance ({insurance}):</span>
                        <span>${insuranceCost}</span>
                      </div>
                    )}
                    {addonsCost > 0 && (
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span>Add-ons:</span>
                        <span>${addonsCost}</span>
                      </div>
                    )}
                    {discount > 0 && (
                      <div className="flex justify-between text-xs sm:text-sm text-green-600">
                        <span>Discount:</span>
                        <span>-${discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg sm:text-xl font-sf-pro font-bold text-gray-900 pt-2 border-t border-gray-300">
                      <span>Total:</span>
                      <span>${total}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Information Section */}
              <div className="bg-white rounded-2xl shadow-apple p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-sf-pro font-semibold text-gray-900 mb-4 sm:mb-6">User Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-1 sm:mb-2">Name</label>
                    <input
                      type="text"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-sf-pro text-gray-900 text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-1 sm:mb-2">Email</label>
                    <input
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-sf-pro text-gray-900 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-1 sm:mb-2">Phone</label>
                    <input
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-sf-pro text-gray-900 text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-1 sm:mb-2">Delivery Address</label>
                    <input
                      type="text"
                      value={userInfo.address}
                      onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-sf-pro text-gray-900 text-sm sm:text-base"
                      placeholder="123 Car Street, Auto City, AC 12345"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-1 sm:mb-2">Delivery Date</label>
                    <input
                      type="date"
                      value={userInfo.deliveryDate}
                      onChange={(e) => setUserInfo({...userInfo, deliveryDate: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-sf-pro text-gray-900 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-sf-pro font-medium text-gray-700 mb-1 sm:mb-2">Delivery Time</label>
                    <select
                      value={userInfo.deliveryTime}
                      onChange={(e) => setUserInfo({...userInfo, deliveryTime: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-sf-pro text-gray-900 text-sm sm:text-base"
                    >
                      <option value="">Select Time</option>
                      <option value="9:00-11:00">9:00 AM - 11:00 AM</option>
                      <option value="11:00-13:00">11:00 AM - 1:00 PM</option>
                      <option value="14:00-16:00">2:00 PM - 4:00 PM</option>
                      <option value="16:00-18:00">4:00 PM - 6:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Order Options */}
              <div className="bg-white rounded-2xl shadow-apple p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-sf-pro font-semibold text-gray-900 mb-4 sm:mb-6">Order Options</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-base sm:text-lg font-sf-pro font-medium text-gray-700 mb-2 sm:mb-3">Insurance</label>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="insurance"
                          value="basic"
                          checked={insurance === 'basic'}
                          onChange={(e) => setInsurance(e.target.value)}
                          className="mr-2 sm:mr-3"
                        />
                        <span className="text-xs sm:text-sm">Basic Insurance - $10/day</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="insurance"
                          value="premium"
                          checked={insurance === 'premium'}
                          onChange={(e) => setInsurance(e.target.value)}
                          className="mr-2 sm:mr-3"
                        />
                        <span className="text-xs sm:text-sm">Premium Insurance - $20/day</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-sf-pro font-medium text-gray-700 mb-2 sm:mb-3">Add-Ons</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={addons.includes('gps')}
                          onChange={() => handleAddonChange('gps')}
                          className="mr-2 sm:mr-3"
                        />
                        <span className="text-xs sm:text-sm">GPS Navigation - $5/day</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={addons.includes('carseat')}
                          onChange={() => handleAddonChange('carseat')}
                          className="mr-2 sm:mr-3"
                        />
                        <span className="text-xs sm:text-sm">Car Seat - $8/day</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={addons.includes('cleaning')}
                          onChange={() => handleAddonChange('cleaning')}
                          className="mr-2 sm:mr-3"
                        />
                        <span className="text-xs sm:text-sm">Premium Cleaning - $15/day</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-sf-pro font-medium text-gray-700 mb-2 sm:mb-3">Payment Method</label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-sf-pro text-gray-900 text-sm sm:text-base"
                    >
                      <option value="">Select Payment Method</option>
                      <option value="credit">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="apple">Apple Pay</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-sf-pro font-medium text-gray-700 mb-2 sm:mb-3">Promo Code</label>
                    <div className="flex space-x-1 sm:space-x-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-sf-pro text-gray-900 text-sm sm:text-base"
                        placeholder="Enter promo code"
                      />
                      <button
                        onClick={applyPromoCode}
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-sf-pro font-medium text-sm sm:text-base"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary Card */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-2xl shadow-apple p-4 sm:p-6 sticky top-4">
                <h2 className="text-lg sm:text-xl font-sf-pro font-semibold text-gray-900 mb-3 sm:mb-4">Order Summary</h2>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-gray-600">Total Items:</span>
                    <span className="text-xs sm:text-sm font-sf-pro font-medium">{cart.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-gray-600">Total Days:</span>
                    <span className="text-xs sm:text-sm font-sf-pro font-medium">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-gray-600">Estimated Delivery:</span>
                    <span className="text-xs sm:text-sm font-sf-pro font-medium">{userInfo.deliveryDate || 'TBD'}</span>
                  </div>
                  <div className="flex justify-between text-base sm:text-lg font-sf-pro font-bold text-gray-900 pt-2 sm:pt-3 border-t border-gray-200">
                    <span>Total Cost:</span>
                    <span>${total}</span>
                  </div>
                </div>
                <button
                  onClick={placeOrder}
                  className="w-full bg-[#1A2E44] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:ring-4 ring-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 ease-out font-sf-pro font-semibold text-sm sm:text-base active:bg-white active:text-[#1A2E44] active:scale-95 mb-3 sm:mb-4"
                >
                  Place Order
                </button>
                <button
                  onClick={() => navigate('/cars')}
                  className="w-full bg-gray-200 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-300 transition-colors font-sf-pro font-semibold text-sm sm:text-base"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
