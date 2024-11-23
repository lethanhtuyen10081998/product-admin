import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = () => {
  const { t } = useTranslation();
  const [opacity, setOpacity] = React.useState({
    uv: 1,
    pv: 1,
  });

  const data = [
    {
      name: t('common:month.1').substring(0, 3),
      uv: 4000,
      pv: 2400,
      ui: 700,
      amt: 2400,
    },
    {
      name: t('common:month.2').substring(0, 3),
      uv: 3000,
      pv: 1398,
      ui: 600,
      amt: 2210,
    },
    {
      name: t('common:month.3').substring(0, 3),
      uv: 2000,
      pv: 9800,
      ui: 4500,
      amt: 2290,
    },
    {
      name: t('common:month.4').substring(0, 3),
      uv: 2780,
      pv: 3908,
      ui: 8900,
      amt: 2000,
    },
    {
      name: t('common:month.5').substring(0, 3),
      uv: 1890,
      pv: 4800,
      ui: 7800,
      amt: 2181,
    },
    {
      name: t('common:month.6').substring(0, 3),
      uv: 2390,
      pv: 3800,
      ui: 2300,
      amt: 2500,
    },
    {
      name: t('common:month.7').substring(0, 3),
      uv: 3490,
      pv: 986,
      ui: 2600,
      amt: 2100,
    },
    {
      name: t('common:month.8').substring(0, 3),
      uv: 2334,
      pv: 8990,
      ui: 4446,
      amt: 2100,
    },
    {
      name: t('common:month.9').substring(0, 3),
      uv: 8490,
      pv: 3441,
      ui: 123,
      amt: 2100,
    },
    {
      name: t('common:month.10').substring(0, 3),
      uv: 6009,
      pv: 3399,
      ui: 1434,
      amt: 2100,
    },
    {
      name: t('common:month.11').substring(0, 3),
      uv: 3490,
      pv: 4300,
      ui: 2600,
      amt: 2100,
    },
    {
      name: t('common:month.12').substring(0, 3),
      uv: 3490,
      pv: 4300,
      ui: 2600,
      amt: 2100,
    },
  ];

  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
            right: 10,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line
            type='monotone'
            dataKey='pv'
            strokeOpacity={opacity.pv}
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='uv' strokeOpacity={opacity.uv} stroke='#ff3232' />
          <Line type='monotone' dataKey='ui' strokeOpacity={opacity.uv} stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
