import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Architecture from './pages/Architecture';
import Login from './pages/Login';
// New Imports
import Alerts from './pages/Alerts';
import Escalations from './pages/Escalations';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Impact from './pages/Impact'; // Optional, if you want to link it

const Layout = ({ children }) => {
  const location = useLocation();
  if (location.pathname === '/login') return children;
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-slate-50">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/escalations" element={<Escalations />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/impact" element={<Impact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;