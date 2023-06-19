import React from "react";
import "./signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="main">
      <div className="tital">
        <h1>
          <b> Property Rent</b>
        </h1>
      </div>
      <div className="signup">
        <div className="heading">
          <h3>Create a new account</h3>
          <p>it's quick and easy</p>
          <hr />
        </div>

        <Form>
          <Form.Group className="mb-4">
            <Form.Label>
              <b>Full Name</b>
            </Form.Label>{" "}
            <br />
            <Form.Control type="text" placeholder="Full Name"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>
              <b>Email</b>
            </Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder="Email Address"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>
              <b>Password</b>
            </Form.Label>
            <br />
            <Form.Control
              type="password"
              placeholder="New password"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>
              <b>Contact Number</b>
            </Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder="Contact Number"
            ></Form.Control>
          </Form.Group>
          <Form.Label>
            <b>Who you are?</b>
          </Form.Label>
          <br />
        </Form>
        <div className="button">
          <Button variant="primary">
            <b> Sign Up</b>
          </Button>{" "}
          <br />
          <br />
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
