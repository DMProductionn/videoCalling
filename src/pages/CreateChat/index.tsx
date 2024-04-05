import React, { useEffect, useState } from 'react'
import './CreateChat.css'
import useCreateChat from '../../hooks/useCreateChat';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDateChat, addNameChat } from '../../Redux/Slices/dateChat.slice';

const CreateChat: React.FC = () => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate } = useCreateChat();

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 1);
  }, [])

  const onClickCreateChat = () => {
    mutate({theme, password, name}, {
        onSuccess: (data) => {
          const chatId = data.url.split('/').pop();
          dispatch(addDateChat(data));
          dispatch(addNameChat(name));
          localStorage.setItem('chatId', chatId);
          localStorage.setItem('username', name);
          if (data) {
            navigate(`/connect/chat/${chatId}`);
          }
        },
    });
}

  


  return (
    <div className='w-full overflow-hidden'>
      <div className={active ? 'active flex flex-col justify-center items-center h-[100vh] wrapper__create active gap-[10px]' : 'flex flex-col justify-center items-center h-[100vh] wrapper__create gap-[20px]'}>
        <h2 className='text-[32px] mb-[5px] font-medium'>Создайте чат</h2>
        <p className='text-start'>Тема чата</p>
        <input value={theme} onChange={e => setTheme(e.target.value)} className='w-[500px] h-[40px] pl-[10px] border rounded-[12px] outline-none' type="text" />
        <p className='text-start'>Ваше имя</p>
        <input value={name} onChange={e => setName(e.target.value)} className='w-[500px] h-[40px] pl-[10px] border rounded-[12px] outline-none' type="text" />
        <p className='text-start'>Пароль</p>
        <input value={password} onChange={e => setPassword(e.target.value)} className='w-[500px] h-[40px] pl-[10px] border rounded-[12px] outline-none' type="text" />
        <button onClick={onClickCreateChat} className='bg-blue w-[250px] h-[40px] rounded-[16px] text-[#fff] mt-[20px]'>Создать</button>
      </div>
    </div>
  )
}

export default CreateChat
