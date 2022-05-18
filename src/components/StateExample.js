import React, { useState } from "react";

export default function StateExample() {
  const [message, setMessage] = useState("");
  const [messageSize, setMessageSize] = useState("large");

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSizeChange(event) {
    setMessageSize(event.target.value);
  }

  return (
    <div>
      <div>
        Enter a message: <input type="text" onChange={handleMessageChange} />
      </div>
      <span>Choose a message size: </span>
      <select onChange={handleSizeChange}>
        <option>large</option>
        <option>medium</option>
        <option>small</option>
      </select>
      <Message messageSize={messageSize} message={message} />
    </div>
  );
}

function Message(props) {
  if (props.messageSize === "large") {
    return <h1>{props.message}</h1>;
  } else if (props.messageSize === "medium") {
    return <h3>{props.message}</h3>;
  } else {
    return <h5>{props.message}</h5>;
  }
}
