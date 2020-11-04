import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";
import Logo from "../components/Logo";
import City from "../components/City";
// import cities from "../cities";

const HomeScreen = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const { data } = await axios.get("/api/cities");

      setCities(data);
    };

    fetchCities();
  }, []);

  return (
    <div className="">
      <Header />
      <div style={{ display: "flex" }}>
        <Logo />
        <Container>
          <h1>Cities</h1>
          <Row>
            {cities.map((city) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                {/* <h3>{city.name}</h3> */}
                <City city={city} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeScreen;
