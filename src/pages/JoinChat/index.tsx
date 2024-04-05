import { useEffect, useState } from 'react'
import './JoinChat.css'
import useConnectChat from '../../hooks/useConnectChat';
import { useNavigate } from 'react-router-dom';

const JoinChat: React.FC = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [id, setChatId] = useState('');

  const { mutate } = useConnectChat();

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 1);
  }, [])

  const onClickConnectChat = () => {
    mutate({id, name, password}, {
      onSuccess: (data) => {
        const chatId = data.url.split('/').pop();
        localStorage.setItem('chatId', chatId);
        localStorage.setItem('username', name);
        if (data) {
          navigate(`/connect/chat/${chatId}`);
        }
      },
    })
  }


  return (
    <div className='w-full overflow-hidden'>
      <div className={active ? 'active flex flex-col justify-center items-center h-[100vh] wrapper__join active' : 'flex flex-col justify-center items-center h-[100vh] wrapper__join'}>
        <h2 className='text-[32px] mb-[5px] font-medium'>Присоединитесь к чату</h2>
        <h2 className='text-[18px] mb-[20px]'>Введите что-то пока не придумали</h2>
        <p className='text-start'>Id чата</p>
        <input value={id} onChange={e => setChatId(e.target.value)} className='w-[500px] h-[40px] pl-[10px] border rounded-[12px] outline-none' type="text" />
        <p className='text-start'>Ваше имя</p>
        <input value={name} onChange={e => setName(e.target.value)} className='w-[500px] h-[40px] pl-[10px] border rounded-[12px] outline-none' type="text" />
        <p className='text-start'>Пароль</p>
        <input value={password} onChange={e => setPassword(e.target.value)} className='w-[500px] h-[40px] pl-[10px] border rounded-[12px] outline-none' type="text" />
        <button onClick={onClickConnectChat} className='bg-blue w-[250px] h-[40px] rounded-[16px] text-[#fff] mt-[20px]'>Присоединиться</button>
      </div>
    </div>
  )
}

export default JoinChat
