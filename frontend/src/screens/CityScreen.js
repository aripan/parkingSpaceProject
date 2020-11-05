import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

import PieChart from "../components/PieChart";
import AverageOccupancyChart from "../components/AverageOccupancyChart";
// import ParkingSpace from "../components/ParkingSpace";
import TopList from "../components/TopList";

const CityScreen = ({ match }) => {
  const [city, setCity] = useState({});

  useEffect(() => {
    const fetchCity = async () => {
      const { data } = await axios.get(`/api/cities/${match.params.id}`);

      setCity(data);
    };

    fetchCity();
  }, [match]);

  return (
    <div className="backg-color">
      <Link className="btn btn-light m-3 border shadow" to="/cities">
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
            <AverageOccupancyChart hourlyOccupancy={city.hourlyOccupancy} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="px-1">
            <TopList totalSpace={city.totalSpace} occupied={city.occupied} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CityScreen;
