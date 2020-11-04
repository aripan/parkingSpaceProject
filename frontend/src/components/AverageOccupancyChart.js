import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "6:00",
    Occupancy: 100,
    Occupancy_avg: 95,
    amt: 400,
  },
  {
    name: "9:00",
    Occupancy: 180,
    Occupancy_avg: 95,
    amt: 400,
  },
  {
    name: "12:00",
    Occupancy: 260,
    Occupancy_avg: 150,
    amt: 400,
  },
  {
    name: "15:00",
    Occupancy: 300,
    Occupancy_avg: 186,
    amt: 400,
  },
  {
    name: "18:00",
    Occupancy: 220,
    Occupancy_avg: 174,
    amt: 400,
  },
  {
    name: "21:00",
    Occupancy: 120,
    Occupancy_avg: 114,
    amt: 400,
  },
  {
    name: "24:00",
    Occupancy: 100,
    Occupancy_avg: 74,
    amt: 400,
  },
];

const AverageOccupancyChart = () => {
  return (
    <LineChart
      width={450}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Occupancy"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Occupancy_avg" stroke="#82ca9d" />
    </LineChart>
  );
};

export default AverageOccupancyChart;
