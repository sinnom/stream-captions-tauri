import { useEffect, useRef, useState } from 'react';
import { DisplayText } from './DisplayText';
import soundByte from '../assets/twoTone2.mp3';


export interface IDisplayProps {
}

export function Display(props: IDisplayProps) {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState(0);
  const [broadcastChannel] = useState(new BroadcastChannel("test_channel"));

  // Subscribe to messages coming from Control windows
  useEffect(() => {
    broadcastChannel.onmessage = (event) => {
      console.log("message received");
      if (event instanceof MessageEvent) {
        setMessage(event.data);
        setKey(Math.random())
      }
    };
    return () => { broadcastChannel.onmessage = null; };
  }, []);

  const audioRef: React.MutableRefObject<HTMLAudioElement | null> = useRef(null);

  return (
    <div className="display">
      <audio ref={audioRef} src={soundByte}></audio>
      <DisplayText text={message} audioEl={audioRef} key={key} />
    </div>
  );
}
