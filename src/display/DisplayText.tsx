import * as React from 'react';
import { MutableRefObject, useEffect, useRef, useState } from 'react';


export interface IDisplayTextProps {
  text: string;
  audioEl: MutableRefObject<HTMLAudioElement | null>;
}


export const DisplayText = function DisplayText(props: IDisplayTextProps) {
  // Text starts out unrendered, and becomes visible char by char
  // Index starts at 1. An index of 0 indicates no text should be rendered.
  const [charIdx, setCharIdx] = useState(0);
  const intervalRef: MutableRefObject<NodeJS.Timer | null> = useRef(null);

  const addLetterWithSound = () => {
    setCharIdx(c => {
      if (c + 1 > props.text.length && intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        return c;
      } else {

        return c + 1;
      }
    });
  };

  useEffect(() => {
    setCharIdx(c => 0);
    const timer = setInterval(addLetterWithSound, 200)
    intervalRef.current = timer;
    return () => clearInterval(timer);
  }, []);



  return (
    <div>
      {props.text.slice(0, charIdx)}
    </div>
  );
}
