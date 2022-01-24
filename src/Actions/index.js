import axios from "axios";

const url = 'http://localhost:5000'

const actions = {
  login: async (body) => {
    const { name } = body;
    let req = await axios.get(`${url}/users?name=${name}`);
    let res = await req.data[0];
    if (!res) {
      req = await axios.post(`${url}/users`, { ...body, admin: false });
      res = await req.data 
    }
    return res;
  },
  makeReview: async (body) => {
    const req = await axios.post(`${url}/reviews`, body);
    const res = await req.data;
    return res;
  },
  getReviews: async (filter) => {
    const req = await axios.get(`${url}/reviews?area=${filter}`);
    const res = await req.data;
    console.log(res)
    return res;
  },
  removeReview: async (id) => {
    const req = await axios.delete(`${url}/reviews/${id}`);
    const res = await req.data;
    console.log(res);
    return res;
  }
};

export default actions;