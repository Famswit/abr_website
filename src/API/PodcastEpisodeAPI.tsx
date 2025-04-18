import { useQuery } from "@tanstack/react-query"

export const useGetPodcastEpisode = (options = {}) => {
  return useQuery({
    ...options,
    queryKey: ["podcastEpisodes"],
    queryFn: async () => {
      const token = sessionStorage.getItem("token")
      if (!token) {
        throw new Error("No authentication token found")
      }
      const res = await fetch(
        "https://api.wokpa.app/api/listeners/podcasts/1/episodes?page=1&per_page=15",
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`)
      }
      return res.json()
    },
  })
}