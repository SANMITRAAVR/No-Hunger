import React from 'react';

const VolunteersTable = () => {
  const volunteers = [
    { id: 1, name: 'Sarah Parker', email: 'sarah@volunteer.com', phone: '123-777-8888', zone: 'North', locationsAdded: 12, deliveries: 45, joinDate: '2023-12-01', status: 'Active' },
    { id: 2, name: 'Mike Thompson', email: 'mike@volunteer.com', phone: '987-666-5555', zone: 'South', locationsAdded: 8, deliveries: 32, joinDate: '2023-12-15', status: 'Active' },
    { id: 3, name: 'Lisa Anderson', email: 'lisa@volunteer.com', phone: '456-999-4444', zone: 'East', locationsAdded: 15, deliveries: 28, joinDate: '2024-01-01', status: 'On Leave' },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-600">Volunteer Management</h1>
          <div className="flex gap-4">
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <span className="font-semibold text-green-600">Active Volunteers: {volunteers.length}</span>
            </div>
          </div>
        </div>
        
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <th className="py-4 px-6 rounded-tl-xl">Name</th>
              <th className="py-4 px-6">Contact</th>
              <th className="py-4 px-6">Zone</th>
              <th className="py-4 px-6">Locations Added</th>
              <th className="py-4 px-6">Deliveries</th>
              <th className="py-4 px-6">Join Date</th>
              <th className="py-4 px-6 rounded-tr-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through volunteers data */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default VolunteersTable;
