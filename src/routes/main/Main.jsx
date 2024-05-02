import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Grid } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import ListBox from "../../components/listbox/ListBox";
import Loading from "../../tools/Loading";
import Info from "../info/Info";

import { Link } from "react-router-dom";

export default function Main(name) {
  function card(each) {
    return (
      <ListBox
        id={each.id}
        rank={each.market_cap_rank}
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

  function byMarketCapAs() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return b.market_cap - a.market_cap;
    });
  }
  function byMarketCapDes() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return a.market_cap - b.market_cap;
    });
  }

  function byChangeAs() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return b.price_change_percentage_24h - a.price_change_percentage_24h;
    });
  }
  function byChangeDes() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return a.price_change_percentage_24h - b.price_change_percentage_24h;
    });
  }
  function byPriceAs() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return b.current_price - a.current_price;
    });
  }
  function byPriceDes() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return a.current_price - b.current_price;
    });
  }
  function byRankDes() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return a.market_cap_rank - b.market_cap_rank;
    });
  }
  function byRankAs() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return a.market_cap_rank - b.market_cap_rank;
    });
  }
  function byNameAs() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }
  function byNameDes() {
    return [...data].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div>
      <Header />
      <div class="grid lg:grid-cols-2 md:grid-cols-2  justify-center ml-10">
        <Link to="/">
          <h1 className="no-underline hover:text-yel text-5xl">
            Cryp
            <span className=" text-yel  text-7xl">To</span>
          </h1>
        </Link>
        <div class=" md:mt-6 xl:w-96">
          <div class="input-group relative flex flex-wrap items-stretch w-full ">
            <input
              id="searchBox"
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-2 text-lg font-normal text-yel bg-lightBlue bg-clip-padding border border-solid border-yel rounded transition ease-in-out m-0  focus:text-yel focus:bg-lightBlue focus:border-blue-600 focus:outline-none"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
      </div>

      <div>
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="text-center ">
            <section class="container mx-auto p-6 font-mono">
              <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div class="w-full overflow-x-auto ">
                  <table class="w-full">
                    <thead className="">
                      <tr className="ml-10  text-md font-semibold tracking-wide text-left text-yel  uppercase border-b border-yel">
                        <th class="pt-3 ml-2 text-center">
                          <button
                            className=" "
                            onClick={() => setData(byRankDes)}
                          >
                            <KeyboardDoubleArrowDownIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                          <button
                            className=""
                            onClick={() => setData(byNameAs)}
                          >
                            <KeyboardDoubleArrowUpIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                        </th>
                        <th class=" px-10 pt-3">
                          Name
                          <button
                            className="ml-2 "
                            onClick={() => setData(byNameDes)}
                          >
                            <KeyboardDoubleArrowDownIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                          <button
                            className=""
                            onClick={() => setData(byRankAs)}
                          >
                            <KeyboardDoubleArrowUpIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                        </th>
                        <th class="px-4 pt-3">
                          PRICE
                          <button
                            className="ml-2 "
                            onClick={() => setData(byPriceAs)}
                          >
                            <KeyboardDoubleArrowDownIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                          <button
                            className=""
                            onClick={() => setData(byPriceDes)}
                          >
                            <KeyboardDoubleArrowUpIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                        </th>
                        <th class="pl-48  pt-3">
                          CHANGE
                          <button
                            className="ml-2 "
                            onClick={() => setData(byChangeDes)}
                          >
                            <KeyboardDoubleArrowDownIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                          <button
                            className=""
                            onClick={() => setData(byChangeAs)}
                          >
                            <KeyboardDoubleArrowUpIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                        </th>
                        <th class="px-10 pt-3">
                          MARKET Cap
                          <button
                            className="ml-2 "
                            onClick={() => setData(byMarketCapDes)}
                          >
                            <KeyboardDoubleArrowDownIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                          <button
                            className=""
                            onClick={() => setData(byMarketCapAs)}
                          >
                            <KeyboardDoubleArrowUpIcon className="hover:scale-125 ease-in-out duration-300" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-lightBlue">
                      {data
                        .filter((val) => {
                          if (searchTerm === "") {
                            return val;
                          } else if (
                            val.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map(card)}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
      <footer className="bg-lightBlue text-center dark:bg-lightBlue lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2024 Powered by
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://github.com/sardor1215"
          >
            <span> </span>Sardor
          </a>
        </div>
      </footer>
    </div>
  );
}
