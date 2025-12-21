import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

const ReportCard = ({ title, date, size }) => (
  <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center justify-between hover:shadow-md transition">
    <div className="flex items-center">
      <div className="bg-indigo-50 p-3 rounded-lg mr-4">
        <FileText className="text-indigo-600" size={24} />
      </div>
      <div>
        <h4 className="font-bold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500">Generated: {date} • {size}</p>
      </div>
    </div>
    <button className="text-gray-400 hover:text-indigo-600">
      <Download size={20} />
    </button>
  </div>
);

const Reports = () => {
  return (
    <div className="p-8 ml-64">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Compliance & Reports</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-gray-700 mb-4 flex items-center"><Calendar size={18} className="mr-2"/> Monthly Statements</h3>
          <div className="space-y-4">
            <ReportCard title="Fraud Risk Summary - Nov 2025" date="Dec 01, 2025" size="2.4 MB" />
            <ReportCard title="Blocked Transactions Audit" date="Nov 15, 2025" size="1.1 MB" />
            <ReportCard title="Escalation Performance Report" date="Oct 31, 2025" size="3.2 MB" />
          </div>
        </div>

        <div className="bg-indigo-900 text-white p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-2">Live Data Export</h3>
          <p className="text-indigo-200 text-sm mb-6">
            Export raw transaction logs for external analysis in Python/R. Includes JSON and CSV formats.
          </p>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-indigo-800 p-3 rounded-lg">
                <span>transactions_live.csv</span>
                <button className="text-xs bg-white text-indigo-900 px-3 py-1 rounded font-bold">Download</button>
            </div>
            <div className="flex justify-between items-center bg-indigo-800 p-3 rounded-lg">
                <span>user_behavior_logs.json</span>
                <button className="text-xs bg-white text-indigo-900 px-3 py-1 rounded font-bold">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;