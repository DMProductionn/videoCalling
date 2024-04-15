import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../services/login.service"

const useLoginUser = () => {
  return useMutation({
    mutationKey: ['loginUser'], 
    mutationFn: (data: { email: string, password: string}) => loginUser(data.email, data.password),
  })
}

export default useLoginUser