import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DonorLogin() {
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

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="w-full h-screen bg-cover bg-center flex justify-center items-center relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3")' }}>
      <button 
        onClick={handleBack} 
        className="absolute top-5 left-5 px-6 py-2 bg-gradient-to-r from-[#FF7043] to-[#FF5722] text-white rounded-lg font-semibold text-lg transition-all ease-in-out duration-300 shadow-lg hover:translate-y-1 hover:shadow-2xl"
      >
        ← Back to Home
      </button>
      
      <div className="bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl w-96 max-w-[90%] animate-fadeIn backdrop-blur-lg flex flex-col items-center relative">
        <h1 className="text-[#FF7043] text-4xl mb-8 font-semibold">Donor Login</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          
          <div className="relative mb-8 w-full">
            <label className="absolute left-4 top-[-10px] bg-white px-2 text-[#FF7043] text-sm font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-[94%] px-5 py-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:border-transparent"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative mb-8 w-full">
            <label className="absolute left-4 top-[-10px] bg-white px-2 text-[#FF7043] text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="w-[94%] px-5 py-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:border-transparent"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="w-1/2 py-3 bg-gradient-to-r from-[#FF7043] to-[#FF5722] text-white rounded-lg font-semibold text-lg uppercase tracking-wide transition-all ease-in-out duration-300 hover:translate-y-1">
            Login
          </button>
        </form>
        
        <div className="mt-6 text-center text-gray-600 text-sm">
          <a href="#" className="text-[#FF7043] font-semibold hover:underline mr-4">Forgot Password?</a>
          |
          <a href="/donor-register" className="text-[#FF7043] font-semibold hover:underline ml-4">Register Now</a>
        </div>
      </div>
    </div>
  );
}

export default DonorLogin;
