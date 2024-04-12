import { useQuery } from "@tanstack/react-query"
import { getMessageChat } from "../services/chat.service"

const useGetMessageChat = (chat_id: string | null) => {
  return useQuery({queryKey: ['usersMessage'], 
  queryFn: () => getMessageChat(chat_id)
})
}

export default useGetMessageChat