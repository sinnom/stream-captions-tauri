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
  const timer = useRef<NodeJS.Timeout | null>(null);

  function buildChars(defaultDelay: number, nextCharIdx: number) {
    const delayMultiplierMap = new Map([
      [',', 4],
      ['.', 8]
    ]);
    const delayMultiplier = delayMultiplierMap.get(props.text.charAt(nextCharIdx)) ?? 1;
    const delay = defaultDelay * delayMultiplier;
    console.log("buildChars called");
    setCharIdx(c => {
      if (c + 1 > props.text.length) {
        return c;
      } else {
        if (timer.current) {
          clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => buildChars(defaultDelay, c + 1), delay);
        return c + 1;
      }
    });
  }

  useEffect(() => {
    setCharIdx(c => 0);
    // timer.current = setTimeout(() => buildChars(100), 100);
    buildChars(100, 0);
    return () => { timer.current && clearTimeout(timer.current) };
  }, []);


  return (
    <div>
      <DisplayTextAudio text={props.text.slice(0, charIdx)} soundDuration={50} />
      {props.text.slice(0, charIdx)}
    </div >
  );
}
