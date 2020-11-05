import React from "react";
import { Table } from "react-bootstrap";

const TopList = ({ totalSpace, occupied }) => {
  return (
    <>
      <h5 style={{ textAlign: "center", textDecoration: "underline" }}>
        Ranking by Occupancy
      </h5>
      <Table
        striped
        bordered
        hover
        responsive
        className=" text-center table-font-size"
      >
        <thead>
          <tr>
            <th></th>
            <th>Total Space</th>
            <th>Occupied(avg.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Berlin</td>
            <td>400</td>
            <td>70%</td>
          </tr>
          <tr>
            <td>Stuttgart</td>
            <td>350</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Munich</td>
            <td>350</td>
            <td>55%</td>
          </tr>
          <tr>
            <td>Krefeld</td>
            <td>250</td>
            <td>45%</td>
          </tr>
          <tr>
            <td>Hannover</td>
            <td>250</td>
            <td>45%</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TopList;
