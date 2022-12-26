import { useEffect } from 'react';
import soundByte from '../assets/twoTone2.mp3';
import { Howl } from 'howler';

let sound = new Howl({
  src: [soundByte],
  preload: true,
  pool: 10,
})


export interface IDisplayTextAudioProps {
  text: string,
  soundDuration: number,
}

export function DisplayTextAudio(props: IDisplayTextAudioProps) {
  useEffect(() => {
    if (props.text !== '') {
      sound.stop();
      const instance = sound.play();
      setTimeout(() => sound.stop(instance), props.soundDuration);
    }
    return () => { sound.stop() };
  }, [props.text]);
  return (
    <div>
      {props.text}
    </div>
  );
}
