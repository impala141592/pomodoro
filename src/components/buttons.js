function StartButton({ isRunning, toggleCountdown }) {
  return (
    <button className="control-button" onClick={toggleCountdown}>
      {isRunning ? "pause" : "start"}
    </button>
  );
}

function StopButton({ resetCountdown }) {
  return (
    <button className="control-button" onClick={resetCountdown}>
      stop
    </button>
  );
}

export { StartButton, StopButton };
