import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';
import Dashboard from './Dashboard';
import Navbar from './component/Navbar';
import Protected from './component/Protected';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={
            <Protected>
              <Dashboard />
            </Protected>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}
