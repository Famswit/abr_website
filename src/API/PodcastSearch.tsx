import { useQuery } from "@tanstack/react-query"

export const useGetPodcastSearch = (options = {}) => {
  return useQuery({
    ...options,
    queryKey: ["podcastSearch"],
    queryFn: () => {
      return fetch(
        ` https://api.wokpa.app/api/listeners/podcastsearch?q=The%20Joe%20Rogan%20Experience&page=1&per_page=15`,
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
