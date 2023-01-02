import React from "react";
import { useUserContext } from "src/context/";
import Link from "next/link";
import styles from "@Styles/Components.module.scss";

export const Header = () => {
  const { wishlist } = useUserContext();
  return (
    <div
      className={`${styles.page_header} flex flex-center justify-between w-100`}
    >
      <Link className={styles.page_header__button} href="/">
        Home
      </Link>
      {wishlist.length ? (
        <Link className={styles.page_header__button} href="/wishlist">
          My wishlist ({wishlist.length})
        </Link>
      ) : null}
    </div>
  );
};
