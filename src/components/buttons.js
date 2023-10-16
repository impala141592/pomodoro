function StartButton({ isRunning, toggleCountdown }) {
  return (
    <button onClick={toggleCountdown}>{isRunning ? "Pause" : "Start"}</button>
  );
}

function StopButton({ resetCountdown }) {
  return <button onClick={resetCountdown}>Reset</button>;
}

export { StartButton, StopButton };
