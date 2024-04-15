import axios from "axios";
import http, { httpTest } from "../Api/http"

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


http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return axios.post('localhost:8000/auth/refresh').then((response) => {
        console.log('Token refreshed');
      });
    }
  }
);
