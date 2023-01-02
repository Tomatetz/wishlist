import React from "react";
import axios from "axios";
import { UserContext } from "@Context/UserContext";
import DetailsPage from "./[...id].js";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("axios");
const useRouter = jest.spyOn(require("next/router"), "useRouter");
const customRender = (ui, { providerProps }) => {
  return render(
    <UserContext.Provider {...providerProps}>{ui}</UserContext.Provider>
  );
};

describe("DetailsPage test", () => {
  const setWishlist = jest.fn();
  useRouter.mockImplementationOnce(() => ({
    query: { id: "1" },
  }));
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
    expect(await screen.getByTestId("title")).toBeInTheDocument();
    console.log(screen.getByTestId("title"));
    // expect(await screen.findByText("First")).toBeInTheDocument();

    // const title = screen.getByTestId("title");
    // expect(title).toHaveTextContent("First");
    const addToWishlistButton = screen.getByTestId("wishlist-button");
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
