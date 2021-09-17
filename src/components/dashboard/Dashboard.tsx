import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./Dashboard.scss";
export const Dashboard: React.FC = () => {
  const data = [
    { name: "1 Dec", uv: 50, pv: 2400, amt: 2400 },
    { uv: 100, pv: 2400, amt: 2400 },
    { name: "8 Dec", uv: 175, pv: 2400, amt: 2400 },
    { uv: 65, pv: 2400, amt: 2400 },
    { name: "16 Dec", uv: 85, pv: 2400, amt: 2400 },
    { uv: 160, pv: 2400, amt: 2400 },
    { name: "30 Dec", uv: 150, pv: 2400, amt: 2400 },
    { uv: 153, pv: 2400, amt: 2400 },
  ];
  return (
    <div className="dashboard">
      <div className="dhb_tasks">tasks</div>
      <div className="dhb_graphic">
        <div className="deals_graphic">
          <LineChart
            width={500}
            height={250}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" ticks={[]} />
            <YAxis domain={[0, 200]} />
            <Tooltip />
          </LineChart>
        </div>
        <div className="tasks_chart"></div>
      </div>
    </div>
  );
};