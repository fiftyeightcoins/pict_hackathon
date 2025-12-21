import React from 'react';
import { transactions } from '../data/mockData';

const Transactions = () => {
  const getStatusStyle = (status) => {
    switch(status) {
      case 'Approved': return 'bg-green-100 text-green-700';
      case 'Escalated': return 'bg-red-100 text-red-700';
      case 'Blocked': return 'bg-gray-800 text-white';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="p-8 ml-64">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Transaction Monitor</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold border-b">
              <th className="p-4">Transaction ID</th>
              <th className="p-4">User</th>
              <th className="p-4">Amount (INR)</th>
              <th className="p-4">Location</th>
              <th className="p-4">Risk Score</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {transactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-gray-50 transition">
                <td className="p-4 font-mono text-gray-600">{txn.id}</td>
                <td className="p-4 font-medium text-gray-800">{txn.user}<br/><span className="text-xs text-gray-400 font-normal">{txn.device}</span></td>
                <td className="p-4">₹ {txn.amount.toLocaleString('en-IN')}</td>
                <td className="p-4">{txn.location}</td>
                <td className="p-4">
                  <div className="flex items-center">
                    <span className={`font-bold mr-2 ${txn.risk > 70 ? 'text-red-600' : 'text-green-600'}`}>{txn.risk}%</span>
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${txn.risk > 70 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${txn.risk}%` }}></div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(txn.status)}`}>
                    {txn.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">Analyze</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;