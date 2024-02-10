"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBitcoinSign } from "@fortawesome/free-solid-svg-icons";

import "./content.css";

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
    description: "This is a lengthy redacted description",
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
      <div id="itemBrand">{tempItem.brand}</div>
      <div id="itemDescription">{tempItem.description}</div>
    </div>
  );
}

function AccordianMenu() {
  const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryItems, setCategoryItems] = useState(null);
    const [popularBrands, setPopularBrands] = useState(null);

  const handleAccordionClick = id => {
    setSelectedCategory(selectedCategory === id ? null : id);
  };

    useEffect(() => {
        const setCategories = async () => {
            try {
                const res = await fetch('/api/categories');
                const categoryItems = await res.json();
                // console.log(categoryItems);
                setCategoryItems(categoryItems);
            } catch(e) {
                console.warn(`Couldnt fetch categories`, e);
            }
        };
        setCategories();
    }, []);

    useEffect(() => {
        const setBrands = async () => {
            try {
                const res = await fetch('/api/popular_brands');
                const brands = await res.json();
                // console.log(brands);
                setPopularBrands(brands);
            } catch(e) {
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
              {categoryItems && categoryItems.map(({ id, name }) => (
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
              {popularBrands && popularBrands.map(({ id, name }) => (
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
            } catch(e) {
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
  return (
    <button className="accordion">
      {item}
    </button>
  );
}

let categoryItems = [
  {
    name: "OCS & Ranger School",
    children: [
      "All OCS & Ranger School",
      "OCS - Click Here",
      "Ranger School - Click Here",
    ],
  },
  "ROTC/JROTC Items",
  {
    name: "Clothing",
    children: [
      "All Clothing",
      "Belts",
      "Hot Weather OCP Uniforms",
      "Gloves",
      "Jackets, Rainwear",
      "Kids",
      "P.T.",
      "T-Shirts, Sweatshirts",
      "Underwear",
      "Uniforms-Female",
      "Uniforms",
      "Vests",
    ],
  },
  {
    name: "Uniform Accessories",
    children: [
      "All Uniform Accessories",
      "Personalized Items",
      "AGSU-Pinks & Greens",
      "Army OCP Badges",
      "Army OCP Patches",
      "Army OCP Rank",
      "Army OCP Scrolls",
      "Army OCP Tabs",
      "Air Force OCP Badges",
      "Air Force OCP Patches",
      "Air Force OCP Rank",
      "Air Force Uniform Items",
      "Badges",
      "Bars",
      "Branch",
      "Buttons",
      "Cap Devices",
      "Devices",
      "Flashes",
      "Medals",
      "Ovals",
      "Parade Items",
      "Patches",
      "Rank",
      "Ribbons",
      "Scrolls",
      "Shoulder Boards",
      "Service Stripes",
      "Shoulder Cords",
      "Tabs",
    ],
  },
  "Crests",
  {
    name: "Eyewear",
    children: ["All Eyewear", "Accessories", "Glasses", "Goggles", "Rx"],
  },
  {
    name: "Field Equipment",
    children: [
      "All Field Equipment",
      "ALICE< MOLLE GEAR",
      "Bags, Packs, Cases",
      "Emergency Preparedness",
      "Essential Emergency Items",
      "Field Gear",
      "Field Supplies",
      "First Aid",
      "Hydration",
      "Navigation",
      "Notebooks Cards",
      "Rappelling",
      "Sleeping",
      "Survival",
      "Wallets/ID Holders",
    ],
  },
  {
    name: "Flashlights",
    children: [
      "All Flashlights",
      "Accessories",
      "Chemlights",
      "Headlamps",
      "LED",
    ],
  },
  {
    name: "Footwear & Accessories",
    children: [
      "All Footwear & Accessories",
      "Boot Accessories",
      "AR670-1 Compliant",
      "Boot Care",
      "Boots",
      "Foot Care",
      "Insoles",
      "Socks",
      "Shoes",
    ],
  },
  {
    name: "Gifts, Novelty, Books/Manuals",
    children: [
      "All Gifts, Novelty, Books/Manuals",
      "Books/Manuals",
      "Clothing & Hats",
      "Coins",
      "Decals, Stickers",
      "Flags",
      "Games, Toys",
      "Magnets",
      "Gift Cards",
      "Jewelry",
      "Key Rings",
      "KIA, POW",
      "Morale Patches & Lugage Tags",
      "Mugs",
      "Ornaments",
      "Watches",
    ],
  },
  {
    name: "Headwear",
    children: [
      "All Headwear",
      "Balaclavas, Hoods, Masks",
      "Berets",
      "Boonie Hats",
      "Campaign Hats and Accessories",
      "Hat Accessories",
      "Helmets and Accessories",
      "Novelty",
      "Patrol Caps",
      "Veils, Scarves",
      "Watch Caps, Beenies",
    ],
  },
  {
    name: "Knives & Tools",
    children: [
      "All Knives & Tools",
      "Fixed Blades",
      "Folding Knives",
      "Machetes",
      "Sharpeners & Acc",
      "Sheaths",
      "Tools",
    ],
  },
  "New Arrivals",
  {
    name: "Tactical Gear",
    children: [
      "All Tactical Gear",
      "Bags, Packs",
      "Duty Gear",
      "Ghillie Suits/Camo Acc",
      "Holsters, Duty Gear",
      "Optics",
      "Protective Gear, Restraints",
      "Vests",
    ],
  },
  {
    name: "Weapons Accessories",
    children: [
      "All WEapons Accessories",
      "Bipods",
      "Cleaning Kits & Accessories",
      "Grips",
      "Holsters",
      "Lanyards",
      "Magazines & Accessories",
      "Slings",
      "Weapons Accessories",
    ],
  },
  "Clearance",
];
// let popularBrands = [
//   "Propper",
//   "CamelBak",
//   "Tru Spec",
//   "Rite in the Rain",
//   "Benchmade",
//   "Oakley",
//   "Raine",
//   "Sua Sponte",
//   "Gerber",
//   "Tasmanian Tiger",
//   "View All",
// ];
