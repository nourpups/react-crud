import axios from "axios";

export default class OwnerService {
  static async getAll(limit, skip) {
      const response = await axios.get('https://dummyjson.com/quotes', {
        params: {
          limit: limit,
          skip: skip
        }
      });

      return response.data
  }

  static async findById(id) {
      const response = await axios.get(`https://dummyjson.com/quotes/${id}`);

      return response.data
  }
};
