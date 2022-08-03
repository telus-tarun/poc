import axios from "axios";

export const CreateApi = async (data) => {
  let data1;
  await axios
    .post("https://www.mecallapi.com/api/users/create", data)
    .then(function (response) {
      data1 = response.data;
    });
    return data1;
};
