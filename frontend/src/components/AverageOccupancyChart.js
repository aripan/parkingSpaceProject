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

// const data = [
//   {
//     name: "6:00",
//     Occupancy: 100,
//     Occupancy_avg: 95,
//     amt: 400,
//   },
//   {
//     name: "9:00",
//     Occupancy: 180,
//     Occupancy_avg: 95,
//     amt: 400,
//   },
//   {
//     name: "12:00",
//     Occupancy: 260,
//     Occupancy_avg: 150,
//     amt: 400,
//   },
//   {
//     name: "15:00",
//     Occupancy: 300,
//     Occupancy_avg: 186,
//     amt: 400,
//   },
//   {
//     name: "18:00",
//     Occupancy: 220,
//     Occupancy_avg: 174,
//     amt: 400,
//   },
//   {
//     name: "21:00",
//     Occupancy: 120,
//     Occupancy_avg: 114,
//     amt: 400,
//   },
//   {
//     name: "24:00",
//     Occupancy: 100,
//     Occupancy_avg: 74,
//     amt: 400,
//   },
// ];

const AverageOccupancyChart = ({ hourlyOccupancy }) => {
  return hourlyOccupancy ? (
    <>
      <h5 style={{ textAlign: "center", textDecoration: "underline" }}>
        Occupancy Trend
      </h5>
      <LineChart
        width={400}
        height={300}
        data={[
          {
            name: "6:00",
            Occupancy: hourlyOccupancy[0].occupancy1,
            Occupancy_avg: hourlyOccupancy[0].occupancy_avg1,
            amt: 400,
          },
          {
            name: "9:00",
            Occupancy: hourlyOccupancy[1].occupancy2,
            Occupancy_avg: hourlyOccupancy[1].occupancy_avg2,
            amt: 400,
          },
          {
            name: "12:00",
            Occupancy: hourlyOccupancy[2].occupancy3,
            Occupancy_avg: hourlyOccupancy[2].occupancy_avg3,
            amt: 400,
          },
          {
            name: "15:00",
            Occupancy: hourlyOccupancy[3].occupancy4,
            Occupancy_avg: hourlyOccupancy[3].occupancy_avg4,
            amt: 400,
          },
          {
            name: "18:00",
            Occupancy: hourlyOccupancy[4].occupancy5,
            Occupancy_avg: hourlyOccupancy[4].occupancy_avg5,
            amt: 400,
          },
          {
            name: "21:00",
            Occupancy: hourlyOccupancy[5].occupancy6,
            Occupancy_avg: hourlyOccupancy[5].occupancy_avg6,
            amt: 400,
          },
          {
            name: "24:00",
            Occupancy: hourlyOccupancy[6].occupancy7,
            Occupancy_avg: hourlyOccupancy[6].occupancy_avg7,
            amt: 400,
          },
        ]}
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
    </>
  ) : null;
};

export default AverageOccupancyChart;
