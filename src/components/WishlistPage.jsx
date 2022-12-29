import React, { useContext } from "react";
import { UserContext } from "@Context/UserContext.js";
import "./components.scss";

export const WishlistPage = () => {
  const { wishlist, setWishlist } = useContext(UserContext);
  const handleRemove = (id) => {
    setWishlist(
      wishlist.filter(({ id: wishlistItemId }) => wishlistItemId !== id)
    );
  };
  return (
    <div className="page-content flex flex-column flex-center">
      <h3>My wishlist</h3>
      {wishlist.length ? (
        <ul className="wishlist">
          {wishlist.map((item) => (
            <li className="wishlist-item" key={item.id}>
              <div className="flex flex-center">
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </div>
              <button
                className="wishlist-remove__button"
                onClick={() => handleRemove(item.id)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Your wishlist is empty</h1>
      )}
    </div>
  );
};
