import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { ControlsOpenDisplay } from "./ControlsOpenDisplay";
import { ControlsSubmitText } from "./ControlsSubmitText";

export interface IControlsProps {
}

export function Controls(props: IControlsProps) {
  return (
    <div>
      <ControlsSubmitText />
      <ControlsOpenDisplay />
    </div>
  );
}
