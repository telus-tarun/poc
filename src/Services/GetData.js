import axios from "axios";

export const GetData = async () => {
  let data1;
  await axios
    .get("https://www.mecallapi.com/api/users")
    .then(function (response) {
      data1 = response.data;
    });
    return data1;
};
