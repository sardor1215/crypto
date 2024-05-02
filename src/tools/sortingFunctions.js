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
