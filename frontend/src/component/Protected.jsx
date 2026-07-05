import React from 'react'
import { Navigate } from "react-router-dom";
export default function Protected({children}) {
    const islogin = localStorage.getItem("isLoggedIn");

  return islogin? children: <Navigate to ="/login"/>
}
