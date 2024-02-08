import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBitcoinSign } from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <div className="flex">
      <AccordianMenu />
      <div className="flex flex-col justify-center items-center">
        <ItemDetails />
        <div id="seperator">
          <SideScroll />
        </div>
      </div>
    </div>
  );
}

function ItemDetails() {
  let tempItem = {
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
  };

  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  const handleBitcoinClick = () => {
    alert("USD WORTH");
  };

  return (
    <div className="flex">
      <div id="outerBox">
        <div id="itemSpecs" className="mr-8 flex-grow">
          <img src={tempItem.img} alt="Item" />
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
            <button onClick={handleAddToCart} className="flex items-center">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
          <div id="itemBrand" className="">
            {tempItem.brand}
          </div>
        </div>
        <div id="itemDescription">{tempItem.description}</div>
      </div>
    </div>
  );
}

function SideScroll() {
  const images = [
    "./images/futuristic_secret_tank.jpeg",
    "./images/secret_weapon.jpeg",
    "./images/glasses.jpeg",
    "./images/futuristic_secret_tank.jpeg",
    "./images/futuristic_secret_tank.jpeg",
  ];
  return (
    <div id="sideScroll">
      {images.map((imageUrl, index) => (
        <img key={index} id="sideScrollImages" src={imageUrl} />
      ))}
    </div>
  );
}

function AccordianMenu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAccordionClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div id="accordianMenu">
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
      <div className="children">
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
      {children}
    </div>
  );
}

function SubCategory({ item }) {
  return (
    <button key={item} className="accordion">
      {item}
    </button>
  );
}

let categoryItems = [
  {
    name: "Shadow Operations Gear",
    children: [
      "Covert Surveillance Equipment",
      "Invisible Communication Devices",
      "Stealthy Infiltration Tools",
      "Assassination Instruments",
      "Undetectable Camouflage Gear",
    ],
  },
  "Counterintelligence Tools",
  {
    name: "Black Ops Uniforms",
    children: [
      "Nightshade Tactical Attire",
      "Silent Shadow Outfits",
      "Ghost Recon Suits",
      "Phantom Black Armor",
      "Stealth Assassin Garb",
    ],
  },
  {
    name: "Covert Accessories",
    children: [
      "Silent Footwear",
      "Invisible Camouflage Nets",
      "Shadowy Face Masks",
      "Concealed Weaponry Holsters",
      "Untraceable Gloves",
    ],
  },
  "Assassination Tools",
  {
    name: "Evasion Equipment",
    children: [
      "Smoke Bombs",
      "Flashbang Grenades",
      "Disappearing Ink",
      "Chameleon Cloaks",
      "Silent Night Parachutes",
    ],
  },
  {
    name: "Interrogation Devices",
    children: [
      "Mind Control Implants",
      "Memory Suppressors",
      "Truth Serum Syringes",
      "Brainwave Scanners",
      "Loyalty Enforcers",
    ],
  },
  {
    name: "Covert Communication Devices",
    children: [
      "Encrypted Radios",
      "Cryptographic Phones",
      "Invisible Ink Pens",
      "Secure Messaging Apps",
      "Subdermal Transceivers",
    ],
  },
  {
    name: "Infiltration Tools",
    children: [
      "Stealth Drones",
      "Lockpicking Kits",
      "Grapple Guns",
      "Climbing Gear",
      "Remote Surveillance Drones",
    ],
  },
  {
    name: "Sabotage Equipment",
    children: [
      "Remote Detonators",
      "Saboteur Toolkits",
      "Radio Jammers",
      "Cyber Warfare Tools",
      "Explosive Charges",
    ],
  },
  {
    name: "Exfiltration Gear",
    children: [
      "Escape Ropes",
      "Emergency Extraction Kits",
      "Clandestine Transportation",
      "Fake Identities",
      "Vanishing Smoke Bombs",
    ],
  },
  {
    name: "Covert Training Materials",
    children: [
      "Espionage Manuals",
      "Stealth Combat Training",
      "Undercover Operations Guides",
      "Covert Surveillance Courses",
      "Interrogation Tactics Workbooks",
    ],
  },
  "Restricted Access Files",
  {
    name: "Covert Missions Planning",
    children: [
      "Mission Briefing Software",
      "Assassination Strategies",
      "Infiltration Blueprints",
      "Extraction Protocols",
      "Covert Ops Logistics",
    ],
  },
  {
    name: "Black Ops Accessories",
    children: [
      "Shadowy Sunglasses",
      "Covert Watches",
      "Stealthy Backpacks",
      "Mysterious Masks",
      "Eclipse Gadgets",
    ],
  },
  "Underground Equipment",
  {
    name: "Clandestine Weapons",
    children: [
      "Silenced Firearms",
      "Deadly Poisons",
      "Stealth Knives",
      "Concealable Explosives",
      "Covert Combat Gear",
    ],
  },
  {
    name: "Electronic Warfare Devices",
    children: [
      "EMP Generators",
      "Surveillance Drones",
      "Signal Scramblers",
      "Hacking Devices",
      "Cyber Warfare Tools",
    ],
  },
  "Restricted Area Access Tools",
];

let popularBrands = [
  "Stealth Tech",
  "Shadow Tactics",
  "Covert Solutions",
  "Obsidian Ops",
  "Phantom Innovations",
  "Silent Strike",
  "DarkNet Defense",
  "Stealthy Solutions",
  "Shadow Elite",
  "Invisible Inc.",
  "View All",
];
