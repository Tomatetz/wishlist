import React, { useState, useContext } from "react";

export const UserContext = React.createContext();

export const AppWrapper = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  return (
    <UserContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
