import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [input, setInput] = useState({
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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handle} className="login-form">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={input.email}
          onChange={handlechange}
        />

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={input.password}
          onChange={handlechange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}