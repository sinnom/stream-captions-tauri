import { appWindow, WebviewWindow } from '@tauri-apps/api/window';
import { useEffect, useState } from 'react';
export interface IControlsOpenDisplayProps {
}

export function ControlsOpenDisplay(props: IControlsOpenDisplayProps) {
  const [window, setWindow] = useState<WebviewWindow>();

  const getDisplayWindow = () => {
    const displayWindow = WebviewWindow.getByLabel("display");
    if (displayWindow === null) {
      setWindow(new WebviewWindow('display', { url: "display.html" }));
    } else {
      setWindow(displayWindow);
      displayWindow.setFocus();
    }
  };

  return (
    <div>
      <button onClick={getDisplayWindow}>Open Display</button>
    </div>
  );
}
