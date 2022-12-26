import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { ControlsSubmitText } from "./ControlsSubmitText";

export interface IControlsProps {
}

export function Controls(props: IControlsProps) {
  return (
    <ControlsSubmitText />
  );
}
