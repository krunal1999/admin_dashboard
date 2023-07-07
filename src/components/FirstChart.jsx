import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const FirstChart = () => {
  const data = [
    {
      name: "Jan", Total:200
    },
    {
      name: "Feb", Total:400
    },
    {
      name: "Mar", Total:200
    },
    {
      name: "April", Total:1100
    },
    {
      name: "May", Total:1990
    },
    {
      name: "June", Total:900
    },
    {
      name: "July", Total:1090
    },
  ];

  return (
        <>
        <div className="title">years</div>
    <ResponsiveContainer width="100%" height="100%" aspect={2/1}>
        
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 20, right: 40, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="Total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
        />
        
      </AreaChart>
    </ResponsiveContainer>
    </>
  );
};

export default FirstChart;
