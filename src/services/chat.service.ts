import http from "../Api/http"

export const createChat = async (theme: string, password: string, name: string) => {
  const response = await http.post('/chat/add_chat', {
    theme,
    password, 
    name
  });
  return response.data
}

export const getUsersChat = async (chat_id: string | null) => {
  const response = await http.get(`/chat/info-chat/${chat_id}`);
  return response.data
}

export const getMessageChat = async (chat_id: string | null) => {
  const response = await http.get(`/chat/get_messages_chats?chat_id=${chat_id}`);
  return response.data
}

export const connectChat = async (id: string, name: string, password: string) => {
  const response = await http.post(`/chat/connect/${id}`, {
    id,
    password,
    name
  });
  console.log(response.data);
  return response.data
}