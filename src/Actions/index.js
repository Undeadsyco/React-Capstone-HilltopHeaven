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
  }
};

export default actions;