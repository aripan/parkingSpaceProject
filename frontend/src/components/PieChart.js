import React from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ available, occupied }) => {
  return (
    <Chart
      width={500}
      height={300}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Space", "Number"],
        ["Available", available],
        ["Occupied", occupied],
      ]}
      options={{
        title: `Parking Space (${available + occupied})`,

        // Just add this option
        is3D: true,
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
};

export default PieChart;
