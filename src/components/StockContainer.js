import React, { useState, useEffect } from "react";
// import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import Stock from "./Stock";

function StockContainer() {
  const [stocks, setStocks] = useState([]);
  const [sortBy, setSortBy] = useState(null); 
  const [filterBy, setFilterBy] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  const handleBuyStock = (stock) => {

  };

  const handleSellStock = (stock) => {
  
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterBy(value);
  };

  let filteredStocks = [...stocks];
  if (filterBy) {
    filteredStocks = stocks.filter((stock) => stock.type === filterBy);
  }

  if (sortBy === "alphabetically") {
    filteredStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
  } else if (sortBy === "price") {
    filteredStocks.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        filterBy={filterBy}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <div className="row">
        <div className="col-8">
          {filteredStocks.map((stock) => (
            <Stock key={stock.id} stock={stock} onBuy={handleBuyStock} />
          ))}
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} onSell={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default StockContainer;
