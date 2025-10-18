import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Listing from './pages/user/listing'
import LandingPage from './pages/user/LandingPage'
import Order from './pages/user/order'
import Contacts from './pages/user/contacts'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-apple-gray-50">
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cars" element={<Listing />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
