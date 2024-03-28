import { useEffect, useState } from 'react'
import './CreateChat.css'

const CreateChat = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 1);
  }, [])


  return (
    <div className='w-full overflow-hidden'>
      <div className={active ? 'active flex flex-col justify-center items-center h-[100vh] wrapper__create active gap-[10px]' : 'flex flex-col justify-center items-center h-[100vh] wrapper__create gap-[20px]'}>
        <h2 className='text-[32px] mb-[5px] font-medium'>Создайте чат</h2>
        <p className='text-start'>Тема чата</p>
        <input className='w-[500px] h-[40px] pl-[10px] border rounded-[12px] outline-none' type="text" />
        <p className='text-start'>Пароль</p>
        <input className='w-[500px] h-[40px] pl-[10px] border rounded-[12px] outline-none' type="text" />
        <button className='bg-blue w-[250px] h-[40px] rounded-[16px] text-[#fff] mt-[20px]'>Создать</button>
      </div>
    </div>
  )
}

export default CreateChat
