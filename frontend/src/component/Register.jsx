import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [input, setInput] = useState({
    'name': '',
    'email': '',
    'password': ''
  })
    const navigate = useNavigate();
  const handlechange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // console.log(input)
  }
  const handle = async (e) => {
    e.preventDefault();
    try {
      const url = await fetch("http://127.0.0.1:8000/register", {
        method: "post",
     
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(input),
      })

      const response = await url.json()
      console.log(response)
      navigate("/login")
    
    }
    catch (err) {
      console.log(err)
    }
  }
  const btn = ()=>{
      navigate("/login")
  }

  return (
    <>
      <form method="post" onSubmit={handle}>

        <input type="text" name='name' placeholder='enter your name' onChange={handlechange} value={input.name} />
        <input type="text" name='email' placeholder='enter your email' onChange={handlechange} value={input.email} />
        <input type="password" name='password' placeholder='enter your password' onChange={handlechange} value={input.password} />
        <button type='submit' >Register</button>
        <button className='log' onClick={btn}> login</button>
      </form>


    </>
  )
}
