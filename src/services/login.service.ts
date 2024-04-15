import axios from "axios";
import httpTest from "../Api/http";
import http from "../Api/http";

export const regUser = async (email: string, password: string) => {
  const response = await http.post<{email: string, password: string}>('/auth/register', {
    email,
    password
  })
  console.log(response.data);
  
  return response.data
}


export const loginUser = async (email: string, password: string) => {
  const response = await http.post<{email: string, password: string}>('/auth/login', {
    email,
    password
  })
  console.log(response.data);
  
  return response.data
}


export const getMe = async () => {
  const response = await http.get('/auth/me')
  console.log(response.data);
  return response.data
}


httpTest.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      try {
        const response = await httpTest.post('/auth/refresh');
        console.log('Token refreshed');
        // Обновление токена успешно, повторяем исходный запрос
        return httpTest.request(error.config);
      } catch (refreshError) {
        // Ошибка при обновлении токена
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
