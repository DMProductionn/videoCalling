import { useState } from 'react';
import './Chat.scss'
import VideoParticipants from '../../components/Chat/VideoParticipants';
import VideoCallActions from '../../components/Chat/VideoCallActions';
import ChatRightSide from '../../components/Chat/ChatRightSide';
import { getUsersChat } from '../../services/chat.service';
import { useQuery } from '@tanstack/react-query';

const Chat: React.FC = () => {
  const [chatId, _] = useState(localStorage.getItem('chatId'))

    const { data } = useQuery({queryKey: ['usersChat'], 
    queryFn: () => getUsersChat(chatId)
  })


 
  return (
    
    <>   
      <div className="app-container">
        <div className="app-main">
        <div className="video-call-wrapper">
          {data?.names?.map((name: string) => (
            <VideoParticipants key={name} username={name} />
          ))}
          <VideoCallActions />
          </div>
        </div>
          <ChatRightSide />
          <button className="expand-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </button>
      </div>
    </>
  );
}
;

export default Chat;
