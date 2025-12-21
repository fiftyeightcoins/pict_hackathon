import React, { useState } from 'react';
import { ShieldAlert, CheckCircle, XCircle } from 'lucide-react';

const Escalations = () => {
  const [escalations, setEscalations] = useState([
    { id: "ESC-2025-001", txnId: "TXN-UPI-9821", user: "Rajesh Kumar", amount: 45000, reason: "Location Anomaly (Pune -> Lagos)", risk: 88, time: "10:42 AM" },
    { id: "ESC-2025-002", txnId: "TXN-NB-1122", user: "Amit Verma", amount: 150000, reason: "High Value + New Device", risk: 95, time: "09:15 AM" },
    { id: "ESC-2025-003", txnId: "TXN-CC-8892", user: "Kavita Das", amount: 78000, reason: "Velocity Check (3 txns in 5 mins)", risk: 78, time: "Yesterday" },
  ]);

  const handleAction = (id, action) => {
    // In a real app, this would make an API call
    alert(`${action} applied to Case ${id}`);
    setEscalations(escalations.filter(e => e.id !== id));
  };

  return (
    <div className="p-8 ml-64">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Fraud Escalation Queue</h1>
        <p className="text-gray-500">Manual review for high-risk flags and actions</p>
      </header>

      <div className="grid gap-6">
        {escalations.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-xl text-gray-400">
            <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
            <p>All clear! No pending escalations.</p>
          </div>
        ) : (
          escalations.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded mr-3">CRITICAL</span>
                  <h3 className="font-bold text-gray-800">{item.user} <span className="text-gray-400 font-normal">({item.txnId})</span></h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">Reason: <span className="font-medium text-red-600">{item.reason}</span></p>
                <p className="text-xs text-gray-500">Amount: ₹{item.amount.toLocaleString('en-IN')} • Time: {item.time}</p>
              </div>
              
              <div className="flex items-center space-x-6 mr-6">
                 <div className="text-center">
                    <span className="block text-2xl font-bold text-red-600">{item.risk}%</span>
                    <span className="text-xs text-gray-400">AI Risk Score</span>
                 </div>
              </div>

              <div className="flex space-x-3">
                <button 
                  onClick={() => handleAction(item.id, "Freeze Account")}
                  className="flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 font-medium transition"
                >
                  <ShieldAlert size={16} className="mr-2" /> Freeze
                </button>
                <button 
                   onClick={() => handleAction(item.id, "Release Transaction")}
                   className="flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 font-medium transition"
                >
                  <CheckCircle size={16} className="mr-2" /> Release
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Escalations;