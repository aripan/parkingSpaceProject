import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import axios from "axios";
// import cities from "../cities";
import PieChart from "../components/PieChart";
import AverageOccupancyChart from "../components/AverageOccupancyChart";
import ParkingSpace from "../components/ParkingSpace";
import TopList from "../components/TopList";

const CityScreen = ({ match }) => {
  const [city, setCity] = useState({});
  // const [hourlyOccupancy, setHourlyOccupancy] = useState([]);
  // const city = cities.find((c) => c._id === match.params.id);

  useEffect(() => {
    const fetchCity = async () => {
      const { data } = await axios.get(`/api/cities/${match.params.id}`);

      // const { data2 } = await axios.get(
      //   `/api/cities/${match.params.id}/hourlyOccupancy`
      // );
      console.log(data.hourlyOccupancy);
      setCity(data);
      // setHourlyOccupancy(data2);
    };

    fetchCity();
  }, []);

  return (
    <div className="backg-color">
      <Link className="btn btn-light m-3 border shadow" to="/">
        Go Back
      </Link>
      <Container>
        <Row>
          <Col md={5}>
            {" "}
            {/* <ParkingSpace /> */}
            <PieChart available={city.available} occupied={city.occupied} />
          </Col>
          <Col md={6}>
            {" "}
            <AverageOccupancyChart
              // hourlyOccupancy={[
              //   city.hourlyOccupancy[0],
              //   city.hourlyOccupancy[1],
              //   city.hourlyOccupancy[2],
              //   city.hourlyOccupancy[3],
              //   city.hourlyOccupancy[4],
              //   city.hourlyOccupancy[5],
              //   city.hourlyOccupancy[6],
              //   city.hourlyOccupancy[7],
              // ]}

              hourlyOccupancy={city.hourlyOccupancy}

              // occupancy1={city.hourlyOccupancy[0].occupancy1}
              // occupancy_avg1={city.hourlyOccupancy[0].occupancy_avg1}
              // occupancy2={city.hourlyOccupancy[1].occupancy2}
              // occupancy_avg2={city.hourlyOccupancy[1].occupancy_avg2}
              // occupancy3={city.hourlyOccupancy[2].occupancy3}
              // occupancy_avg3={city.hourlyOccupancy[2].occupancy_avg3}
              // occupancy4={city.hourlyOccupancy[3].occupancy4}
              // occupancy_avg4={city.hourlyOccupancy[3].occupancy_avg4}
              // occupancy5={city.hourlyOccupancy[4].occupancy5}
              // occupancy_avg5={city.hourlyOccupancy[4].occupancy_avg5}
              // occupancy6={city.hourlyOccupancy[5].occupancy6}
              // occupancy_avg6={city.hourlyOccupancy[5].occupancy_avg6}
              // occupancy7={city.hourlyOccupancy[6].occupancy7}
              // occupancy_avg7={city.hourlyOccupancy[6].occupancy_avg7}

              // occupancy1={city.hourlyOccupancy[0]}
              // occupancy2={city.hourlyOccupancy[1]}
              // occupancy3={city.hourlyOccupancy[2]}
              // occupancy4={city.hourlyOccupancy[3]}
              // occupancy5={city.hourlyOccupancy[4]}
              // occupancy6={city.hourlyOccupancy[5]}
              // occupancy7={city.hourlyOccupancy[6]}
            />
          </Col>
        </Row>

        <Row>
          <Col className="px-1">
            <TopList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CityScreen;
