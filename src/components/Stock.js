import React from "react";

function Stock({ stock, onBuy }) {
  const handleBuy = () => {
    onBuy(stock);
  };

  return (
    <div onClick={handleBuy}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;
