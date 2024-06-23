import { useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const sec = 0;
  return (
    <div className="stopwatch-container">
      <div className="time-container">
        <div className="time-main">
          {sec} : {time}
        </div>
      </div>
      <div className="stopwatch-btn">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
