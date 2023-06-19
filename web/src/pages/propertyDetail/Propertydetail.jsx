import React from "react";
import "./property.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

const Propertydetail = () => {
  return (
    <div>
      <div className="tital">
        <h1>
          <b> Property Rent</b>
        </h1>
      </div>
      <div className="propertydetail">
        <div className="heading">
          <h3>Enter property details</h3>

          <hr />
        </div>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>
              <b>Property image</b>
            </Form.Label>{" "}
            <br />
            <Form.Control type="text" placeholder="URL"></Form.Control>
          </Form.Group>
          <Form.Label>
            <b>Property location</b>
          </Form.Label>
          <br />
          <Form.Select>
            <option value="" disabled selected>
              City
            </option>
            <option value="option1">Daska</option>
            <option value="option2">Sialkot</option>
            <option value="option3">Sambrial</option>
            <option value="option3">Airport</option>
            <option value="option3">Waziranbad</option>
          </Form.Select>
          <br />
          <Form.Label>
            <b>Detail location</b>
          </Form.Label>
          <br />
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              placeholder="Enter detail location"
            ></Form.Control>
          </Form.Group>
          <Row>
            <Col>
              <Form.Label>
                <b>Property Type</b>
              </Form.Label>
              <br />
              <Form.Select>
                <option value="" disabled selected>
                  Property type
                </option>
                <option value="option1">Marla</option>
                <option value="option2">Kanal</option>
              </Form.Select>
            </Col>

            <Col>
              <Form.Label>
                <b>Area(Marla)</b>
              </Form.Label>

              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="how much marla/Kanal"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Label>
            <b>Price</b>
          </Form.Label>
          <br />
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              placeholder="min.price(Rs) - max.price(Rs)"
            ></Form.Control>
          </Form.Group>
          <div className="button">
            <Button variant="primary">
              <b> Submit</b>
            </Button>{" "}
            <br />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Propertydetail;
