import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";
import Logo from "../components/Logo";
import City from "../components/City";
// import cities from "../cities";

const HomeScreen = () => {
  const [parkingLots, setParkingLots] = useState([]);

  useEffect(() => {
    const fetchParkingLots = async () => {
      const { data } = await axios.get("/api/parkinglots");

      console.log(data);
      setParkingLots(data);
    };

    fetchParkingLots();
  }, []);

  return (
    <div className="">
      <Header />
      <div style={{ display: "flex" }}>
        <Logo />
        <Container>
          <h1>Available Parking Lots</h1>
          {/* <Row>
            {parkingLots.map((parkingLot) => (
              <Col key={parkingLot.id} sm={12} md={6} lg={4} xl={3}>
                <h3>{parkingLot.name}</h3>
                <City city={city} />
              </Col>
            ))}
          </Row> */}
        </Container>
      </div>
    </div>
  );
};

export default HomeScreen;
