// DashboardSummary.tsx
import { useState, useEffect } from 'react';

const DashboardSummary = () => {
  const [financialData, setFinancialData] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    debtPayoff: 0,
    totalSavings: 0,
  });

  useEffect(() => {
    // Fetch financial data from database or financial integrations
    const data = {
      totalIncome: 86468,
      totalExpenses: 36273,
      debtPayoff: 13010,
      totalSavings: 37184,
    };
    setFinancialData(data);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold">Dashboard Summary</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-medium">Total Income</h3>
          <p className="text-3xl font-bold">${financialData.totalIncome.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Total Expenses</h3>
          <p className="text-3xl font-bold">${financialData.totalExpenses.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Debt Payoff</h3>
          <p className="text-3xl font-bold">${financialData.debtPayoff.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Total Savings</h3>
          <p className="text-3xl font-bold">${financialData.totalSavings.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;