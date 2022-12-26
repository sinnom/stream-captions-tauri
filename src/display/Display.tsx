import { useEffect, useRef, useState } from 'react';
import { DisplayText } from './DisplayText';

export interface IDisplayProps {
}

export function Display(props: IDisplayProps) {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState(0);
  const [broadcastChannel] = useState(new BroadcastChannel("test_channel"));

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
    <div>
      <DisplayText text={message} audioEl={audioRef} key={key} />
    </div>
  );
}
