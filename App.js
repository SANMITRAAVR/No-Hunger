import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DonorRegister from './DonorRegistration';
import HomePage from './Home';
import DonorLogin from './DonorLogin';
import ReceiverLogin from './ReceiverLogin';
import VolunteerLogin from './VolunteerLogin';
import ReceiverRegistration from './ReceiverRegistration';
import VolunteerRegistration from './VolunteerResgistration.jsx';
import TermsAndConditions from './TermsAndConditions.jsx';
import ReceiverDashboard from './ReceiverDashboard.jsx';
import Adminpage from './Adminpage.jsx';
import DonorsTable from './components/DonorsTable.jsx';
import ReceiversTable from './components/ReceiversTable.jsx';
import VolunteersTable from './components/VolunteersTable.jsx';
import HomelessTable from './components/HomelessTable.jsx';
import AdminLogin from './AdminLogin.jsx';




function App() {
  return (
    <Routes>
       <Route path="/" element={<HomePage />} /> 
       <Route path="/donor-login" element={<DonorLogin />} /> 
      <Route path="/receiver-login" element={<ReceiverLogin />} />
      <Route path="/volunteer-login" element={<VolunteerLogin />} /> 
      <Route path="/donor-register" element={<DonorRegister />} />
      <Route path="/receiver-register" element={<ReceiverRegistration />} />
      <Route path="/volunteer-register" element={<VolunteerRegistration />} />
      <Route path="/terms-conditions" element={<TermsAndConditions/>}/> 
      <Route path="/receiver-dashboard" element={<ReceiverDashboard />} />
      <Route path="/admin-login" element={<AdminLogin/>}/>
      <Route path="/adminpage" element={<Adminpage />}/>
      <Route path="/donor-table" element={<DonorsTable />} />
      <Route path="/receiver-table" element={<ReceiversTable />}/>
      <Route path="/volunteer-table" element={<VolunteersTable />} />
      <Route path="/homeless-table" element={<HomelessTable />}/> 

 
    </Routes>
    
  );
}

export default App;