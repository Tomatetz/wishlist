import React from "react";
import axios from "axios";
import { UserContext } from "@Context/UserContext.js";
import { DetailsPage } from "./DetailsPage.jsx";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("axios");

const customRender = (ui, { providerProps }) => {
  return render(
    <UserContext.Provider {...providerProps}>{ui}</UserContext.Provider>
  );
};
describe("DetailsPage test", () => {
  const setWishlist = jest.fn();
  axios.get.mockResolvedValue({
    data: {
      category: 1,
      id: 1,
      title: "First",
    },
  });
  it("should properly display data", async () => {
    const providerProps = {
      value: {
        wishlist: [],
        setWishlist,
      },
    };
    const { container } = customRender(<DetailsPage />, { providerProps });
    expect(await screen.findByText("Add to wishlist")).toBeInTheDocument();
    expect(await screen.findByText("First")).toBeInTheDocument();

    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("First");

    const addToWishlistButton =
      container.getElementsByClassName("wishlist__button")[0];
    fireEvent.click(addToWishlistButton);
    expect(setWishlist).toBeCalledWith([
      {
        category: 1,
        id: 1,
        title: "First",
      },
    ]);
  });
});
