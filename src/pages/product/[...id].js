import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { APITransport } from "@Api/ApiTransport.js";
import { useUserContext } from "@Context/UserContext.js";
import { Loader } from "@Components/Loader";
import styles from "@Styles/Components.module.scss";
import Image from "next/image";

const CATEGORY_TYPE = {
  "men's clothing": "category-1",
  jewelery: "category-2",
  electronics: "category-3",
  "women's clothing": "category-4",
};

const DetailsPage = () => {
  const router = useRouter();
  const { id: stringId } = router.query;
  const id = stringId ? Number(stringId[0]) : null;

  const { wishlist, setWishlist } = useUserContext();
  const [item, setItem] = useState({});
  useEffect(() => {
    id && APITransport.fetchItem(id).then(setItem);
  }, [id]);

  if (!item.id) return <Loader />;
  return (
    <div
      className={`${styles.page_content} flex flex-column flex-center ${
        CATEGORY_TYPE[item.category]
      }`}
    >
      <h3 data-testid="title">{item.title}</h3>
      <div className={`${styles.page_description} flex`}>
        <Image
          className={styles.details_page__image}
          src={item.image}
          alt={item.title}
          width={450}
          height={600}
        />
        <div className={`${styles.details_page__longtext} flex flex-column`}>
          {item.description}
          {wishlist.some(({ id: wishlistItemId }) => wishlistItemId === id) ? (
            <button
              className={styles.wishlist__button}
              onClick={() =>
                setWishlist(
                  wishlist.filter(
                    ({ id: wishlistItemId }) => wishlistItemId !== id
                  )
                )
              }
              data-testid="wishlist-button"
            >
              Remove from wishlist
            </button>
          ) : (
            <button
              className={styles.wishlist__button}
              onClick={() => setWishlist([...wishlist, item])}
              data-testid="wishlist-button"
            >
              Add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
