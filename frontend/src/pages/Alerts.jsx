import React from 'react';
import { Bell, Info, AlertTriangle, AlertOctagon } from 'lucide-react';
import { alerts } from '../data/mockData'; // Reuse existing mock data or add more

const Alerts = () => {
  // Extended dummy data for this view
  const extendedAlerts = [
    ...alerts,
    { id: 4, message: "System Update: Fraud definitions updated to v2.1", time: "2 hours ago", severity: "Low" },
    { id: 5, message: "Database Latency High (Region: Mumbai)", time: "3 hours ago", severity: "Medium" },
    { id: 6, message: "Multiple OTP failures - User ID 8821", time: "5 hours ago", severity: "High" }
  ];

  const getIcon = (severity) => {
    switch(severity) {
      case 'Critical': return <AlertOctagon className="text-red-600" />;
      case 'High': return <AlertTriangle className="text-orange-500" />;
      case 'Medium': return <Bell className="text-yellow-500" />;
      default: return <Info className="text-blue-500" />;
    }
  };

  return (
    <div className="p-8 ml-64">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">System Alerts</h1>
        <button className="text-sm text-indigo-600 font-medium hover:underline">Mark all as read</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {extendedAlerts.map((alert, index) => (
          <div key={alert.id} className={`p-5 flex items-start border-b border-gray-100 hover:bg-gray-50 transition ${index === extendedAlerts.length - 1 ? 'border-none' : ''}`}>
            <div className="mt-1 mr-4">
              {getIcon(alert.severity)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold text-gray-800">{alert.message}</h4>
                <span className="text-xs text-gray-400">{alert.time}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Source: Core Banking Interface • ID: #{202400 + alert.id}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;