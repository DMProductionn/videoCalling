import { useQuery } from "@tanstack/react-query"
import { getUsersChat } from "../services/chat.service"

const useGetUsersChat = (chat_id: string | null) => {
  return useQuery({queryKey: ['usersChat'], 
  queryFn: () => getUsersChat(chat_id)
})
}

export default useGetUsersChat