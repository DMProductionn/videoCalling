import { useEffect, useState } from "react"
import useGetMe from "../hooks/useGetMe"
import httpTest from "../Api/http";
import axios from "axios";

const Profile = () => {
  const [token, setRefreshToken] = useState('');

  const { data } = useGetMe()

  console.log(data);

  useEffect(() => {
    // Функция для извлечения refresh_token из куки
    const getRefreshTokenFromCookie = () => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith('refresh_token=')) {
          setRefreshToken(cookie.split('=')[1]); // Сохраняем refresh_token в состоянии
          return;
        }
      }
    };

    getRefreshTokenFromCookie(); // Вызываем функцию при монтировании компонента
  }, []);

  console.log(token);
  

  const refresh = async () => {
    const res = await axios.post('http://localhost:8000/auth/refresh', {
      token
    })
  }


  
  

  return (
    <>
    <div>Profile</div>
    <button onClick={refresh}>обновитб</button>
    </>
  )
}


export default Profile
