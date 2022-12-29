import React, { useState } from "react";
import ArrowLeft from "@Assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";
import "./carousel.scss";

const ITEMS_IN_CAROUSEL = 5;
const MEDIAN = Math.floor(ITEMS_IN_CAROUSEL / 2);

export const Carousel = ({ items }) => {
  const [active, setActive] = useState(0);

  const generateInner = () => {
    const inner = [...Array(ITEMS_IN_CAROUSEL)].reduce((out, item, i) => {
      const shift = active - MEDIAN + i;
      const index = shift < 0 ? shift + items.length : shift % items.length;
      return [
        ...out,
        <Link
          to={`/${items[index].id}`}
          key={i}
          className="item"
          style={{
            left: `${(i * 100) / ITEMS_IN_CAROUSEL}%`,
            width: `${100 / ITEMS_IN_CAROUSEL}%`,
          }}
        >
          <img src={items[index].image} alt={items[index].title} />
        </Link>,
      ];
    }, []);
    return inner;
  };

  const moveLeft = () => {
    setActive(active === 0 ? items.length - 1 : active - 1);
  };

  const moveRight = () => {
    setActive((active + 1) % items.length);
  };

  return (
    <div className="carousel w-100 flex flex-center">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <ArrowLeft />
      </div>
      {generateInner()}
      <div className="arrow arrow-right" onClick={moveRight}>
        <ArrowLeft />
      </div>
    </div>
  );
};
