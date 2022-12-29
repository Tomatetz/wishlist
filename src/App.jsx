import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from "@Context";
import { Link } from "react-router-dom";
import { DetailsPage, WishlistPage, HomePage } from "./components";

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  return (
    <Router>
      <UserContext.Provider value={{ wishlist, setWishlist }}>
        <div className="page-header flex flex-center justify-between w-100">
          <Link className="home__button" to="/">
            Home
          </Link>
          {wishlist.length ? (
            <Link className="my-wishlist" to="/wishlist">
              My wishlist ({wishlist.length})
            </Link>
          ) : null}
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<DetailsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
