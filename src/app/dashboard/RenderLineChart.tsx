import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const RenderLineChart = () => {

const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
    {name: 'Page B', uv: 600, pv: 1400, amt: 2400}, 
    {name: 'Page C', uv: 700, pv: 2000, amt: 2400}, 
    {name: 'Page D', uv: 800, pv: 1900, amt: 2400}, 
];

return (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
};

export default RenderLineChart;