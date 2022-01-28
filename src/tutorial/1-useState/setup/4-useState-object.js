import React, { useState } from "react";

const UseStateObject = () => {
  const changeMsg = () => {
    setPerson({ ...person, msg: "hello world" });
  };
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    msg: "random message",
  });

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.msg}</h3>
      <button className="btn" onClick={changeMsg}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
