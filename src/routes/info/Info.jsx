import { FaExchangeAlt } from "react-icons/fa";

import axios from "axios";
import "./info.css";
import {
  Col,
  Container,
  Row,
  ButtonGroup,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import ListBox from "../../components/listbox/ListBox";
import Loading from "../../tools/Loading";
import { ListItem } from "@mui/material";

export default function Info() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://api.coingecko.com/api/v3/coins/" + id;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [currency, setCurrency] = useState("usd");
  const [priceInUsd, setPriceInUsd] = useState(0);
  const [currencySign, setCurrencySign] = useState("$");
  const [exchangeValue, setExchangeValue] = useState(0);
  const [exchangeValueDollar, setExchangeValueDollar] = useState(0);
  function exchangeHandler(amount, option) {
    if (option === "1") {
      setExchangeValueDollar(amount * data.market_data.current_price[currency]);
    } else {
      setExchangeValue(amount / data.market_data.current_price[currency]);
    }
  }

  // const price = "market_data" + "current_price" + currency;
  function currencyHandler(sign) {
    setCurrency(sign);
    if (sign === "usd") {
      setCurrencySign("$");
    } else if (sign === "rub") {
      setCurrencySign("₽");
    } else if (sign === "try") {
      setCurrencySign("₺");
    } else if (sign === "gbp") {
      setCurrencySign("£");
    } else if (sign === "eur") {
      setCurrencySign("€");
    }
  }
  return (
    <div>
      <Header />
      <div className="justify-start">
        <Link className="" to="/">
          <h1 className="no-underline hover:text-yel text-5xl">
            Cryp
            <span className=" text-yel  text-7xl">To</span>
          </h1>
        </Link>
      </div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <Container className="infoContainer">
            <Row className="firstRow">
              <Col>
                <img id="signImg" src={data.image.large} />
              </Col>
              <Col className="leftLine">
                <div>
                  {data.name}
                  {"("}
                  {data.symbol.toUpperCase()}
                  {")"}
                </div>

                <div id="priceBox">
                  {currencySign}
                  {data.market_data.current_price[currency]}{" "}
                  <span
                    id="changeBox"
                    className={
                      data.market_data.price_change_percentage_24h > 0
                        ? "positiveChangeToBox"
                        : "negativeChangeToBox"
                    }
                  >
                    {data.market_data.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
              </Col>
              <Col className="leftLine">
                <div>
                  HIGH:{" "}
                  <span style={{ color: "white", fontSize: "2rem" }}>
                    {currencySign}
                    {data.market_data.high_24h[currency]}
                  </span>
                </div>

                <div>
                  LOW:{" "}
                  <span style={{ color: "white", fontSize: "2rem" }}>
                    {currencySign}
                    {data.market_data.low_24h[currency]}
                  </span>
                </div>
              </Col>
              <Col className="leftLine">
                <span>
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      onClick={(e) => currencyHandler(e.target.value)}
                      value="usd"
                      variant="secondary"
                    >
                      USD
                    </Button>
                    <Button
                      onClick={(e) => currencyHandler(e.target.value)}
                      value="rub"
                      variant="secondary"
                    >
                      RUB
                    </Button>
                    <Button
                      onClick={(e) => currencyHandler(e.target.value)}
                      value="try"
                      variant="secondary"
                    >
                      TRY
                    </Button>
                    <Button
                      onClick={(e) => currencyHandler(e.target.value)}
                      value="gbp"
                      variant="secondary"
                    >
                      GBP
                    </Button>
                    <Button
                      onClick={(e) => currencyHandler(e.target.value)}
                      value="eur"
                      variant="secondary"
                    >
                      EUR
                    </Button>
                  </ButtonGroup>
                </span>
              </Col>
            </Row>
            <hr style={{ borderTop: "3px solid #f7931a" }}></hr>
            <Row>
              <Col>
                <Row id="exchangeBox">
                  <Col>
                    <img src={data.image.small} />
                    <span>
                      <div style={{ fontSize: "1.4rem", color: "white" }}>
                        {data.symbol.toUpperCase()}
                      </div>
                    </span>
                  </Col>
                  <Col className="leftLine">
                    <input
                      id="input"
                      onChange={(e) => exchangeHandler(e.target.value, "1")}
                      style={{ align: "right" }}
                      placeholder={exchangeValue}
                    />
                  </Col>
                  <Col>
                    <img
                      style={{ width: "50px", display: "inline-block" }}
                      src={
                        "https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"
                      }
                    />
                    <span>
                      <div style={{ fontSize: "1.4rem", color: "white" }}>
                        USD
                      </div>
                    </span>
                  </Col>
                  <Col className="leftLine">
                    <input
                      id="input"
                      type="text"
                      onChange={(e) => exchangeHandler(e.target.value, "2")}
                      style={{ align: "right" }}
                      placeholder={"$" + exchangeValueDollar}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Card className="descBox">
                  <ListGroup className="descBox">
                    <ListGroup.Item className="descBox">
                      Market Cap Rank:{" "}
                      <span id="toWhite">{data.market_cap_rank} </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="descBox">
                      Release Date:{" "}
                      <span id="toWhite">{data.genesis_date}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="descBox">
                      Public Interest Score:{" "}
                      <span id="toWhite">{data.public_interest_score}</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col id="descBox" md={7}>
                <div className="hidden md:block">{data.description.en}</div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}
