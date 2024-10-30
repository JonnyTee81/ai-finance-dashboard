"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const IncomeExpensesGraphs2 = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Expenses',
            data: [65, 59, 80, 81, 56],
            fill: false,
            borderColor: 'rgb(235, 64, 52)',
            tension: 0.1,
          },
          {
            label: 'Income',
            data: [81, 22, 91, 55, 42],
            fill: false,
            borderColor: 'rgb(26, 171, 60)',
            tension: 0.1,
          },
        ],
      };

      return (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold">Income and Expenses</h2>
          <Line width="99%" height={400} data={data} />
        </div>
      );
};

export default IncomeExpensesGraphs2;