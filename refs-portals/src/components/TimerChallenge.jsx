import { useState, useRef } from "react";

// let timer; => we cant use it because when we click two instance i n one time first onre will be not executed
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();//when we rerender the component value dont lost
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  //let timer; =>we cant use it because when we click stop component will be rerendered and timer be undefined
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStart(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStart ? handleStop : handleStart}>
          {timerStart ? "stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStart ? "active" : undefined}>
        {timerStart ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
