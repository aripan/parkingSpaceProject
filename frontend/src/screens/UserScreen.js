import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card, Button, Table } from "react-bootstrap";
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
        <Card className="text-center">
          <Card.Header
            style={{ textAlign: "center", textDecoration: "underline" }}
          >
            Details for {user.name}
          </Card.Header>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>Email:{user.email}</Card.Text>
            <Card.Text>Phone:{user.phone}</Card.Text>
            {user.address ? (
              <>
                <h5
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  Address
                </h5>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Street</th>
                      <th>Suite</th>
                      <th>City</th>
                      <th>Zipcode</th>
                      <th>Geo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.address.street}</td>
                      <td>{user.address.suite}</td>
                      <td>{user.address.city}</td>
                      <td>{user.address.zipcode}</td>
                      <td>
                        {user.address.geo.lat} & {user.address.geo.lng}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </>
            ) : null}
            ;
            {user.company ? (
              <>
                <h5
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  Company
                </h5>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>CatchPhrase</th>
                      <th>Bs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.company.name}</td>
                      <td>{user.company.catchPhrase}</td>
                      <td>{user.company.bs}</td>
                    </tr>
                  </tbody>
                </Table>
              </>
            ) : null}
          </Card.Body>
          <Card.Footer className="text-muted">
            Website: {user.website}
          </Card.Footer>
        </Card>
        <br />
      </Container>
    </div>
  ) : null;
};

export default UserScreen;
