import React from 'react';

const Impact = () => {
  return (
    <div className="p-8 ml-64">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Impact Analysis</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Social */}
        <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500 shadow-sm">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Social Impact</h3>
            <ul className="space-y-3 text-sm text-blue-900">
                <li className="flex items-start">
                    <span className="mr-2"></span>
                    <span><strong>Stronger Trust:</strong> Reduces false positives, ensuring reliable transactions for rural/elderly users.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2"></span>
                    <span><strong>Inclusive Adoption:</strong> High security encourages risk-averse users to adopt UPI/Digital banking.</span>
                </li>
            </ul>
        </div>

        {/* Economic */}
        <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500 shadow-sm">
            <h3 className="text-xl font-bold text-green-800 mb-4">Economic Impact</h3>
            <ul className="space-y-3 text-sm text-green-900">
                <li className="flex items-start">
                    <span className="mr-2"></span>
                    <span><strong>Reduced Losses:</strong> AI models reduce missed fraud by ~30% compared to rule-based systems.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2"></span>
                    <span><strong>Cost Savings:</strong> Automated detection lowers dependence on manual fraud review teams.</span>
                </li>
            </ul>
        </div>

        {/* Environmental */}
        <div className="bg-teal-50 p-6 rounded-xl border-t-4 border-teal-500 shadow-sm">
            <h3 className="text-xl font-bold text-teal-800 mb-4">Environmental</h3>
            <ul className="space-y-3 text-sm text-teal-900">
                <li className="flex items-start">
                    <span className="mr-2"></span>
                    <span><strong>Paperless Ops:</strong> Digital monitoring reduces physical paperwork and audit trails.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2"></span>
                    <span><strong>Energy Efficient:</strong> Scalable AI uses less resource overhead than manual call centers.</span>
                </li>
            </ul>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="font-bold text-gray-800 mb-2">Unique Outcome</h3>
        <p className="text-gray-600">
            "Positive User Experience: Fewer false blocks and quicker alerts mean users enjoy uninterrupted banking."
        </p>
      </div>
    </div>
  );
};

export default Impact;