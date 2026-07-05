import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handle = async (e) => {
    e.preventDefault();

    try {
      const url = await fetch(`${import.meta.env.VITE_API_URL}/register`,  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(input),
      });

      const response = await url.json();
      console.log(response);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const btn = () => {
    navigate("/login");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handle}>
        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={input.name}
          onChange={handlechange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={input.email}
          onChange={handlechange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={input.password}
          onChange={handlechange}
        />

        <button type="submit">Register</button>

        <button
          type="button"
          className="login-btn"
          onClick={btn}
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  );
}