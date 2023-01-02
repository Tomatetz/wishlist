import React from "react";
import { useUserContext } from "@Context/UserContext.js";
import styles from "@Styles/Components.module.scss";
import Image from "next/image";
import Link from "next/link";

const WishlistPage = () => {
  const { wishlist, setWishlist } = useUserContext();
  const handleRemove = (id) => {
    setWishlist(
      wishlist.filter(({ id: wishlistItemId }) => wishlistItemId !== id)
    );
  };
  return (
    <div className={`${styles.page_content} flex flex-column flex-center`}>
      <h3>My wishlist</h3>
      {wishlist.length ? (
        <ul className={styles.wishlist}>
          {wishlist.map((item) => (
            <li className={styles.wishlist_item} key={item.id}>
              <div className="flex flex-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <Link
                  className={styles.wishlist__link}
                  href={`/product/${item.id}`}
                >
                  {item.title}
                </Link>
              </div>
              <button
                className={styles.wishlist_remove__button}
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
export default WishlistPage;
