import { useQuery } from "@tanstack/react-query"

export const useGetTopCategories = (options = {}) => {
  return useQuery({
    ...options,
    queryKey: ["topCategories"],
    queryFn: async () => {
      const token = sessionStorage.getItem("token")
      if (!token) {
        throw new Error("No authentication token found")
      }
      const res = await fetch(
        "https://api.wokpa.app/api/listeners/top-categories",
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