import React from 'react';

const Architecture = () => {
  return (
    <div className="p-8 ml-64">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Technical Architecture</h1>
      
      {/* Tech Stack Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 className="font-bold text-blue-800 mb-2">Frontend</h3>
          <p className="text-sm text-blue-700">React.js, TailwindCSS (UI Layer)</p>
          <p className="text-xs mt-2 text-blue-600">Problem Statement ID: F0002 [cite: 15]</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 className="font-bold text-green-800 mb-2">Backend</h3>
          <p className="text-sm text-green-700">Node.js, FastAPI (Microservices)</p>
          <p className="text-xs mt-2 text-green-600">Handles Auth & Transaction Logic [cite: 62]</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
          <h3 className="font-bold text-purple-800 mb-2">ML Engine</h3>
          <p className="text-sm text-purple-700">Python, NumPy, Pandas, Scikit-Learn</p>
          <p className="text-xs mt-2 text-purple-600">Anomaly Detection & Risk Scoring [cite: 62]</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Process Flow</h2>
        <div className="flex items-center justify-between text-center relative">
            <div className="absolute top-1/2 w-full h-1 bg-gray-200 -z-0"></div>
            {['Txn Initiated', 'Behavioral Analysis', 'Risk Scoring', 'Bank Escalation', 'User Verification'].map((step, i) => (
                <div key={i} className="relative z-10 bg-white px-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-2 font-bold shadow-md">{i+1}</div>
                    <p className="text-sm font-semibold text-gray-700">{step}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Architecture;