import { useEffect, useState } from "react"
import useGetMe from "../hooks/useGetMe"
import Cookies from 'js-cookie';
import axios from "axios";

const Profile = () => {
  const [token, setRefreshToken] = useState('');

  const { data } = useGetMe()

  console.log(data);

  useEffect(() => {
    const refreshToken = Cookies.get('refresh_token');

if (refreshToken) {
    console.log(refreshToken);
} else {
    console.log('Refresh token not found in cookie');
} 
  }, []);

  console.log(token);
  

  const refresh = async () => {
    const res = await axios.post('http://localhost:8000/auth/refresh', {}, {
      withCredentials: true 
    });
  }


  
  

  return (
    <>
    <div>Profile</div>
    <button onClick={refresh}>обновитб</button>
    </>
  )
}


export default Profile
