import "./listbox.css";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { height } from "@mui/system";

export default function ListBox(props) {
  return (
    <Card id="listBoxCard" className="cardEach" style={{ width: "12rem" }}>
      <Card.Img variant="top" src={props.img} className="mb-0 pb-0" />
      <Card.Body className="mb-0 pb-0">
        <Card.Title className="mb-0 pb-0">
          {props.name} {props.code}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id="listBoxCard" className="mb-0 pb-0">
          ${props.price}{" "}
          <span
            className={props.change > 0 ? "positiveChange" : "negativeChange"}
          >
            {props.change.toFixed(2)}%
          </span>
        </ListGroup.Item>
        {/* <ListGroup.Item className="mb-0 pb-0">{props.change}%</ListGroup.Item> */}
        <ListGroup.Item id="listBoxCard" className="mb-0 pb-0">
          {props.cap}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className=" ">
        <Link to={`/info/${props.id}`}>
          <Button
            className="mt-0 "
            style={{ backgroundColor: "#76808b", border: "none" }}
          >
            More Info
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
