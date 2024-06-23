import { useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(true);
  const sec = 0;
  return (
    <div className="stopwatch-container">
      <div className="time-container">
        <div className="time-main">
          {sec} : {time}
        </div>
      </div>
      <div className="stopwatch-btn">
        {start ? (
          <button className="btn">Start</button>
        ) : (
          <button className="btn">Stop</button>
        )}

        <button className="btn">Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
