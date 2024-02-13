"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faBitcoinSign,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./page.css";

export default function Item({ params: { id } }) {
  return (
    <>
      <ItemDetails id={id} />
      <Separator />
      <SideScroll />
    </>
  );
}

function Separator() {
  return <div id="seperator"></div>;
}

function ItemDetails({ id }) {
  let [tempItems, setTempItems] = useState(null);

  useEffect(() => {
    const setItems = async () => {
      try {
        const res = await fetch(`/api/items/${id}`);
        const tempItems = await res.json();
        // console.log(categoryItems);
        setTempItems(tempItems);
      } catch (e) {
        console.warn(`Couldnt fetch item ${id}`, e);
      }
    };
    setItems();
  }, []);

  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  const handleBitcoinClick = () => {
    alert("USD WORTH");
  };

  return (
    <div className="flex">
      {tempItems &&
        tempItems.map(({ id, name, img, nsn, price, brand, description }) => (
          <div key={id} id="outerBox">
            <div id="itemSpecs" className="mr-8 flex-grow">
              <img src={img} alt={name} />
              <div id="itemName">{name}</div>
              <div id="sku">NSN: {nsn}</div>
              <div
                id="itemPrice"
                onClick={handleBitcoinClick}
                className="flex items-center cursor-pointer"
              >
                <FontAwesomeIcon icon={faBitcoinSign} className="mr-1" />
                {" " + price}
              </div>
              <div id="addToCart">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center hover:scale-110"
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
              <div id="itemBrand" className="">
                {brand}
              </div>
            </div>
            <div id="itemDescription">
              {description.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

function SideScroll() {
  const images = [
    "/images/futuristic_secret_tank.jpeg",
    "/images/secret_weapon.jpeg",
    "/images/glasses.jpeg",
    "/images/futuristic_secret_tank.jpeg",
    "/images/spyplane.jpeg",
  ];

  return (
    <div id="sideScroll">
      {images.map((imageUrl, index) => (
        <div key={index} className="imageContainer">
          <img id="sideScrollImages" src={imageUrl} alt={`Image ${index}`} />
          <button id="imageButton">
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button id="viewItemButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      ))}
    </div>
  );
}
