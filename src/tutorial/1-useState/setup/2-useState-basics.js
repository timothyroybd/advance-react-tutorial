import React, { useState } from "react";

const UseStateBasics = () => {
  const handleClick = () => {
    if (text === "Random Title") {
      setText("Hello World!!");
    } else {
      setText("Random Title");
    }
  };
  const [text, setText] = useState("Random Title");
  return (
    <div className="container">
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </div>
  );
};

export default UseStateBasics;
