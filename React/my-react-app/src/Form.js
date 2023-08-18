import "./App.css";
import { useState, useEffect } from "react";
function Form() {
  const [email, setEmail] = useState("");
  const [emailErrortext, setErrorEmailText] = useState("");
  const [passErrortext, setPassErrorEmailText] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [nameErrorText, setNameErrorText] = useState("");

  useEffect(() => {
    console.log(confirmPassword);
    if (confirmPassword !== "") {
      if (password !== confirmPassword) {
        setPassErrorEmailText("passwords are not matching");
      } else {
        setPassErrorEmailText("");
      }
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (email !== "" && validateEmail(email) === false) {
      setErrorEmailText("Invalid Email");
    } else {
      setErrorEmailText("");
    }
  }, [email]);

  useEffect(() => {
    console.log(nameErrorText);
    if (name === "") {
      setNameErrorText("Name is Required");
    } else {
      setNameErrorText("");
    }
  }, [name]);

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  const sumbitData = () => {
    alert("the form is submitted");
  };

  return (
    <form onSubmit={sumbitData}>
      <h1>User Registration From</h1>
      <label className="label">Name</label>
      <input
        type="text"
        className={nameErrorText !== "" ? "error-txt" : "success"}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      />
      {nameErrorText !== "" && <p>{nameErrorText}</p>}
      <label className="label">Email </label>
      <input
        type="email"
        className={emailErrortext !== "" && "error-txt"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Your Email"
      />
      {emailErrortext !== "" && <p>{emailErrortext}</p>}
      <label className="label">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />
      <label className="label">Confirm Password</label>
      <input
        type="password"
        className={passErrortext !== "" && "error-txt"}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />
      {passErrortext !== "" && <p>{passErrortext}</p>}
      <button type="submit">Register</button>
    </form>
  );
}
export default Form;
