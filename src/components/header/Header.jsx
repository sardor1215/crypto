import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./header.css";

import { useContext } from "react";

export default function Header() {
  function searchHandler() {}
  return (
    <Container className="header">
      <Row>
        <Col id md={6} sx={12}>
          <Link to="/">
            <h1>
              Cryp
              <span style={{ color: "#f7931a", fontSize: "3rem" }}>To</span>
            </h1>
          </Link>
        </Col>
        <Col md={6} sx={12}></Col>
      </Row>
    </Container>
  );
}
