import { useQuery } from "@tanstack/react-query"

export const useGetFetchPodcast = (options = {}) => {
  return useQuery({
    ...options,
    queryKey: ["fetchPodcast"],
    queryFn: () => {
      return fetch(
        ` https://api.wokpa.app/api/listeners/podcasts/1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      ).then((res) => res.json())
    },
  })
}
