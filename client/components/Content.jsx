import React, { useState } from "react";

export default function Content() {
  return (
    <div class="flex">
      <AccordianMenu />
      <ItemDetails />
    </div>
  );
}

function ItemDetails() {
  return (
    <>
      <div id="itemDetails">
        <img src="./images/lego_secret_tank.jpeg" />
        <div id="itemSpecs">THIS IS WORDS</div>
      </div>
    </>
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
              <div key={category}>
                <button
                  className={`accordion ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleAccordionClick(category)}
                >
                  {category}
                  {/* Render special symbol for accordion items */}
                  {category === "OCS & Ranger School" || category === "Clothing" || category === "Uniform Accessories" || category === "Eyewear" || category === "Field Equipment" || category === "Flashlights" || category === "Footwear & Accessories" || category === "Gifts, Novelty, Books/Manuals" || category === "Headweawr" || category === "Knives & Tools" || category === "Tactical Gear" || category === "Weapons Accessories" ? (
                    <span className="accordionSymbol">^</span>
                  ) : null}
                </button>

              {/* Render accordion items based on selected category */}
              {selectedCategory === category && (
                <div>
                  {/* Render 'OCS & Ranger School' items */}
                  {category === "OCS & Ranger School" &&
                    ocsRangerSchoolItems.map((item) => (
                      <button className="accordionItem" key={item}>
                        {item}
                      </button>
                    ))}
                    {/* Render 'Clothing' items */}
                    {category === "Clothing" &&
                      clothingItems.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/* Render 'Uniform Accessories' items */}
                    {category === "Uniform Accessories" &&
                      uniformAccessories.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/* Render 'Eyewear' items */}
                    {category === "Eyewear" &&
                      eyewear.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/* Render 'Field Equipment items */}
                    {category === "Field Equipment" &&
                      fieldEquipment.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/* Render 'Flashlights' items*/}
                    {category === "Flashlights" &&
                      flashlights.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/* Render 'Footwear & Accessories' items*/}
                    {category === "Footwear & Accessories" &&
                      footwearAndAccessories.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/*Render 'Gifts, Novelty, Books/Manuals' items*/}
                    {category === "Gifts, Novelty, Books/Manuals" &&
                      gifts.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/*Render 'Headwear' items*/}
                    {category === "Headwear" &&
                      headwear.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/*Render 'Knives & Tools*/}
                    {category === "Knives & Tools" &&
                      knivesAndTools.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/*Render 'Tactical Gear' items*/}
                    {category === "Tactical Gear" &&
                      tacticalGear.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                    {/*Render 'Weapons Accessories' items*/}
                    {category === "Weapons Accessories" &&
                      weaponsAccessories.map((item) => (
                        <button className="accordionItem" key={item}>
                          {item}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="popularBrands">
        <a className="popularBrands">POPULAR BRANDS</a>

        <div id="brandsList">
          {popularBrands.map((brand) => (
            <button className={brand} key={brand}>
              {brand}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

let fieldEquipment = [
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
 ];
 let flashlights = [
    "All Flashlights",
    "Accessories",
    "Chemlights",
    "Headlamps",
    "LED",
 ];
 let footwearAndAccessories = [
    "All Footwear & Accessories",
    "Boot Accessories",
    "AR670-1 Compliant",
    "Boot Care",
    "Boots",
    "Foot Care",
    "Insoles",
    "Socks",
    "Shoes",
 ];
 let gifts = [
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
];
let headwear = [
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
];
let knivesAndTools = [
    "All Knives & Tools",
    "Fixed Blades",
    "Folding Knives",
    "Machetes",
    "Sharpeners & Acc",
    "Sheaths",
    "Tools",
];
  let tacticalGear = [
    "All Tactical Gear",
    "Bags, Packs",
    "Duty Gear",
    "Ghillie Suits/Camo Acc",
    "Holsters, Duty Gear",
    "Optics",
    "Protective Gear, Restraints",
    "Vests",
];
let weaponsAccessories = [
    "All WEapons Accessories",
    "Bipods",
    "Cleaning Kits & Accessories",
    "Grips",
    "Holsters",
    "Lanyards",
    "Magazines & Accessories",
    "Slings",
    "Weapons Accessories",
];
let categoryItems = [
  "OCS & Ranger School",
  "ROTC/JROTC Items",
  "Clothing",
  "Uniform Accessories",
  "Crests",
  "Eyewear",
  "Field Equipment",
  "Flashlights",
  "Footwear & Accessories",
  "Gifts, Novelty, Books/Manuals",
  "Headwear",
  "Knives & Tools",
  "New Arrivals",
  "Tactical Gear",
  "Weapons Accessories",
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
let ocsRangerSchoolItems = [
  "All OCS & Ranger School",
  "OCS - Click Here",
  "Ranger School - Click Here",
];
let clothingItems = [
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
];
let uniformAccessories = [
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
];

let eyewear = ["All Eyewear", "Accessories", "Glasses", "Goggles", "Rx"];
