import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Acceuil from '../pages/Acceuil'
import Aside from '../components/Aside/Aside'
import PostComment from '../components/Posts/PostComments/PostComment'
import './Page.css'

export default function Page() {

  return ( 
    <div className='App'>
        <div className='AsideApp'><Aside /></div>
      <div className='contenueApp'>
        <Routes>
          <Route path='acceuil' element={<Acceuil />} />
          <Route path='postComment' element={<PostComment />} />
        </Routes>
      </div>
    </div>
  )
}
