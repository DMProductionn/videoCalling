import { useMutation } from "@tanstack/react-query"
import { connectChat } from "../services/chat.service"

const useConnectChat = () => {
  return useMutation({mutationKey: ['connectChat'], 
  mutationFn: (data: {id: string, name: string, password: string}) => connectChat(data.id, data.name, data.password)
})
}

export default useConnectChat