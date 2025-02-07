import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Receiver Pages
import ReceiverLogin from './pages/receiverpages/ReceiverLogin.jsx';
import ReceiverHomepage from './pages/receiverpages/ReceiverHomepage';
import RequestFood from './pages/receiverpages/Requests/RequestFood';
import RequestHistory from './pages/receiverpages/Requests/RequestHistory';
import ReceiverSignup from './pages/receiverpages/ReceiverSignup.jsx';

// Sidebar
import ReceiverSidebar from './components/ReceiverSidebar.jsx';
import NewRequest from './components/NewRequest.jsx';
import PendingRequests from './components/PendingRequests';  // <-- Add this import
import HelpSupport from './components/HelpSupport.jsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <ReceiverSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      {/* Main Content */}
      <div className="flex-1 p-6 bg-green-100">
        <Routes>
          <Route path="/" element={<ReceiverHomepage />} />
          <Route path="/receivers" element={<ReceiverHomepage />} />
          <Route path="/receivers/login" element={<ReceiverLogin />} />
          <Route path="/receivers/signup" element={<ReceiverSignup />} />
          <Route path="/receivers/new-request" element={<NewRequest />} />
          <Route path="/receivers/pending" element={<PendingRequests />} />  {/* <-- Fix this */}
          <Route path="/receivers/past-request" element={<RequestHistory />} />
          <Route path="/receivers/help" element={<HelpSupport />} />
          <Route path="/receivers/dashboard" element={<ReceiverHomepage />} />
        </Routes>

        <Toaster />
      </div>
    </div>
  );
};

export default App;
