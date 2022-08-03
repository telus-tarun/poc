import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { CreateApi } from "../Services/CreateApi";

export function useCreateUser() {
  let navigate = useNavigate();
  return useMutation(async (state) => CreateApi(state), {
      onSuccess: () => {
        navigate("/", { replace: true });
      },
    })
}