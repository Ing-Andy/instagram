import React from 'react'
import './App.css'
import Login from '../pages/log/Login'
import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom'
import Protected from '../Api/Protected'
import Page from './Page'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />}/>
        <Route element={<Protected/>}>
          <Route path='/page/*' element={<Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
