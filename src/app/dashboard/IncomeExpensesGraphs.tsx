// IncomeExpensesGraphs.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const IncomeExpensesGraphs = () => {
 const data = [
   { month: 'Jan', income: 7500, expenses: 6125 },
   { month: 'Feb', income: 7200, expenses: 6000 },
   { month: 'Mar', income: 8000, expenses: 6500 },
   { month: 'Apr', income: 8400, expenses: 6800 },
   { month: 'May', income: 8600, expenses: 7100 },
   { month: 'Jun', income: 8800, expenses: 7300 },
   { month: 'Jul', income: 9000, expenses: 7500 },
   { month: 'Aug', income: 8900, expenses: 7400 },
   { month: 'Sep', income: 8700, expenses: 7200 },
   { month: 'Oct', income: 8500, expenses: 7000 },
   { month: 'Nov', income: 8300, expenses: 6800 },
   { month: 'Dec', income: 8100, expenses: 6600 },
 ];

 return (
   <div className="bg-white shadow-md rounded-lg p-6" style={{ width: '100%', height: '400px' }}>
     <h2 className="text-xl font-bold">Income and Expenses</h2>
     <ResponsiveContainer width="99%" height={400}>
       <LineChart data={data}>
         <XAxis dataKey="month" />
         <YAxis />
         <CartesianGrid strokeDasharray="3 3" />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="income" stroke="#82ca9d" />
         <Line type="monotone" dataKey="expenses" stroke="#ff7300" />
       </LineChart>
     </ResponsiveContainer>
   </div>
 );
};

export default IncomeExpensesGraphs;