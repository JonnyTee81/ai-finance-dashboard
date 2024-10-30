// BudgetingView.tsx
import { useState, useEffect } from 'react';

const BudgetingView = () => {
  const [budgets, setBudgets] = useState([
    { category: 'Housing', budget: 2000, actual: 1950 },
    { category: 'Groceries', budget: 800, actual: 750 },
    { category: 'Utilities', budget: 500, actual: 475 },
    { category: 'Transportation', budget: 400, actual: 350 },
    { category: 'Entertainment', budget: 300, actual: 275 },
  ]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold">Budgeting</h2>
      <div className="space-y-4">
        {budgets.map((budget) => (
          <div key={budget.category}>
            <h3 className="text-lg font-medium">{budget.category}</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${(budget.actual / budget.budget) * 100}%` }}
              />
            </div>
            <div className="flex justify-between">
              <span>${budget.actual.toLocaleString()}</span>
              <span>${budget.budget.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetingView;