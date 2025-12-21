import React from 'react';
import { transactions, alerts } from '../data/mockData';
import { TrendingUp, Users, ShieldCheck, AlertOctagon } from 'lucide-react';

const StatCard = ({ title, value, subtext, color, icon: Icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800 mt-2">{value}</h3>
      <p className={`text-xs mt-2 ${color}`}>{subtext}</p>
    </div>
    <div className={`p-3 rounded-lg ${color.replace('text-', 'bg-').replace('600', '100').replace('500', '100')}`}>
      <Icon size={24} className={color.split(' ')[0]} />
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-8 ml-64">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Operational Overview</h1>
        <p className="text-gray-500">Real-time fraud monitoring for UPI & Net Banking</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Transactions" value="₹ 4.2 Cr" subtext="+12% from yesterday" color="text-indigo-600" icon={TrendingUp} />
        <StatCard title="Fraud Blocked" value="₹ 12.5 L" subtext="32 attempts prevented" color="text-green-600" icon={ShieldCheck} />
        <StatCard title="Active Risks" value="14" subtext="Requires immediate attention" color="text-red-500" icon={AlertOctagon} />
        <StatCard title="User Profiles" value="1,240" subtext="Behavioral models active" color="text-blue-500" icon={Users} />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Recent Alerts */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Live Security Feed</h3>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start p-3 bg-gray-50 rounded-lg border-l-4 border-red-500">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded uppercase">{alert.severity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Health / Quick Actions */}
        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
          <h3 className="font-bold text-lg mb-4 text-indigo-400">System Status</h3>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span>ML Engine (FastAPI)</span>
              <span className="text-green-400">● Online</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span>Node Gateway</span>
              <span className="text-green-400">● Online</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span>DB Latency</span>
              <span className="text-yellow-400">45ms</span>
            </div>
          </div>
          
          <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition">
            Run System Diagnostics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;