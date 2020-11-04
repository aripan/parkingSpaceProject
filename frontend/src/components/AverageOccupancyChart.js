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

const AverageOccupancyChart = ({
  hourlyOccupancy,
  // occupancy1,
  // occupancy2,
  // occupancy3,
  // occupancy4,
  // occupancy5,
  // occupancy6,
  // occupancy7,
}) => {
  // const hourlyOccupancy1 = hourlyOccupancy[0];
  // const hourlyOccupancy_avg1 = hourlyOccupancy[0];
  // const hourlyOccupancy2 = hourlyOccupancy[1][0];
  // const hourlyOccupancy_avg2 = hourlyOccupancy[1][1];
  // const hourlyOccupancy3 = hourlyOccupancy[2][0];
  // const hourlyOccupancy_avg3 = hourlyOccupancy[2][1];
  // const hourlyOccupancy4 = hourlyOccupancy[3][0];
  // const hourlyOccupancy_avg4 = hourlyOccupancy[3][1];
  // const hourlyOccupancy5 = hourlyOccupancy[4][0];
  // const hourlyOccupancy_avg5 = hourlyOccupancy[4][1];
  // const hourlyOccupancy6 = hourlyOccupancy[5][0];
  // const hourlyOccupancy_avg6 = hourlyOccupancy[5][1];
  // const hourlyOccupancy7 = hourlyOccupancy[6][0];
  // const hourlyOccupancy_avg7 = hourlyOccupancy[6][1];

  return (
    <LineChart
      width={450}
      height={300}
      // data={[
      //   {
      //     name: "6:00",
      //     Occupancy: occupancy1[0],
      //     Occupancy_avg: occupancy1[1],
      //     amt: 400,
      //   },
      //   {
      //     name: "9:00",
      //     Occupancy: occupancy2[0],
      //     Occupancy_avg: occupancy2[1],
      //     amt: 400,
      //   },
      //   {
      //     name: "12:00",
      //     Occupancy: occupancy3[0],
      //     Occupancy_avg: occupancy3[1],
      //     amt: 400,
      //   },
      //   {
      //     name: "15:00",
      //     Occupancy: occupancy4[0],
      //     Occupancy_avg: occupancy4[1],
      //     amt: 400,
      //   },
      //   {
      //     name: "18:00",
      //     Occupancy: occupancy5[0],
      //     Occupancy_avg: occupancy5[1],
      //     amt: 400,
      //   },
      //   {
      //     name: "21:00",
      //     Occupancy: occupancy6[0],
      //     Occupancy_avg: occupancy6[1],
      //     amt: 400,
      //   },
      //   {
      //     name: "24:00",
      //     Occupancy: occupancy7[0],
      //     Occupancy_avg: occupancy7[1],
      //     amt: 400,
      //   },
      // ]}

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
  );
};

export default AverageOccupancyChart;
