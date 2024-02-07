import React, { useState } from "react";

export default function Content() {
  return (
    <div className="flex">
      <AccordianMenu />
      <ItemDetails />
    </div>
  );
}

function ItemDetails() {
  return (
    <div id="itemDetails">
      <img src="./images/lego_secret_tank.jpeg" />
      <div id="itemSpecs">THIS IS WORDS</div>
    </div>
  );
}

function AccordianMenu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAccordionClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div id="categoriesAndBrands">
      <div id="categories">
        <a className="theWordCategories">CATEGORIES</a>
        <div id="categoriesList">
          {categoryItems.map((category) => (
            <Category
              category={category}
              currentlySelected={selectedCategory === category}
              onClick={() => handleAccordionClick(category)}
            />
          ))}
        </div>
      </div>

      <div id="popularBrands">
        <a className="popularBrands">POPULAR BRANDS</a>

        <div id="brandsList">
          {popularBrands.map((brand) => (
            <button className="brand" key={brand}>
              {brand}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Category({ category, currentlySelected, onClick }) {
  const children =
    currentlySelected && typeof category === "object" ? (
      <div>
        {/* Render 'OCS & Ranger School' items */}
        {category.children.map((item) => (
          <SubCategory item={item} />
        ))}
      </div>
    ) : null;

  const classes = [
    "accordion",
    `${typeof category === "object" ? "has-children" : ""}`,
    `${currentlySelected ? "active" : ""}`,
  ];

  return (
    <div key={category}>
      <button className={classes.join(" ")} onClick={onClick}>
        {typeof category === "string" ? category : category.name}
      </button>

      {/* Render accordion items based on selected category */}
      {children}
    </div>
  );
}

function SubCategory({ item }) {
  return (
    <button className="accordionItem" key={item}>
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
let popularBrands = [
  "Propper",
  "CamelBak",
  "Tru Spec",
  "Rite in the Rain",
  "Benchmade",
  "Oakley",
  "Raine",
  "Sua Sponte",
  "Gerber",
  "Tasmanian Tiger",
  "View All",
];
