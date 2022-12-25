import { FormEvent, FormEventHandler, useEffect, useState } from "react";

export interface IControlsProps {
}

export function Controls(props: IControlsProps) {
  const [broadcastChannel, setBroadcastChannel] = useState(new BroadcastChannel("test_channel"));


  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      messageContent: { value: string };
    };
    console.log("form submitted with value: " + target.messageContent.value);
    broadcastChannel.postMessage(target.messageContent.value);
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="messageContent" id="messageDraftField"></input>
        <button type="submit">Send Message</button>
      </form>
    </div >
  );
}
