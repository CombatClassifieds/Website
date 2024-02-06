import React, { useState } from "react";

export default function AccordianMenu() {
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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAccordionClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div id="content">
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
                  </div>
                )}
              </div>
            ))}
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
    </div>
  );
}
