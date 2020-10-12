import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ChartView = ({ hourly }) => {
  return (
    <div>
      <AreaChart
        width={1374}
        height={250}
        data={hourly}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="rgb(0, 166, 250)" stopOpacity={0.8} />
            <stop offset="65%" stopColor="rgb(0, 166, 250)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />

        <CartesianGrid strokeDasharray="1 10" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="temp"
          stroke="rgb(0, 166, 250)"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default ChartView;

/* <Area type='monotone' dataKey='temp' stroke='rgb(0, 166, 250)' fillOpacity={1} fill='rgb(0, 166, 250)' /> */
