import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const increaseMe = () => {
    setCount(count + 1);
  };
  const decreaseMe = () => {
    setCount(count - 1);
  };
  const resetMe = () => {
    setCount(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section>
        <h1>Count: {count} </h1>
        <button type="button" class="btn" onClick={increaseMe}>
          Increase
        </button>
        <button type="button" class="btn" onClick={decreaseMe}>
          Decrease
        </button>
        <button type="button" class="btn" onClick={resetMe}>
          Reset
        </button>
      </section>
      <section>
        <h2>More Complex Counter</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
