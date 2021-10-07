import React, { useState } from "react";
import { db } from "../../../../firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("login_deatils")
      .add({
        email: email,
        password: password,
      })
      .then(() => {
        alert("Login Successful");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.password);
        setLoader(false);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Login Page</h1>

      <label>Email</label>
      <input
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" style={{ background: loader ? "#ccc" : "#276afb" }}>
        Login
      </button>
    </form>
  );
};

export default Login;