import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Example = () => {
  return (
    <PieChart width={200} height={300}>
      <Pie
        data={data}
        innerRadius={70}
        outerRadius={100}
        fill='#8884d8'
        paddingAngle={2}
        dataKey='value'
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Legend />
    </PieChart>
  );
};

export default Example;
