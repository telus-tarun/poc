import axios from "axios";

export const DeleteApi = async (id) => {
  let data1;
  await axios.delete("https://www.mecallapi.com/api/users/delete/", {
        data: {
          id: id,
        },
      });
    return data1;
};
