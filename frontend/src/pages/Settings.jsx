import React, { useState } from 'react';

const Settings = () => {
  const [threshold, setThreshold] = useState(70);

  return (
    <div className="p-8 ml-64">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">System Configuration</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-2xl">
        <h2 className="text-lg font-bold mb-4">Risk Model Thresholds</h2>
        <p className="text-gray-500 text-sm mb-8">
            Adjust the sensitivity of the Anomaly Detection Engine. Lowering the threshold will increase safety but may cause more false positives.
        </p>

        <div className="mb-8">
            <label className="flex justify-between font-medium text-gray-700 mb-2">
                <span>Escalation Threshold (Current: {threshold}%)</span>
                <span className="text-indigo-600 font-bold">{threshold}%</span>
            </label>
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={threshold} 
                onChange={(e) => setThreshold(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>0% (Flag Everything)</span>
                <span>100% (Permissive)</span>
            </div>
        </div>

        <div className="border-t pt-6">
            <h3 className="font-bold mb-4">API Configurations</h3>
            <div className="grid gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">ML Microservice URL</label>
                    <input type="text" value="http://localhost:8000/analyze" disabled className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Bank Notification Webhook</label>
                    <input type="text" value="https://api.hdfc-dummy.com/v1/fraud-alerts" className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>
            </div>
        </div>
        
        <button className="mt-8 bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700">
            Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;