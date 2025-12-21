import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, AlertTriangle, List, ShieldAlert, FileText, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: List, label: "Live Transactions", path: "/transactions" },
    { icon: AlertTriangle, label: "Risk Alerts", path: "/alerts" },
    { icon: ShieldAlert, label: "Escalations", path: "/escalations" },
    { icon: FileText, label: "Reports", path: "/reports" },
    { icon: Settings, label: "System Config", path: "/settings" },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col shadow-xl">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-indigo-400 tracking-wider">FRAUD<span className="text-white">GUARD</span></h1>
        <p className="text-xs text-gray-400 mt-1">Team cannoncrew (ID: 458)</p>
      </div>
      
      <nav className="flex-1 mt-6">
        {menuItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
              location.pathname === item.path 
              ? "bg-indigo-600 text-white border-r-4 border-white" 
              : "text-gray-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <item.icon size={20} className="mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-700">
        <button className="flex items-center text-red-400 hover:text-red-300 text-sm font-medium">
          <LogOut size={18} className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;