import { useEffect, useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setTime(time + 1);
      }, 10);
    }
  }, [start, time]);

  return (
    <div className="stopwatch-container">
      <div className="time-container">
        <div className="time-main">
          {hours}:{minutes}:{seconds}:{milliseconds}
        </div>
      </div>
      <div className="stopwatch-btn">
        <button
          className="btn"
          onClick={() => {
            setStart(!start);
          }}
        >
          {start ? "Stop" : "Start"}
        </button>

        <button
          className="btn"
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
