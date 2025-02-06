import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReceiverLogin() {
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
    <div className="relative h-screen w-full bg-cover bg-center flex justify-center items-center overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3")' }}>
      <button 
        onClick={handleBack} 
        className="absolute top-5 left-5 px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl"
      >
        ← Back to Home
      </button>
      <div className="relative bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl max-w-lg w-full backdrop-blur-sm flex flex-col items-center animate-fadeIn">
        <h1 className="text-teal-600 text-4xl font-semibold mb-8 text-center">Receiver Login</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <div className="relative mb-8 w-full">
            <label className="absolute left-4 top-[-10px] bg-white px-2 text-teal-600 text-sm font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-11/12 px-5 py-3 border-2 border-gray-300 rounded-lg text-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative mb-8 w-full">
            <label className="absolute left-4 top-[-10px] bg-white px-2 text-teal-600 text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="w-11/12 px-5 py-3 border-2 border-gray-300 rounded-lg text-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
  type="button"
  onClick={() => window.location.href = "/receiver-dashboard"}
  className="w-1/2 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg uppercase tracking-wide transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl"
>
  Login
</button>

        </form>
        <div className="text-center mt-5 text-gray-500 text-sm">
          <a href="#" className="text-teal-600 font-semibold mr-4">Forgot Password?</a>
          |
          <a href="/receiver-register" className="text-teal-600 font-semibold ml-4">Register Now</a>
        </div>
      </div>
    </div>
  );
}

export default ReceiverLogin;
