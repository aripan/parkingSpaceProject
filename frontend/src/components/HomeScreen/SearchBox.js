import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="center mx-auto">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="search..."
        className="mr-sm-2 ml-sm-5  "
      ></Form.Control>
      <Button type="submit" variant="outline-warning" className="p-2">
        Select
      </Button>
    </Form>
  );
};

export default SearchBox;