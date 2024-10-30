"use client"
// DashboardLayout.tsx
import DashboardSummary from './DashboardSummary';
import IncomeExpensesGraphs2 from './IncomeExpensesGraphs2';
import BudgetingView from './BudgetingView';
import TransactionsView from './TransactionsView';

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Personal Finance Dashboard</h1>
      </header>
      <div className="flex-1 grid grid-cols-12 gap-6 p-6">
        <div className="col-span-4">
          <DashboardSummary />
        </div>
        <div className="col-span-8">
          <IncomeExpensesGraphs2 />
        </div>
        <div className="col-span-6">
          <BudgetingView />
        </div>
        <div className="col-span-6">
          <TransactionsView />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;