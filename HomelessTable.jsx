import React from 'react';

const HomelessTable = () => {
  const locations = [
    { id: 1, area: 'Central Station', address: '123 Main St', peopleCount: 15, lastUpdated: '2024-01-25', addedBy: 'Sarah Parker', urgency: 'High', status: 'Need Aid' },
    { id: 2, area: 'River Park', address: '456 Park Ave', peopleCount: 8, lastUpdated: '2024-01-24', addedBy: 'Mike Thompson', urgency: 'Medium', status: 'Aid Scheduled' },
    { id: 3, area: 'Market Square', address: '789 Market St', peopleCount: 12, lastUpdated: '2024-01-23', addedBy: 'Lisa Anderson', urgency: 'High', status: 'In Progress' },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-600">Homeless Location Tracker</h1>
          <div className="flex gap-4">
            <div className="bg-purple-100 px-4 py-2 rounded-lg">
              <span className="font-semibold text-purple-600">Total Locations: {locations.length}</span>
            </div>
          </div>
        </div>
        
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <th className="py-4 px-6 rounded-tl-xl">Area</th>
              <th className="py-4 px-6">Address</th>
              <th className="py-4 px-6">People Count</th>
              <th className="py-4 px-6">Last Updated</th>
              <th className="py-4 px-6">Added By</th>
              <th className="py-4 px-6">Urgency</th>
              <th className="py-4 px-6 rounded-tr-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id} className="border-b hover:bg-purple-50 transition-colors">
                <td className="px-6 py-4">{location.area}</td>
                <td className="px-6 py-4">{location.address}</td>
                <td className="px-6 py-4">{location.peopleCount}</td>
                <td className="px-6 py-4">{location.lastUpdated}</td>
                <td className="px-6 py-4">{location.addedBy}</td>
                <td className="px-6 py-4">{location.urgency}</td>
                <td className="px-6 py-4">{location.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomelessTable;
