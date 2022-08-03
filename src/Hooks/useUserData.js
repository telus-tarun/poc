import { useQuery } from "@tanstack/react-query";
import { GetData } from "../Services/GetData"

export function useUserData() {
    const { isLoading, error, data } = useQuery(
        ["repoData"], GetData
      );
    return { isLoading, error, data }
}