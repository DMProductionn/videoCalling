import { useEffect, useState } from 'react'
import './JoinChat.css'

const JoinChat = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 1);
  }, [])


  return (
    <div className='w-full overflow-hidden'>
      <div className={active ? 'active flex flex-col justify-center items-center h-[100vh] wrapper__join active' : 'flex flex-col justify-center items-center h-[100vh] wrapper__join'}>
        <h2 className='text-[32px] mb-[5px] font-medium'>Присоединитесь к чату</h2>
        <h2 className='text-[18px] mb-[20px]'>Введите что-то пока не придумали</h2>
        <input className='w-[500px] h-[40px] pl-[10px] border rounded-[12px] outline-none' type="text" />
        <button className='bg-blue w-[250px] h-[40px] rounded-[16px] text-[#fff] mt-[20px]'>Присоединиться</button>
      </div>
    </div>
  )
}

export default JoinChat
