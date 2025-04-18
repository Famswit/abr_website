import { useQuery } from "@tanstack/react-query"

export const useGetTopPodcast = (options = {}) => {
  return useQuery({
    ...options,
    queryKey: ["topPodcast"],
    queryFn: () => {
      return fetch(
        ` https://api.wokpa.app/api/listeners/toppodcasts?page=1&per_page=15`,
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
