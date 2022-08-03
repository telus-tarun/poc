import axios from "axios";

export const DetailApi = async (id) => {
  let data1 = await axios.get(`https://www.mecallapi.com/api/users/${id}`)
  return data1.data.user;
};
