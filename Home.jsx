import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[url('https://brownliving.in/cdn/shop/articles/food-donation-services-988981.jpg?v=1703200384')] bg-cover bg-center bg-fixed">
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-600">ZeroHunger</span>
            </div>
            <div className="flex space-x-4">
              <button onClick={() => setActiveSection('home')} className="text-gray-700 hover:text-purple-600 px-3 py-2">Home</button>
              <button onClick={() => setActiveSection('about')} className="text-gray-700 hover:text-purple-600 px-3 py-2">About</button>
              <button onClick={() => setActiveSection('contact')} className="text-gray-700 hover:text-purple-600 px-3 py-2">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        {activeSection === 'home' && (
          <div className="transition-all duration-500 ease-in-out transform">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Zero Hunger Initiative
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
              Join our mission to create a world without hunger. Connect surplus food
          with those in need and make a lasting impact.

              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Login Cards with transition effects */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Food Donor</h2>
                <p className="text-gray-600 mb-8">Have excess food? Donate it to those who need it most.</p>
                <Link to="/donor-login">
                  <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all hover:bg-purple-700 hover:shadow-xl">
                    Donor Login
                  </button>
                </Link>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Food Receiver</h2>
                <p className="text-gray-600 mb-8">Connect with donors and receive food assistance.</p>
                <Link to="/receiver-login">
                  <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all hover:bg-purple-700 hover:shadow-xl">
                    Receiver Login
                  </button>
                </Link>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Volunteer</h2>
                <p className="text-gray-600 mb-8">Help us distribute food and make a difference.</p>
                <Link to="/volunteer-login">
                  <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all hover:bg-purple-700 hover:shadow-xl">
                    Volunteer Login
                  </button>
                </Link>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Administrator</h2>
                <p className="text-gray-600 mb-8">Manage and oversee the distribution system.</p>
                <Link to="/admin-login">
                  <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all hover:bg-purple-700 hover:shadow-xl">
                    Admin Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto transition-all duration-500 ease-in-out transform">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">About Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zero Hunger Initiative is dedicated to eliminating food waste and hunger in our communities. We connect food donors with those in need through a network of dedicated volunteers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform ensures efficient food distribution while maintaining the highest standards of food safety and dignity for all participants.
            </p>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto transition-all duration-500 ease-in-out transform">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📞</span>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📧</span>
                <p className="text-gray-700">contact@zerohunger.org</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📍</span>
                <p className="text-gray-700">123 Food Street, Hunger Free City, 12345</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
