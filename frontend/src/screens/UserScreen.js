import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

import PieChart from "../components/PieChart";
import AverageOccupancyChart from "../components/AverageOccupancyChart";
// import ParkingSpace from "../components/ParkingSpace";
import TopList from "../components/TopList";

const UserScreen = ({ match }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/api/cities/${match.params.id}`);
      console.log(data.address);

      setUser(data);
    };

    fetchUser();
  }, [match]);

  return user ? (
    <div className="backg-color">
      <Link className="btn btn-light m-3 border shadow" to="/cities">
        Go Back
      </Link>
      <Container>
        <Row>{user.name}</Row>
        <Row>{user.username}</Row>
      </Container>
    </div>
  ) : null;
};

export default UserScreen;
