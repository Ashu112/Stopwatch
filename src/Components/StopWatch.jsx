import { useEffect, useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(true);

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
          {} : {milliseconds}
        </div>
      </div>
      <div className="stopwatch-btn">
        {start ? (
          <button
            className="btn"
            onClick={() => {
              setStart(false);
            }}
          >
            Start
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => {
              setStart(true);
            }}
          >
            Stop
          </button>
        )}

        <button className="btn">Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
