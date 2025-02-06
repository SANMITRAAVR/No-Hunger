import React from 'react';

const DonorsTable = () => {
    const donors = [
      { id: 1, name: 'Grand Plaza Hotel', email: 'grandplaza@hotel.com', phone: '123-456-7890', donations: 25, lastDonation: '2024-01-25', type: 'Restaurant', rating: 4.8 },
      { id: 2, name: 'Fresh Feast Catering', email: 'freshfeast@catering.com', phone: '987-654-3210', donations: 42, lastDonation: '2024-01-24', type: 'Catering', rating: 4.9 },
      { id: 3, name: 'Royal Banquet Hall', email: 'royal@banquet.com', phone: '456-789-0123', donations: 18, lastDonation: '2024-01-23', type: 'Event Hall', rating: 4.7 },
    ];
  
    return (
      <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-orange-600">Food Donors Directory</h1>
            <div className="bg-orange-100 px-4 py-2 rounded-lg">
              <span className="font-semibold text-orange-600">Total Donors: {donors.length}</span>
            </div>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <th className="py-4 px-6 rounded-tl-xl">Organization</th>
                <th className="py-4 px-6">Type</th>
                <th className="py-4 px-6">Contact</th>
                <th className="py-4 px-6">Total Donations</th>
                <th className="py-4 px-6">Last Donation</th>
                <th className="py-4 px-6">Rating</th>
                <th className="py-4 px-6 rounded-tr-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through donors data */}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

export default DonorsTable;
