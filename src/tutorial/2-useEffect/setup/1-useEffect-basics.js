import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("logging from useEffect");
    if (value > 0) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);
  console.log("render component in the parent outside of useEffect");
  return (
    <React.Fragment>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
