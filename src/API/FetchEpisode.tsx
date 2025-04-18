import { useQuery } from "@tanstack/react-query"

export const useGetFetchEpisode = (options = {}) => {
  return useQuery({
    ...options,
    queryKey: ["fetchEpisodes"],
    queryFn: () => {
      return fetch(
        `https://api.wokpa.app/api/listeners/episodes/latest?page=1&per_page=15`,
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
