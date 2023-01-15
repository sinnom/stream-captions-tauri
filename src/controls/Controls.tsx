import { appWindow } from "@tauri-apps/api/window";
import { exit } from "@tauri-apps/api/process";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { ControlsOpenDisplay } from "./ControlsOpenDisplay";
import { ControlsSubmitText } from "./ControlsSubmitText";

export interface IControlsProps {
}

export function Controls(props: IControlsProps) {
  // When the controls are closed, exit the application.
  useEffect(() => {
    let unlisten;
    (async () => {
      unlisten = await appWindow.onCloseRequested(async (event) => {
        exit();
      });
    })();
    return unlisten;
  });

  return (
    <div>
      <ControlsSubmitText />
      <ControlsOpenDisplay />
    </div>
  );
}
