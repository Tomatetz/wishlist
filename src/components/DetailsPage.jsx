import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { APITransport } from "@Api/ApiTransport.js";
import { UserContext } from "@Context/UserContext.js";
import { Loader } from "./Loader";
import "./components.scss";

const CATEGORY_TYPE = {
  "men's clothing": "category-1",
  jewelery: "category-2",
  electronics: "category-3",
  "women's clothing": "category-4",
};

export const DetailsPage = () => {
  const { id: itemId } = useParams();
  const id = Number(itemId);

  const { wishlist, setWishlist } = useContext(UserContext);
  const [item, setItem] = useState({});
  useEffect(() => {
    APITransport.fetchItem(id).then(setItem);
  }, []);

  if (!item.id) return <Loader />;
  return (
    <div
      className={`page-content flex flex-column flex-center ${
        CATEGORY_TYPE[item.category]
      }`}
    >
      <h3>{item.title}</h3>
      <div className="details-page__description flex">
        <img
          className="details-page__image"
          src={item.image}
          alt={item.title}
        />
        <div className="details-page__longtext flex flex-column">
          {item.description}
          {wishlist.some(({ id: wishlistItemId }) => wishlistItemId === id) ? (
            <div
              className="wishlist-button"
              onClick={() =>
                setWishlist(
                  wishlist.filter(
                    ({ id: wishlistItemId }) => wishlistItemId !== id
                  )
                )
              }
            >
              Remove from wishlist
            </div>
          ) : (
            <div
              className="wishlist-button"
              onClick={() => setWishlist([...wishlist, item])}
            >
              Add to wishlist
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
