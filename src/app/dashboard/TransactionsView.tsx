// TransactionsView.tsx
import { useState, useEffect } from 'react';

const TransactionsView = () => {
  const [transactions, setTransactions] = useState([
    { date: '2023-04-01', description: 'Rent Payment', amount: -2000, category: 'Housing' },
    { date: '2023-04-03', description: 'Grocery Shopping', amount: -150, category: 'Groceries' },
    { date: '2023-04-05', description: 'Electricity Bill', amount: -75, category: 'Utilities' },
    { date: '2023-04-07', description: 'Fuel Purchase', amount: -40, category: 'Transportation' },
    { date: '2023-04-10', description: 'Dining Out', amount: -75, category: 'Entertainment' },
  ]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold">Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left pb-2">Date</th>
            <th className="text-left pb-2">Description</th>
            <th className="text-right pb-2">Amount</th>
            <th className="text-left pb-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className={transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}>
              <td className="py-2">{transaction.date}</td>
              <td className="py-2">{transaction.description}</td>
              <td className="py-2 text-right">${Math.abs(transaction.amount).toLocaleString()}</td>
              <td className="py-2">{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsView;