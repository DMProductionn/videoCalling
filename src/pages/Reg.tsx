import { useState } from "react";
import useRegUser from "../hooks/useRegUser";

const Reg = () => {
  const [email, setValueEmail] = useState('');
  const [password, setValuePassword] = useState('');

  const { mutate } = useRegUser();

  const registartion = () => {
    mutate({email, password});
  }


  return (
    <div>
      <p>Логин</p>
      <input value={email} onChange={(e) => setValueEmail(e.target.value)} type="text" placeholder="Логин"/>
      <p>Пароль</p>
      <input value={password} onChange={(e) => setValuePassword(e.target.value)} type="text" placeholder="Пароль"/>
      <button onClick={registartion}>Зарегаться</button>
    </div>
  )
}

export default Reg
