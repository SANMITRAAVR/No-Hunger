import React from 'react';

const ReceiversTable = () => {
    const receivers = [
      { id: 1, name: 'Hope Orphanage', type: 'Orphanage', contact: 'John Smith', phone: '123-555-7890', activeRequests: 3, totalReceived: 156, lastRequest: '2024-01-25', status: 'Active' },
      { id: 2, name: 'Grace Shelter Home', type: 'Shelter', contact: 'Mary Johnson', phone: '987-555-4321', activeRequests: 2, totalReceived: 98, lastRequest: '2024-01-24', status: 'Active' },
      { id: 3, name: 'Sunshine Elder Care', type: 'Elder Care', contact: 'Robert Wilson', phone: '456-555-0123', activeRequests: 1, totalReceived: 78, lastRequest: '2024-01-23', status: 'Pending' },
    ];
  
    return (
      <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600">Aid Recipients Registry</h1>
            <div className="flex gap-4">
              <div className="bg-blue-100 px-4 py-2 rounded-lg">
                <span className="font-semibold text-blue-600">Active Recipients: {receivers.length}</span>
              </div>
            </div>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <th className="py-4 px-6 rounded-tl-xl">Organization</th>
                <th className="py-4 px-6">Type</th>
                <th className="py-4 px-6">Contact Person</th>
                <th className="py-4 px-6">Active Requests</th>
                <th className="py-4 px-6">Total Received</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 rounded-tr-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through receivers data */}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

export default ReceiversTable;