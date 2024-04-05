
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import '../../pages/Chat/Chat.scss'

type TypeVideoParticipantsProps = {
  username: string
}


const VideoParticipants: React.FC<TypeVideoParticipantsProps> = ({ username }) => {
  const { mediaStream, connectedMicrophone } = useSelector((state: RootState) => state.connectedDevices);


  return (
       <div className="video-participant">
       {mediaStream && (
        <video 
          autoPlay 
          playsInline
          muted
          ref={(video) => {
            if (video) {
              video.srcObject = mediaStream;
            }
          }}
        />
      )}
          <div className="participant-actions">
           {connectedMicrophone === null &&<button className="btn-mute"></button>}
           {mediaStream === null && <button className="btn-camera"></button>}
         </div>
         <p className="name-tag">{username}</p>
         <img className={mediaStream ? 'hidden' : ''} src="https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant" /> 
       </div>
  )
}

export default VideoParticipants
