import axios from "axios";
import { APITransport } from "./ApiTransport.js";

jest.mock("axios");

describe("API test", () => {
  it("returns list of products combined by category", async () => {
    axios.get.mockResolvedValue({
      data: [
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
        {
          category: 1,
          id: 3,
          title: "Third",
        },
      ],
    });
    const response = await APITransport.fetchList();
    expect(response).toEqual({
      1: [
        { category: 1, id: 1, title: "First" },
        {
          category: 1,
          id: 3,
          title: "Third",
        },
      ],
      2: [{ category: 2, id: 2, title: "Second" }],
    });
  });
  it("returns product data by id", async () => {
    axios.get.mockResolvedValue({
      data: {
        category: 1,
        id: 1,
        title: "First",
      },
    });
    const response = await APITransport.fetchItem(1);
    expect(response).toEqual({ category: 1, id: 1, title: "First" });
  });
});
