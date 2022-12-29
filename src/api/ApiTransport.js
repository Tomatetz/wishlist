import axios from "axios";

const API_URL = "https://fakestoreapi.com";

class APITransportClass {
  // We can filter out category if we need just 3 of them
  adaptCategories(uncatelorisedData) {
    return uncatelorisedData.reduce(
      (out, item) => ({
        ...out,
        ...{
          [item.category]: [...(out[item.category] || []), item],
        },
      }),
      {}
    );
  }

  async fetchList() {
    const { data } = await axios.get(`${API_URL}/products`);
    return this.adaptCategories(data);
  }

  async fetchItem(id) {
    const { data } = await axios.get(`${API_URL}/products/${id}`);
    return data;
  }
}

export const APITransport = new APITransportClass();
