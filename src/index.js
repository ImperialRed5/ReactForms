import React, { useState } from "react";
import ReactDOM from "react-dom";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");
  };
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div id="container">
      <div id="navbar">Form.js</div>
      <form>{/* your form fields here */}</form>
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById("app"));
