import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const City = ({ city }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Link to={`/city/${city._id}`}>
          <Card.Title as="div">
            <h5>
              <strong>{city.name}</strong>
            </h5>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default City;
