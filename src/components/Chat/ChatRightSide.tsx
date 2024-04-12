import '../../pages/Chat/Chat.scss'
import React, { useEffect, useRef, useState } from "react";
import { httpWebSocket } from '../../Api/http';
import { getMessageChat } from '../../services/chat.service';
import WriteMessage from './WriteInPrivateMessage/WriteMessage';


type TypeMessage = {
  id: number
  event: string
  name: string
  content: string
}

const ChatRightSide = () => {
  const [messages, setMessages] = useState<TypeMessage[]>([]);
  const [value, setValue] = useState('');
  const socket = useRef<WebSocket | null>();
  const [chatId, _] = useState(localStorage.getItem('chatId'));
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [contextMenu, setContextMenu] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  

  useEffect(() => {

        socket.current = new WebSocket(`ws://${httpWebSocket.defaults.baseURL}/chat/ws/${chatId}`);

        socket.current.onopen = () => {
            console.log('WebSocket connection');
        }

        socket.current.onmessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data);
            setMessages(prev => [message, ...prev]);
        };

        socket.current.onclose = (event: CloseEvent) => {
            console.log('Socket закрыт', event);
        };

        socket.current.onerror = () => {
            console.log('Socket произошла ошибка');
        };

        const test = async (chatId: string | null) => {
          const data = await getMessageChat(chatId)
          data?.map((el: TypeMessage) => setMessages(prev => [el, ...prev]))
        }

        test(chatId)

}, []);


useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);



const sendMessage = async () => {
        const message = {
            message: value,
            id: Date.now(),
            event: 'message'
        };
        if (socket.current) {
          socket.current.send(JSON.stringify(message.message));
        }
        setValue('');
    } 

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number | null) => {
      e.preventDefault();
      setContextMenu(!contextMenu);
      setSelectedMessage(index);
    }


  return (
    <div className="right-side">
    <button className="btn-close-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-x-circle" viewBox="0 0 24 24">
        <defs></defs>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M15 9l-6 6M9 9l6 6"></path>
      </svg>
    </button>
    <div className="chat-container">
      <div className="chat-area">
        {
          messages?.slice(0).reverse()?.map((mess, index) => (
            mess.name === localStorage.getItem('username') 
            
            ? 

            <div ref={messagesEndRef} key={index} className={'message-wrapper reverse'}>
              <div className="profile-picture">
                <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp" />
              </div>
            <div className="message-content">
              <p className="name">{mess.name}</p>
              <div className="message">{mess.content}</div>
            </div>
        </div>

        : 

        <div ref={messagesEndRef} onContextMenu={(e) => handleClick(e, index)} key={index} className={'message-wrapper relative'}>
              <div className="profile-picture">
                <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp" />
              </div>
            <div className="message-content">
              <p className="name">{mess.name}</p>
              <div className="message">{mess.content}</div>
            </div>
           { selectedMessage === index && <WriteMessage /> } 
        </div>
          ))
        }
        
      </div>
      <div className="chat-typing-area-wrapper">
        <div className="chat-typing-area">
          <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Напишите сообщение..." className="chat-input" />
          <button onClick={sendMessage} className="send-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ChatRightSide
