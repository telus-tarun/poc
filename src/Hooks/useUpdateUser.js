import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { UpdateApi } from "../Services/UpdateApi";

export function useUpdateUser(ids) {
    let id = ids;
  let navigate = useNavigate();
  return useMutation(
    async (state) => {await UpdateApi(state, id)},
    {
      onSuccess: () => {
        navigate("/", { replace: true });
      },
    }
  );
}
