import { useEffect } from 'react';
import soundByte from '../assets/twoTone2.mp3';
import { Howl } from 'howler';
import { invoke } from '@tauri-apps/api';

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
    if (props.text !== '' && !props.text.endsWith(' ')) {
      // const instance = sound.play();
      // setTimeout(() => sound.stop(instance), props.soundDuration);
      invoke('sound', { soundFile: soundByte });
      console.log("invoked");
    }
    return () => { sound.stop() };
  }, [props.text]);

  return null;
}
