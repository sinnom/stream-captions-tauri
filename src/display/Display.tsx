import * as React from 'react';
import { useState } from 'react';

export interface IDisplayProps {
}

export function Display(props: IDisplayProps) {
  const [message, setMessage] = useState('');

  const bc = new BroadcastChannel("test_channel");
  bc.onmessage = (event) => {
    if (event instanceof MessageEvent) {
      setMessage(event.data)
    }
  };

  return (
    <div>
      {message}
    </div>
  );
}
