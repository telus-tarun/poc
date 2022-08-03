import { QueryClient } from "@tanstack/react-query";

export function queryClient(){
    const queryClient = new QueryClient();
    return queryClient
}