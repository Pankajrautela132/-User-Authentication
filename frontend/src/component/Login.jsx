import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handlechange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handle = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
             credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(input)
      });

      console.log("Status:", res.status);
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else if (res.status === 401) {
        localStorage.clear();
        alert("Invalid email or password");
        navigate("/login");
      } else {
        alert("Something went wrong");
      }
    }
    catch (errr) {
      console.log(errr)
    }
  }

  return (
    <>
      <form onSubmit={handle} method='post' >
        <input type="email" placeholder='email enter' name='email' onChange={handlechange} value={input.email} />
        <input type="password" placeholder='enter password' name='password' onChange={handlechange} value={input.password} />
        <button type='submit'> login</button>
      </form>
    </>
  )
}
