import React, { useState } from 'react';

function ReceiverDashboard() {
  const [foodQuantity, setFoodQuantity] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [showOtp, setShowOtp] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [requests, setRequests] = useState([
    { date: '2024-01-20', quantity: '25kg', status: 'Completed', rating: 4 },
    { date: '2024-01-22', quantity: '15kg', status: 'Pending', rating: 5 },
    { date: '2024-01-25', quantity: '30kg', status: 'In Progress', rating: 3 },
  ]);

  const handleOtpChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const generateOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setOtp(newOtp.split(''));
    setShowOtp(true);
  };

  const handleSubmit = () => {
    if (foodQuantity) {
      generateOtp();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Elegant Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg py-8 mb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-center">
            Receiver Dashboard
          </h1>
          <p className="text-gray-600 text-center mt-2">Welcome back! Let's manage your food requests.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Food Quantity Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all hover:scale-[1.02]">
              <label className="block text-xl font-semibold text-purple-600 mb-4">
                Food Quantity Required
              </label>
              <input
                type="text"
                placeholder="Enter quantity (kg)"
                value={foodQuantity}
                onChange={(e) => setFoodQuantity(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-purple-100 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all"
              />
            </div>

            {/* Disclaimer Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all hover:scale-[1.02]">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                By submitting this request, you agree to our terms and conditions regarding food safety and distribution policies.
              </p>
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02] focus:ring-4 focus:ring-purple-300"
            >
              Submit Request
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* OTP Verification */}
            {showOtp && (
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all animate-fadeIn">
                <h2 className="text-xl font-semibold text-purple-600 mb-4">OTP Verification</h2>
                <p className="text-gray-600 mb-6">Your OTP for verification:</p>
                <div className="flex justify-center gap-6 mb-4">
                  {otp.map((digit, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 flex items-center justify-center text-2xl font-bold border-2 border-purple-200 rounded-xl bg-white shadow-inner"
                    >
                      {digit}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Share this OTP with the volunteer for verification
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Past Food Requests */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-purple-600 mb-6">Past Food Requests</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tl-xl">Date</th>
                  <th className="px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">Quantity</th>
                  <th className="px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">Status</th>
                  <th className="px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-xl">Rating</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, index) => (
                  <tr key={index} className="border-b border-purple-100 hover:bg-purple-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{req.date}</td>
                    <td className="px-6 py-4">{req.quantity}</td>
                    <td className="px-6 py-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        req.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        req.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-yellow-400">{('⭐').repeat(req.rating)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiverDashboard;