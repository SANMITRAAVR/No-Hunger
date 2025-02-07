import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle, Calendar } from 'lucide-react';

const Dashboard = ({ stats }) => {
  const cards = [
      {
          title: 'Total Requests',
          value: stats?.totalRequests || 0,
          icon: TrendingUp,
          color: 'bg-blue-500',
      },
      {
          title: 'Pending Requests',
          value: stats?.pendingRequests || 0,
          icon: Clock,
          color: 'bg-yellow-500',
      },
      {
          title: 'Completed Requests',
          value: stats?.completedRequests || 0,
          icon: CheckCircle,
          color: 'bg-green-500',
      },
      {
          title: 'Peak Request Time',
          value: stats?.peakRequestTime || '-',
          icon: Users,
          color: 'bg-purple-500',
      },
  ];

  return (
      <div className="p-6 space-y-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card) => (
                  <div
                      key={card.title}
                      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                  >
                      <div className="flex items-center justify-between">
                          <div>
                              <p className="text-sm text-gray-500">{card.title}</p>
                              <p className="text-2xl font-bold mt-1">{card.value}</p>
                          </div>
                          <div className={`${card.color} p-3 rounded-lg`}>
                              <card.icon className="w-6 h-6 text-white" />
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Rice Donation Received", date: "Today, 2 PM", type: "Donation", amount: "50 kg" },
                      { title: "Vegetables Received", date: "Yesterday, 4 PM", type: "Donation", amount: "30 kg" },
                      { title: "Fruits Donation", date: "2 days ago", type: "Donation", amount: "25 kg" }
                    ].map((event, i) => (
                      <div key={i} className="p-4 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">{event.title}</div>
                            <div className="text-sm text-gray-500">{event.date}</div>
                            <div className="text-xs text-blue-600 mt-1">{event.type} - {event.amount}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Recent Analytics</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Food Drive", date: "Tomorrow, 10 AM", type: "Community" },
                      { title: "Volunteer Meet", date: "Friday, 2 PM", type: "Team" },
                      { title: "Charity Dinner", date: "Next Week", type: "Fundraiser" }
                    ].map((event, i) => (
                      <div key={i} className="p-4 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">{event.title}</div>
                            <div className="text-sm text-gray-500">{event.date}</div>
                            <div className="text-xs text-blue-600 mt-1">{event.type}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Dashboard;

// To use TypeScript features, you need to:
// 1. Rename the file to .tsx extension
// 2. Install TypeScript: npm install --save-dev typescript @types/react @types/node