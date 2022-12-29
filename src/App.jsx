import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from "@Context/UserContext.js";
import { Home } from "./components/Home.jsx";
import { DetailsPage } from "./components/DetailsPage.jsx";
import { WishlistPage } from "./components/WishlistPage.jsx";
import { Link } from "react-router-dom";

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  return (
    <UserContext.Provider value={{ wishlist, setWishlist }}>
      <Router>
        <div className="page-header flex flex-center justify-between w-100">
          <Link className="home-button" to="/">
            Home
          </Link>
          {wishlist.length ? (
            <Link className="my-wishlist" to="/wishlist">
              My wishlist ({wishlist.length})
            </Link>
          ) : null}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
