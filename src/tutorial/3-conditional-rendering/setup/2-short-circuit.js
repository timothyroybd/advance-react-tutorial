import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  const [isError, setIsError] = useState(false);
  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>

      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no erroe, swetie!</h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShortCircuit;
