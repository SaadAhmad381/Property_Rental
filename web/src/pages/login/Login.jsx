import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="body">
      <div className="tital2">
        <h1>
          <b> Property Rent</b>
        </h1>
      </div>
      <div className="login">
        <div className="heading">
          <h5>Login to property rent</h5>
        </div>
        <Form>
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              placeholder="Email address"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control type="text" placeholder="Password"></Form.Control>
          </Form.Group>
        </Form>
        <div className="button2">
          <Button variant="primary">
            <b> Login</b>
          </Button>{" "}
          <br />
          <br />
          <Link to="/">Forgotten account? ·Sign up for property rent </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
