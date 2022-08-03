import axios from "axios";

export const UpdateApi = async (data, id) => {
  let data1;
  await axios.put(`https://www.mecallapi.com/api/users/update`, {
    id: id,
    fname: data.fname,
    lname: data.lname,
    username: data.username,
    email: data.email,
  })
    .then(function (response) {
      data1 = response.data;
    });
    return data1;
};