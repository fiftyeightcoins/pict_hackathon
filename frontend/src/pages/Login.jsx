import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">FRAUD<span className="text-slate-800">GUARD</span></h1>
          <p className="text-sm text-gray-500 mt-2">Team cannoncrew (ID: 458)</p>
        </div>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500" placeholder="e.g. EMP-458" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500" placeholder="••••••••" />
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-lg transition">
            Login to Dashboard
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-gray-400">
          SECURE BANKING PORTAL • AUTHORIZED PERSONNEL ONLY
        </div>
      </div>
    </div>
  );
};

export default Login;