import React, { useState } from "react";
import ArrowLeft from "src/assets/icons/arrow-left.svg";
import Link from "next/link";
import styles from "@Styles/Carousel.module.scss";
import Image from "next/image";

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
        <div
          key={i}
          className={styles.item}
          style={{
            left: `${(i * 100) / ITEMS_IN_CAROUSEL}%`,
            width: `${100 / ITEMS_IN_CAROUSEL}%`,
          }}
        >
          <Link href={`/product/${items[index].id}`}>
            <Image src={items[index].image} alt={items[index].title} fill />
          </Link>
        </div>,
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
    <div className={`${styles.carousel} w-100 flex flex-center`}>
      <div className={styles.arrow} onClick={moveLeft}>
        <ArrowLeft />
      </div>
      {generateInner()}
      <div
        className={`${styles.arrow} ${styles.arrow_right}`}
        onClick={moveRight}
      >
        <ArrowLeft />
      </div>
    </div>
  );
};
