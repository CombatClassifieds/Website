"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faBitcoinSign,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./content.css";

export default function Content() {
  return (
    <div className="flex">
      <AccordianMenu />
      <div className="flex flex-col justify-center items-center">
        <ItemDetails />
        <Separator />
        <SideScroll />
      </div>
    </div>
  );
}

function Separator() {
  return <div id="seperator"></div>;
}

function ItemDetails() {
  let tempItems = [
    {
      img: `./images/lego_secret_tank.jpeg`,
      name: `L3g0 [REDACTED]: Shadow Enigma Tank`,
      NSN: `[REDACTED]237[REDACTED]73-[REDACTED]74`,
      price: `230.17`,
      brand: `[REDACTED] Advanced Technologies [CLASSIFIED]`,
      description: `🔒 Step into the shadowy realm of covert operations, where whispers intertwine with the darkness and enigmas lie hidden in the folds of reality. 🌌

      🕵️‍♂️ The L3g0 [REDACTED]: Shadow Enigma Tank beckons, a cryptic marvel meticulously crafted by [REDACTED] Advanced Technologies [CLASSIFIED], veiled in the deepest shadows and shrouded in impenetrable secrecy. 🌑

      🔐 This is no ordinary Lego set; it is a gateway to a world where imagination dances with enigma, and the boundaries of the known fade into obscurity. 🧩

      🧭 Journey through the murky depths of clandestine missions as you assemble this enigmatic masterpiece, with each brick revealing cryptic secrets, and each step leading you further into the abyss of clandestine mystery. 🚪

      🌚 With its [REDACTED] technology and stealth-enhanced design, the Shadow Enigma Tank glides silently through the night, an ethereal specter haunting the shadows. 👻

      🔍 But tread cautiously, for within its labyrinthine chambers lie concealed secrets of the highest sensitivity. Unravel the mysteries that lurk within, unlocking hidden compartments and revealing classified armaments as you journey deeper into the heart of the clandestine. 🔓

      🚀 The Shadow Enigma Tank transcends mere toy status; it stands as a monument to the limitless power of imagination and the allure of the unknown. 🌟

      🌌 Embrace the shadows, embrace the mysteries, and embark on an odyssey where the only limit is the vast expanse of your imagination. 🚀`,
    },
  ];

  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  const handleBitcoinClick = () => {
    alert("USD WORTH");
  };

  return (
    <div className="flex">
      {tempItems.map((tempItem, index) => (
        <div key={index} id="outerBox">
          <div id="itemSpecs" className="mr-8 flex-grow">
            <img src={tempItem.img} alt={tempItem.name} />
            <div id="itemName">{tempItem.name}</div>
            <div id="sku">NSN: {tempItem.NSN}</div>
            <div
              id="itemPrice"
              onClick={handleBitcoinClick}
              className="flex items-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faBitcoinSign} className="mr-1" />
              {" " + tempItem.price}
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
              {tempItem.brand}
            </div>
          </div>
          <div id="itemDescription">
            {tempItem.description.split("\n\n").map((paragraph, i) => (
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
    "./images/futuristic_secret_tank.jpeg",
    "./images/secret_weapon.jpeg",
    "./images/glasses.jpeg",
    "./images/futuristic_secret_tank.jpeg",
    "./images/spyplane.jpeg",
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

function AccordianMenu() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryItems, setCategoryItems] = useState(null);
  const [popularBrands, setPopularBrands] = useState(null);

  const handleAccordionClick = (id) => {
    setSelectedCategory(selectedCategory === id ? null : id);
  };

  useEffect(() => {
    const setCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const categoryItems = await res.json();
        // console.log(categoryItems);
        setCategoryItems(categoryItems);
      } catch (e) {
        console.warn(`Couldnt fetch categories`, e);
      }
    };
    setCategories();
  }, []);

  useEffect(() => {
    const setBrands = async () => {
      try {
        const res = await fetch("/api/popular_brands");
        const brands = await res.json();
        // console.log(brands);
        setPopularBrands(brands);
      } catch (e) {
        console.warn(`Couldnt fetch popular brands`, e);
      }
    };
    setBrands();
  }, []);

  return (
    <div id="accordianMenu">
      <div id="categories">
        <a className="theWordCategories">CATEGORIES</a>
        <div id="categoriesList">
          {categoryItems &&
            categoryItems.map(({ id, name }) => (
              <Category
                key={id}
                id={id}
                category={name}
                currentlySelected={selectedCategory === id}
                onClick={() => handleAccordionClick(id)}
              />
            ))}
        </div>
      </div>

      <div id="popularBrands">
        <a className="popularBrands">POPULAR BRANDS</a>

        <div id="brandsList">
          {popularBrands &&
            popularBrands.map(({ id, name }) => (
              <button className="brand" key={id}>
                {name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

function Category({ id, category, currentlySelected, onClick }) {
  const [subcategories, setSubcategories] = useState(null);

  useEffect(() => {
    const set = async () => {
      try {
        const res = await fetch(`/api/subcategories/${id}`);
        const subcategories = await res.json();
        // console.log(subcategories);
        setSubcategories(subcategories);
      } catch (e) {
        console.warn(`Couldnt fetch popular subcategories`, e);
      }
    };
    set();
  }, []);

  const children =
    currentlySelected && subcategories && subcategories.length ? (
      <div className="children">
        {subcategories.map(({ id, name }) => (
          <SubCategory key={id} item={name} />
        ))}
      </div>
    ) : null;

  const classes = [
    "accordion",
    `${subcategories && subcategories.length ? "has-children" : ""}`,
    `${currentlySelected ? "active" : ""}`,
  ];

  return (
    <div>
      <button className={classes.join(" ")} onClick={onClick}>
        {category}
      </button>
      {children}
    </div>
  );
}

function SubCategory({ item }) {
  return <button className="accordion">{item}</button>;
}
