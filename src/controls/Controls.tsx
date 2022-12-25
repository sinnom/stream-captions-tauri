
export interface IControlsProps {
}

export function Controls(props: IControlsProps) {
  const bc = new BroadcastChannel("test_channel");
  return (
    <div>
      <button onClick={() => bc.postMessage("test message")} >Send Message</button>
    </div>
  );
}
