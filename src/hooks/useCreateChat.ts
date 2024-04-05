import { useMutation } from "@tanstack/react-query"
import { createChat } from "../services/chat.service"

const useCreateChat = () => {
  // const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['addChat'], 
    mutationFn: (data: { theme: string, password: string, name: string }) => createChat(data.theme, data.password, data.name),
  })
}

export default useCreateChat