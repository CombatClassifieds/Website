import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBitcoinSign } from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <div className="flex">
      <AccordianMenu />
      <ItemDetails />
    </div>
  );
}

function ItemDetails() {
  let tempItem = {
    img: `./images/lego_secret_tank.jpeg`,
    name: `L3g0 REDACTED of INF&^!KJM`,
    NSN: `9X237REDACTED73--74`,
    price: `230.17`,
    brand: `Lockheed Martin`,
    description: 'This is a lengthy redacted description',
  };

  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  const handleBitcoinClick = () => {
    alert("USD WORTH");
  };

  return (
    <div id="itemSpecs">
    <img src={tempItem.img} alt="Item" />
      <div id="itemName">{tempItem.name}</div>
      <div id="sku">NSN: {tempItem.NSN}</div>
      <div id="itemPrice" onClick={handleBitcoinClick}>
        <FontAwesomeIcon icon={faBitcoinSign} />
        {" " + tempItem.price}
      </div>
      <div id="addToCart">
        <button onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
      <div id='itemBrand'>{tempItem.brand}</div>
      <div id='itemDescription'>{tempItem.description}</div>
    </div>
  );
}