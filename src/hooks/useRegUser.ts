import { useMutation } from "@tanstack/react-query"
import { regUser } from "../services/login.service"

const useRegUser = () => {
  return useMutation({
    mutationKey: ['regUser'], 
    mutationFn: (data: { email: string, password: string}) => regUser(data.email, data.password),
  })
}

export default useRegUser