import { useState, useEffect } from "react";
export default function QuestionTimer({ timer, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log("Start useEffect");
    const interval = setInterval(() => {
      console.log("Start interval");

      setRemainingTime((prev) => prev - 100);
    }, 100);

    const timeout = setTimeout(() => {
      console.log("end timeout");
      clearInterval(interval);
      onTimeOut();
    }, timer);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onTimeOut, timer]);

  return (
    <progress id="question-time" value={remainingTime} max={timer}></progress>
  );
}
