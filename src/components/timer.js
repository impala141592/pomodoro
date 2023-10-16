import React, { useState, useEffect } from "react";
import Countdown from "./countdown";
import { StartButton, StopButton } from "./buttons";

function Timer() {
  const timeOptions = [
    { label: "pomodoro", value: 1500 }, // 25 minutes in seconds
    { label: "short break", value: 300 }, // 5 minutes in seconds
    { label: "long break", value: 900 }, // 15 minutes in seconds
  ];

  const [selectedTime, setSelectedTime] = useState(timeOptions[0].value);
  const [seconds, setSeconds] = useState(selectedTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, seconds]);

  const toggleCountdown = () => {
    setIsRunning(!isRunning);
  };

  const handleTimeOptionClick = (value) => {
    setIsRunning(false); // Stop the timer
    setSelectedTime(value);
    setSeconds(value); // Update the countdown time
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  return (
    <div className="timer-container">
      <div className="timer-options">
        {timeOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleTimeOptionClick(option.value)}
            className={`button ${
              selectedTime === option.value ? "active" : ""
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="timer">
        <Countdown time={formattedTime} />

        <button onClick={toggleCountdown}>
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={() => {
            setSelectedTime(timeOptions[0].value);
            setSeconds(timeOptions[0].value);
            toggleCountdown();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;