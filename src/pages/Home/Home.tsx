import { useNavigate } from 'react-router-dom';
import './Home.css'
import { useState } from 'react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false)

  const onClickJoinChat = () => {
    setActive(true)
    setTimeout(() => {
      navigate('/join')
    }, 500);
  }

  return (
    <div className='w-full h-[100vh] flex justify-center items-center flex-wrap overflow-hidden'>
      <div className={active ? 'active flex gap-[150px] wrapper__chat' : 'flex gap-[150px] wrapper__chat'}>
      <div className="text-center">
        <button onClick={onClickJoinChat} className="bg-gray w-[250px] h-[250px] rounded-[50%] flex items-center justify-center join__chat">
        <svg width="130" height="130" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.67789 11.894C2.88828 12.1049 2.99363 12.3988 2.96523 12.6954C2.90159 13.3601 2.75502 14.0519 2.56677 14.6945C3.96166 14.3721 4.81358 13.9981 5.20082 13.8019C5.42062 13.6905 5.67381 13.6642 5.91182 13.728C6.56966 13.9044 7.27076 14 8 14C11.9956 14 15 11.1925 15 8C15 4.80754 11.9956 2 8 2C4.0044 2 1 4.80754 1 8C1 9.46809 1.6173 10.8304 2.67789 11.894ZM2.18489 15.7989C2.17816 15.8003 2.17142 15.8016 2.16466 15.8029C2.07283 15.821 1.97922 15.8388 1.88382 15.8563C1.75 15.8808 1.61264 15.9047 1.47172 15.9277C1.27271 15.9603 1.12037 15.7521 1.19898 15.5664C1.25034 15.4451 1.30097 15.3179 1.3503 15.1861C1.38164 15.1023 1.41245 15.0167 1.44259 14.9294C1.44389 14.9256 1.44518 14.9219 1.44648 14.9181C1.69422 14.1984 1.89596 13.3711 1.96979 12.6001C0.743061 11.3699 0 9.76087 0 8C0 4.13401 3.58172 1 8 1C12.4183 1 16 4.13401 16 8C16 11.866 12.4183 15 8 15C7.18324 15 6.39508 14.8929 5.65284 14.6939C5.13337 14.9571 4.01434 15.4363 2.18489 15.7989Z" fill="#fff"/>
<path d="M4 5.5C4 5.22386 4.22386 5 4.5 5H11.5C11.7761 5 12 5.22386 12 5.5C12 5.77614 11.7761 6 11.5 6H4.5C4.22386 6 4 5.77614 4 5.5ZM4 8C4 7.72386 4.22386 7.5 4.5 7.5H11.5C11.7761 7.5 12 7.72386 12 8C12 8.27614 11.7761 8.5 11.5 8.5H4.5C4.22386 8.5 4 8.27614 4 8ZM4 10.5C4 10.2239 4.22386 10 4.5 10H8.5C8.77614 10 9 10.2239 9 10.5C9 10.7761 8.77614 11 8.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z" fill="#fff"/>
        </svg>
        </button>
        <p className="mt-[20px] text-[20px]">Присоединиться к чату</p>
      </div>
      <div className="text-center">
        <button className="bg-blue w-[250px] h-[250px] rounded-[50%] flex items-center justify-center create__chat">
        <svg width="130" height="130" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.3125 72.625C36.3125 72.625 31.125 72.625 31.125 67.4375C31.125 62.25 36.3125 46.6875 57.0625 46.6875C77.8125 46.6875 83 62.25 83 67.4375C83 72.625 77.8125 72.625 77.8125 72.625H36.3125Z" fill="white"/>
<path d="M57.0625 41.5C65.6574 41.5 72.625 34.5324 72.625 25.9375C72.625 17.3426 65.6574 10.375 57.0625 10.375C48.4676 10.375 41.5 17.3426 41.5 25.9375C41.5 34.5324 48.4676 41.5 57.0625 41.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.0599 72.625C26.3295 71.1513 25.9375 69.4043 25.9375 67.4375C25.9375 60.4061 29.4601 53.1747 35.9801 48.1398C33.1279 47.2275 29.8027 46.6875 25.9375 46.6875C5.1875 46.6875 0 62.25 0 67.4375C0 72.625 5.1875 72.625 5.1875 72.625H27.0599Z" fill="white"/>
<path d="M23.3438 41.5C30.5062 41.5 36.3125 35.6937 36.3125 28.5312C36.3125 21.3688 30.5062 15.5625 23.3438 15.5625C16.1813 15.5625 10.375 21.3688 10.375 28.5312C10.375 35.6937 16.1813 41.5 23.3438 41.5Z" fill="white"/>
        </svg>
        </button>
        <p className="mt-[20px] text-[20px]">Создать групповой чат</p>
      </div>
      </div>
    </div>
  )
}

export default Home

