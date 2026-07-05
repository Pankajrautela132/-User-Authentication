import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [search, Setsearch] = useState("")
  const logout = async () => {
    const url = await fetch("http://127.0.0.1:8000/api/logout", {
      method: "post"
    })
    localStorage.removeItem("isLoggedIn")
    navigate("/login")
  }
  const fetchdata = async () => {
    try {
      const url = await fetch("http://127.0.0.1:8000/api/datafetch", {
        method: "get",
        headers: {
          "Contenet-Type": "application/json",
          Accept: "application/json"
        },
      });
      const result = await url.json();
      setData(result);
      console.log(result);
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchdata()
  }, [])


    const filteredData = data.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <div>Dashboard</div>
      <button onClick={logout}>logout</button>
      <input type="text" value={search} onChange={(e) => Setsearch(e.target.value)} placeholder='search name' />
      <div className="container">
        {/* {data.map((student, index) => (
          <div className='child' key={index}>
            <h1> user name:-
              {student.name}
            </h1>
            <br />
            <h1>
              user email :- {student.email}
            </h1>
          </div>

        ))} */}
        <div className="result">
          {filteredData.map((student) => (
    <div className="child" key={student.id}>
      <h2>User Name: {student.name}</h2>
      <h3>User Email: {student.email}</h3>
    </div>
  ))}
        </div>

      </div>
    </>
  )
}
