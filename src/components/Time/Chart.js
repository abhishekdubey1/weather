import React from "react";
import { AreaChart, Area } from "recharts";
const data = [
  { uv: 0 },
  { uv: 60 },
  { uv: 170 },
  { uv: 280 },
  { uv: 330 },
  { uv: 280 },
  { uv: 170 },
  { uv: 60 },
  { uv: 0 },
];
const Chart = () => {
  return (
    <div className="time__chart" style={{}}>
      <AreaChart
        width={(window.innerWidth / 100) * 50}
        height={135}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Area
          type="monotone"
          dataKey="uv"
          stroke="rgba(255, 111, 0, 0.404)"
          fillOpacity={1}
          fill="rgba(255, 255, 0, 0.05)"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
// static jsfiddleUrl = 'https://jsfiddle.net/alidingling/tv8zfzxo/';
// XAxis,
// YAxis,
// CartesianGrid,
// Tooltip,
