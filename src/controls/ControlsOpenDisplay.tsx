import { appWindow, WebviewWindow } from '@tauri-apps/api/window';
import { useEffect, useState } from 'react';
export interface IControlsOpenDisplayProps {
}

export function ControlsOpenDisplay(props: IControlsOpenDisplayProps) {
  function handleClick() {
    const displayWindow = WebviewWindow.getByLabel("display");
    if (displayWindow === null) {
      new WebviewWindow('display', {
        url: "display.html",
        width: 400,
        height: 100,
        decorations: false,
        // hiddenTitle: true
      });
    } else {
      displayWindow.setFocus();
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Open Display</button>
    </div>
  );
}
