import React, { useEffect, useState } from "react";
import styles from "@Styles/Components.module.scss";
import { APITransport } from "@Api/ApiTransport.js";
import { Carousel } from "@Components/Carousel";
import { Loader } from "@Components/Loader";

const HomePage = () => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    APITransport.fetchList().then(setCategories);
  }, []);
  return (
    <div className={`${styles.home_page} flex`}>
      {Object.keys(categories).length ? (
        <>
          <div className={styles.categories_list}>
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
export default HomePage;
