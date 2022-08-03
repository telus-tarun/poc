import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../Query/queryClient";
import { DeleteApi } from "../Services/DeleteApi";

export function useDeleteUser(){
    return useMutation(
        async (id) =>
          await DeleteApi(id),
        {
          onSuccess: () => {
            alert("Deleted");
            queryClient.invalidateQueries("repoData");
          },
        }
      )
}