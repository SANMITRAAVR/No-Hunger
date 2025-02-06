import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Donor Agreement & Consent",
      icon: "📝",
      content: [
        "I confirm that the food donated is safe for consumption and handled hygienically.",
        "I understand that Zero Hunger will not be responsible for food-related issues post-distribution.",
        "I consent to the terms and conditions of the initiative.",
        "I agree to provide accurate details about the food donation."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-12 min-h-[80vh]">
            {/* Content Area - Full Width */}
            <div className="col-span-12 p-8">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-4xl font-bold text-teal-800 mb-6">
                  {sections[0].title}
                </h1>
                <div className="space-y-6">
                  {sections[0].content.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-6 bg-teal-50 rounded-lg"
                    >
                      <span className="text-2xl mr-4"></span>
                      <p className="text-gray-700 text-lg">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.button
                onClick={() => navigate('/donor-register')}
                className="mt-8 px-6 py-3 bg-teal-600 text-white rounded-lg
                           hover:bg-teal-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Registration
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;