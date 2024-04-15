import { useQuery } from "@tanstack/react-query"
import { getMe } from "../services/login.service"

const useGetMe = () => {
  return useQuery({queryKey: ['usersMe'], 
  queryFn: getMe
})
}

export default useGetMe