import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import ListBox from "../../components/listbox/ListBox";
import Loading from "../../tools/Loading";
import Info from "../info/Info";
import "./main.css";

export default function Main(name) {
  function card(each) {
    return (
      <ListBox
        id={each.id}
        key={each.id}
        img={each.image}
        name={each.name}
        code={each.symbol}
        price={each.current_price}
        change={each.market_cap_change_percentage_24h}
        cap={each.market_cap}
      />
    );
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

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
  function searchHandler(value) {}
  return (
    <div>
      <Header />
      <Row>
        <Col>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            id="searchBox"
            type="search"
          ></input>
        </Col>
      </Row>
      <Row>
        {/* <Col md={12}>
          <ButtonGroup size="lg" aria-label="Basic example">
            <Button value="usd" variant="secondary">
              Rank
            </Button>
            <Button value="rub" variant="secondary">
              Change
            </Button>
            <Button value="try" variant="secondary">
              Volume
            </Button>

            <Button value="gbp" variant="secondary">
              Price
            </Button>
            <Button value="eur" variant="secondary">
              EUR
            </Button>
          </ButtonGroup>
        </Col> */}
      </Row>

      <div>
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <Row>
            <Col></Col>
            <Col md={6} style={{ display: "flex", flexWrap: "wrap" }}>
              <div id="cardContainer">
                {data
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map(card)}
              </div>
            </Col>
            <Col></Col>
          </Row>
        )}
      </div>
    </div>
  );
}
