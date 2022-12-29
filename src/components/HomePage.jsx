import React, { useEffect, useState } from "react";
import { APITransport } from "@Api/ApiTransport.js";
import "./components.scss";
import { Carousel } from "./Carousel";
import { Loader } from "./Loader";

export const HomePage = () => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    APITransport.fetchList().then(setCategories);
  }, []);

  return (
    <div className="home-page flex">
      {Object.keys(categories).length ? (
        <>
          <div className="categories__list">
            <ul>
              {Object.entries(categories).map(([category, items]) => (
                <li className="flex flex-column" key={category}>
                  <h2>{category}</h2>
                  <Carousel items={items} />
                </li>
              ))}
            </ul>
          </div>
          <div className="align-center w-100">
            <h2 data-testid="text">Some promo text</h2>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
