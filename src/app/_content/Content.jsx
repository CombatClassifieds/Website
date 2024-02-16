"use client";

import React, { useState, useEffect } from "react";

import "./content.css";

export default function Content({ children }) {
  return (
    <div className="flex">
      <AccordianMenu />
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
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
