import { addMediaStream, addMicrophone } from '../../Redux/Slices/checkConnectedDevices.slice';
import { RootState } from '../../Redux/store';
import '../../pages/Chat/Chat.scss'
import { useDispatch, useSelector } from 'react-redux';

const VideoCallActions = () => {
  const dispatch = useDispatch();

  const { mediaStream, connectedMicrophone } = useSelector((state: RootState) => state.connectedDevices);

  // camera
  
  const stopMedia = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        track.stop();
      });
      dispatch(addMediaStream(null));
    }
  };


  const startMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      dispatch(addMediaStream(stream))
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };


  // microphone

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      dispatch(addMicrophone(stream))
    } catch (error) {
      console.error('Ошибка при получении доступа к микрофону:', error);
    }
  };

  const stopRecording = () => {
    if (connectedMicrophone) {
      connectedMicrophone.getTracks().forEach(track => {
        track.stop();
      });
      dispatch(addMicrophone(null));
    }
  };


  return (
    <div className="video-call-actions">
      <button onClick={connectedMicrophone ? stopRecording : startRecording} className="video-action-button mic flex justify-center items-center">
        {
          connectedMicrophone ? <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 6.5C3.77614 6.5 4 6.72386 4 7V8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8V7C12 6.72386 12.2239 6.5 12.5 6.5C12.7761 6.5 13 6.72386 13 7V8C13 10.5927 11.0267 12.7245 8.5 12.9753V15H11.5C11.7761 15 12 15.2239 12 15.5C12 15.7761 11.7761 16 11.5 16H4.5C4.22386 16 4 15.7761 4 15.5C4 15.2239 4.22386 15 4.5 15H7.5V12.9753C4.97334 12.7245 3 10.5927 3 8V7C3 6.72386 3.22386 6.5 3.5 6.5Z" fill="black"/>
          <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8V3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3V8ZM8 0C6.34315 0 5 1.34315 5 3V8C5 9.65685 6.34315 11 8 11C9.65685 11 11 9.65685 11 8V3C11 1.34315 9.65685 0 8 0Z" fill="black"/>
          </svg> : <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 8C13 8.56433 12.9065 9.10683 12.7342 9.61285L11.9202 8.79889C11.9725 8.54075 12 8.27358 12 8V7C12 6.72386 12.2239 6.5 12.5 6.5C12.7761 6.5 13 6.72386 13 7V8Z" fill="black"/>
<path d="M8 12C8.81786 12 9.5784 11.7545 10.212 11.3333L10.9304 12.0517C10.2339 12.5563 9.40224 12.8857 8.5 12.9753V15H11.5C11.7761 15 12 15.2239 12 15.5C12 15.7761 11.7761 16 11.5 16H4.5C4.22386 16 4 15.7761 4 15.5C4 15.2239 4.22386 15 4.5 15H7.5V12.9753C4.97334 12.7245 3 10.5927 3 8V7C3 6.72386 3.22386 6.5 3.5 6.5C3.77614 6.5 4 6.72386 4 7V8C4 10.2091 5.79086 12 8 12Z" fill="black"/>
<path d="M11 3V7.87868L10 6.87868V3C10 1.89543 9.10457 1 8 1C6.93501 1 6.06444 1.83241 6.00342 2.8821L5.15801 2.03669C5.55931 0.852371 6.68011 0 8 0C9.65685 0 11 1.34315 11 3Z" fill="black"/>
<path d="M9.48561 10.6069L8.73808 9.8594C8.50972 9.95013 8.26068 10 8 10C6.89543 10 6 9.10457 6 8V7.12132L5 6.12132V8C5 9.65685 6.34315 11 8 11C8.5405 11 9.04761 10.8571 9.48561 10.6069Z" fill="black"/>
<path d="M1.64648 1.35353L13.6465 13.3535L14.3536 12.6464L2.35359 0.646423L1.64648 1.35353Z" fill="black"/>
                  </svg>
        }
      </button>
      <button onClick={mediaStream ? stopMedia : startMedia} className="video-action-button camera flex justify-center items-center">
        {
          mediaStream ? <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1 12.5523 1 12V6C1 5.44772 1.44772 5 2 5H3.17157C3.96722 5 4.73028 4.68393 5.29289 4.12132L6.12132 3.29289C6.30886 3.10536 6.56321 3 6.82843 3H9.17157C9.43679 3 9.69114 3.10536 9.87868 3.29289L10.7071 4.12132C11.2697 4.68393 12.0328 5 12.8284 5H14C14.5523 5 15 5.44772 15 6V12ZM2 4C0.895431 4 0 4.89543 0 6V12C0 13.1046 0.895431 14 2 14H14C15.1046 14 16 13.1046 16 12V6C16 4.89543 15.1046 4 14 4H12.8284C12.298 4 11.7893 3.78929 11.4142 3.41421L10.5858 2.58579C10.2107 2.21071 9.70201 2 9.17157 2H6.82843C6.29799 2 5.78929 2.21071 5.41421 2.58579L4.58579 3.41421C4.21071 3.78929 3.70201 4 3.17157 4H2Z" fill="black"/>
          <path d="M8 11C6.61929 11 5.5 9.88071 5.5 8.5C5.5 7.11929 6.61929 6 8 6C9.38071 6 10.5 7.11929 10.5 8.5C10.5 9.88071 9.38071 11 8 11ZM8 12C9.933 12 11.5 10.433 11.5 8.5C11.5 6.567 9.933 5 8 5C6.067 5 4.5 6.567 4.5 8.5C4.5 10.433 6.067 12 8 12Z" fill="black"/>
          <path d="M3 6.5C3 6.77614 2.77614 7 2.5 7C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6C2.77614 6 3 6.22386 3 6.5Z" fill="black"/>
          </svg> : <svg width="32" height="32" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 12C16 12.5523 15.5523 13 15 13H3C2.44772 13 2 12.5523 2 12V6C2 5.44772 2.44772 5 3 5H4.17157C4.96722 5 5.73028 4.68393 6.29289 4.12132L7.12132 3.29289C7.30886 3.10536 7.56321 3 7.82843 3H10.1716C10.4368 3 10.6911 3.10536 10.8787 3.29289L11.7071 4.12132C12.2697 4.68393 13.0328 5 13.8284 5H15C15.5523 5 16 5.44772 16 6V12ZM3 4C1.89543 4 1 4.89543 1 6V12C1 13.1046 1.89543 14 3 14H15C16.1046 14 17 13.1046 17 12V6C17 4.89543 16.1046 4 15 4H13.8284C13.298 4 12.7893 3.78929 12.4142 3.41421L11.5858 2.58579C11.2107 2.21071 10.702 2 10.1716 2H7.82843C7.29799 2 6.78929 2.21071 6.41421 2.58579L5.58579 3.41421C5.21071 3.78929 4.70201 4 4.17157 4H3Z" fill="black"/>
<path d="M9 11C7.61929 11 6.5 9.88071 6.5 8.5C6.5 7.11929 7.61929 6 9 6C10.3807 6 11.5 7.11929 11.5 8.5C11.5 9.88071 10.3807 11 9 11ZM9 12C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5C7.067 5 5.5 6.567 5.5 8.5C5.5 10.433 7.067 12 9 12Z" fill="black"/>
<path d="M4 6.5C4 6.77614 3.77614 7 3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6C3.77614 6 4 6.22386 4 6.5Z" fill="black"/>
<rect x="0.602905" y="1" width="22.1681" height="0.947257" rx="0.473629" transform="rotate(39.5308 0.602905 1)" fill="black"/>
          </svg>
        }
      </button>
      {/* <button className="video-action-button maximize"></button> */}
      <button className="video-action-button endcall">Leave</button>
    </div>
  )
}

export default VideoCallActions
