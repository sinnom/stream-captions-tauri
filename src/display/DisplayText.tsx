import * as React from 'react';
import { useEffect, useState } from 'react';

export interface IDisplayTextProps {
  text: string;
}


export const DisplayText = function DisplayText(props: IDisplayTextProps) {
  // Text starts out unrendered, and becomes visible char by char
  // Index starts at 1. An index of 0 indicates no text should be rendered.
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    setCharIdx(c => 0);
    const intervalId = setInterval(() => {
      setCharIdx(c => {
        if (c + 1 > props.text.length) {
          clearInterval(intervalId)
        }
        return c + 1
      });
    }, 200);
    return () => clearInterval(intervalId);
  }, [props.text])

  return (
    <div>
      {props.text.slice(0, charIdx)}
    </div>
  );
}
