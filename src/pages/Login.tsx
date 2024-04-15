import { useState } from "react";
import useLoginUser from "../hooks/useLoginUser";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useLoginUser();

  const login = () => {
    mutate({email, password})
  }

  return (
    <div>
      <p>Логин</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Логин"/>
      <p>Пароль</p>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Пароль"/>
      <button onClick={login}>login</button>
    </div>
  )
}

export default Login
