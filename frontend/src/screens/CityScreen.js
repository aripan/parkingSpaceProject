import React from "react";
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
import cities from "../cities";
import PieChart from "../components/PieChart";
import AverageOccupancyChart from "../components/AverageOccupancyChart";
import ParkingSpace from "../components/ParkingSpace";
import TopList from "../components/TopList";

const CityScreen = ({ match }) => {
  const city = cities.find((c) => c._id === match.params.id);

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
              hourlyOccupancy={city.hourlyOccupancy}
              // occupancy1={city.occupancy1}
              // occupancy2={city.occupancy2}
              // occupancy3={city.occupancy3}
              // occupancy4={city.occupancy4}
              // occupancy5={city.occupancy5}
              // occupancy6={city.occupancy6}
              // occupancy7={city.occupancy7}
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
