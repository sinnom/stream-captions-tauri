import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { DisplayTextAudio } from './DisplayTextAudio';

export interface IDisplayTextProps {
  text: string;
  audioEl: MutableRefObject<HTMLAudioElement | null>;
}

export const DisplayText = function DisplayText(props: IDisplayTextProps) {
  // Text starts out unrendered, and becomes visible char by char
  // Index starts at 1. An index of 0 indicates no text should be rendered.
  const [charIdx, setCharIdx] = useState(0);
  const intervalRef: MutableRefObject<NodeJS.Timer | null> = useRef(null);

  const addLetter = () => {
    setCharIdx(c => {
      if (c + 1 > props.text.length && intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        return c;
      } else {
        return c + 1;
      }
    });
  };

  function buildChars(defaultDelay: number) {
    const delayMultiplierMap = new Map([
      [',', 2]
    ]);
    const delayMultiplier = delayMultiplierMap.get(props.text.slice(-1)) ?? 1;
    const delay = defaultDelay * delayMultiplier;

    setCharIdx(c => {
      if (c + 1 > props.text.length) {
        return c;
      } else {
        setTimeout(buildChars, delay);
        return c + 1;
      }
    });
  }

  useEffect(() => {
    setCharIdx(c => 0);
    const timer = setInterval(addLetter, 50)
    intervalRef.current = timer;
    return () => clearInterval(timer);
  }, []);


  return (
    <div>
      <DisplayTextAudio text={props.text.slice(0, charIdx)} soundDuration={50} />
      {props.text.slice(0, charIdx)}
    </div >
  );
}
