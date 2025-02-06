import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VolunteerLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-cover bg-center" 
      style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/premium-vector/caring-male-volunteer-give-box-with-food-unhappy-poor-person-outdoors-kind-man-activist-share-products-supplies-with-homeless-needy-people-streets-charity-concept-vector-illustration_140689-4336.jpg")' }}>
      
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-5 left-5 px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:translate-y-[-2px] hover:shadow-2xl"
      >
        ← Back to Home
      </button>
      
      <div className="bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl max-w-lg w-full backdrop-blur-md flex flex-col items-center animate-fadeIn">
        <h1 className="text-green-600 text-4xl font-semibold mb-8 text-center">Volunteer Login</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <div className="relative mb-6 w-full">
            <label className="absolute left-4 top-[-10px] bg-white px-2 text-green-600 text-sm font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-11/12 px-5 py-3 border-2 border-gray-300 rounded-lg text-lg focus:border-green-600 focus:ring-2 focus:ring-green-200"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative mb-6 w-full">
            <label className="absolute left-4 top-[-10px] bg-white px-2 text-green-600 text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="w-11/12 px-5 py-3 border-2 border-gray-300 rounded-lg text-lg focus:border-green-600 focus:ring-2 focus:ring-green-200"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="w-1/2 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg uppercase tracking-wide transition-transform transform hover:translate-y-[-2px] hover:shadow-2xl">
            Login
          </button>
        </form>
        <div className="text-center mt-5 text-gray-500 text-sm">
          <a href="#" className="text-green-600 font-semibold mr-4">Forgot Password?</a>
          |
          <a href="/volunteer-register" className="text-green-600 font-semibold ml-4">Register Now</a>
        </div>
      </div>
    </div>
  );
}

export default VolunteerLogin;
