import React, { useEffect } from "react";
import { useState } from "react";

const TimerClick = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        clicked {count} times
      </button>
    </div>
  );
};

export default TimerClick;
