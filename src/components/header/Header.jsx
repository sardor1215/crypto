import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../tools/Loading";

export default function Header() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  const url = "https://api.coingecko.com/api/v3/global";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let day = new Date().getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div class=" hidden md:block content-center">
      <div>
        {loading ? (
          <div>
            <div class="animate-ping   w-2 h-2 rounded-full bg-sky-400 opacity-75"></div>
            <p>Loading</p>
          </div>
        ) : (
          <div class="">
            <div class="border-b  px-6">
              <div class=" flex items-center justify-between">
                <div class="flex gap-x-2 py-1 px-2">
                  <span class="text-sm font-medium">
                    {new Date().toLocaleDateString()} {weekDays[day]}
                  </span>
                </div>

                <div class="flex gap-x-8 text-yel font-semibold">
                  <span class=" rounded-sm py-1 px-2 text-sm  ">
                    Cryptos:{data.data.active_cryptocurrencies}
                  </span>
                  <span class=" rounded-sm py-1 px-2 text-sm  ">
                    Exchanges:{data.data.markets}
                  </span>
                  <span class=" rounded-sm py-1 px-2 text-sm  ">
                    Upcoming Icos:{data.data.upcoming_icos}
                  </span>
                  <span class=" rounded-sm py-1 px-2 text-sm  ">
                    Ongoing Icos:{data.data.ongoing_icos}
                  </span>
                  <span class=" rounded-sm py-1 px-2 text-sm  ">
                    Ended Icos:{data.data.ended_icos}
                  </span>
                </div>

                <span class=" rounded-sm py-1 px-2 text-sm  ">
                  {clockState}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
