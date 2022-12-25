import * as React from 'react';
import { useState } from 'react';
import { DisplayText } from './DisplayText';

export interface IDisplayProps {
}

export function Display(props: IDisplayProps) {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState(0);

  const bc = new BroadcastChannel("test_channel");
  bc.onmessage = (event) => {
    console.log("message received");
    if (event instanceof MessageEvent) {
      setMessage(event.data);
      setKey(Math.random())
    }
  };

  return (
    <div>
      <DisplayText text={message} key={key} />
    </div>
  );
}
