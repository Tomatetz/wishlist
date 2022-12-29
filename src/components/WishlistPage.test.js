import React from "react";
import { UserContext } from "@Context";
import { WishlistPage } from "./WishlistPage.jsx";
import { fireEvent, render, screen } from "@testing-library/react";

const customRender = (ui, { providerProps }) => {
  return render(
    <UserContext.Provider {...providerProps}>{ui}</UserContext.Provider>
  );
};
describe("WishlistPage test", () => {
  it("should properly display data", async () => {
    const setWishlist = jest.fn();
    const providerProps = {
      value: {
        wishlist: [
          {
            category: 1,
            id: 1,
            title: "First",
          },
          {
            category: 2,
            id: 2,
            title: "Second",
          },
        ],
        setWishlist,
      },
    };
    const { container } = customRender(<WishlistPage />, { providerProps });
    expect(await screen.findByText("My wishlist")).toBeInTheDocument();
    expect(container.getElementsByClassName("wishlist-item").length).toBe(2);
    expect(
      container.getElementsByClassName("wishlist-remove__button").length
    ).toBe(2);
    const removeButton = container.getElementsByClassName(
      "wishlist-remove__button"
    )[0];
    expect(
      container.getElementsByClassName("wishlist-item")[0].querySelector("span")
        .innerHTML
    ).toBe("First");
    fireEvent.click(removeButton);
    expect(setWishlist).toBeCalledWith([
      { category: 2, id: 2, title: "Second" },
    ]);
  });
});
