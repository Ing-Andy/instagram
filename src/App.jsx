import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Acceuil from '../pages/Acceuil'
import Aside from '../components/Aside/Aside'
import PostComment from '../components/Posts/PostComments/PostComment'

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <div><Aside /></div>
        <div className='contenueApp'>
          <Routes>
            <Route path='/' element={<Acceuil />} />
            <Route path='/postComment' element={<PostComment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
