import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import type { FoodRequest } from '../types';

const PendingRequests = () => {
  const [selectedRequest, setSelectedRequest] = useState<FoodRequest | null>(null);

  const dummyRequests: FoodRequest[] = [
    {
      id: '1',
      quantity: 5,
      otp: '1234',
      donor: {
        name: 'John Doe',
        location: '123 Main Street, City'
      },
      status: 'pending',
      createdAt: new Date()
    },
    {
      id: '2',
      quantity: 3,
      otp: '5678',
      donor: {
        name: 'Jane Smith',
        location: '456 Park Avenue, Town'
      },
      status: 'pending',
      createdAt: new Date()
    },
    {
      id: '3',
      quantity: 8,
      otp: '9012',
      donor: {
        name: 'Mike Johnson',
        location: '789 Oak Road, Village'
      },
      status: 'pending',
      createdAt: new Date()
    }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyRequests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                {request.status}
              </span>
              <p className="text-sm text-gray-500">
                OTP: <span className="font-mono font-bold">{request.otp}</span>
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Quantity Requested</p>
                <p className="text-lg font-semibold">{request.quantity} servings</p>
              </div>

              {request.donor && (
                <>
                  <div>
                    <p className="text-sm text-gray-500">Donor</p>
                    <p className="text-lg font-semibold">{request.donor.name}</p>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                    <p className="text-gray-600">{request.donor.location}</p>
                  </div>
                </>
              )}

              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={() => setSelectedRequest(request)}
                  className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Request Details</h2>
            <p className="text-lg font-semibold">{selectedRequest.quantity} servings</p>
            {selectedRequest.donor && (
              <>
                <p className="text-sm text-gray-500">Donor: {selectedRequest.donor.name}</p>
                <p className="text-sm text-gray-500">Location: {selectedRequest.donor.location}</p>
              </>
            )}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingRequests;