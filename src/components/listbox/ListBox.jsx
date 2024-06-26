import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { height } from "@mui/system";

export default function ListBox(props) {
  return (
    <tr class="text-yel hover:bg-yel hover:text-lightBlue pb-1  ">
      <td class=" text-ms font-semibold w-16 text-center ">
        <Link to={`/info/${props.id}`}>
          <span className="">{props.rank}</span>
        </Link>
      </td>
      <td class="px-10  ">
        <Link to={`/info/${props.id}`}>
          <div class="flex items-center text-sm ">
            <div class="relative w-10 h-10 mr-3 rounded-full md:block">
              <img
                class="object-cover w-full h-full rounded-full"
                src={props.img}
                alt=""
                loading="lazy"
              />
              <div
                class="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <p class="font-semibold   text-white  ">{props.name}</p>
            </div>
          </div>
        </Link>
      </td>

      <td class=" text-ms font-semibold   text-start">
        <span className="ml-6 ">${props.price}</span>
      </td>

      <td class="px-4 text-xs ">
        <span class=" font-semibold text-base text-green-700  rounded-sm">
          <span
            className={props.change > 0 ? "positiveChange" : "text-red-700"}
          >
            {props.change.toFixed(2)}%
          </span>
        </span>
      </td>
      <td class="px-4  font-semibold text-base  text-start">
        <span className="ml-4 ">{props.cap.toLocaleString("de-DE")}</span>
      </td>
    </tr>

    // <Card id="listBoxCard" className="cardEach" style={{ width: "12rem" }}>
    //   <Link to={`/info/${props.id}`}>
    //     <Card.Img variant="top" src={props.img} className="mb-0 pb-0" />
    //   </Link>
    //   <Card.Body className="mb-0 pb-0">
    //     <Card.Title className="mb-0 pb-0">
    //       {props.name} {props.code}
    //     </Card.Title>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item id="listBoxCard" className="mb-0 pb-0">
    //       ${props.price}{" "}
    //       <span
    //         className={props.change > 0 ? "positiveChange" : "negativeChange"}
    //       >
    //         {props.change.toFixed(2)}%
    //       </span>
    //     </ListGroup.Item>
    //     {/* <ListGroup.Item className="mb-0 pb-0">{props.change}%</ListGroup.Item> */}
    //     <ListGroup.Item id="listBoxCard" className="mb-0 pb-0">
    //       {props.cap}
    //     </ListGroup.Item>
    //   </ListGroup>
    //   <Card.Body className=" ">
    //     <Link to={`/info/${props.id}`}>
    //       <Button
    //         className="mt-0 "
    //         style={{ backgroundColor: "#76808b", border: "none" }}
    //       >
    //         More Info
    //       </Button>
    //     </Link>
    //   </Card.Body>
    // </Card>
  );
}
