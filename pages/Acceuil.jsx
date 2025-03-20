import './Acceuil.css'
import React, { useState } from 'react'
import AsideAcceuil from '../components/AsideAcceuil/AsideAcceuil'
import { NavLink } from 'react-router-dom'
import BlocSug from '../components/Blocs/BlocSug/BlocSug'
import PostScroll from '../components/Posts/PostScroll/PostScroll'
import PostComment from '../components/Posts/PostComments/PostComment'

export default function Acceuil() {
  const [iscomment,setIscomment] = useState(false)
  const SuggestionData1 = [
    {picture:"dsd",name:"andy bryan",Friendname:"lefist",friendpicture:"dsdadssda"},
    {picture:"dsd",name:"andy bryan",Friendname:"lefist",friendpicture:"dsdadssda"},
    {picture:"dsd",name:"andy bryan",Friendname:"lefist",friendpicture:"dsdadssda"},
    {picture:"dsd",name:"andy bryan",Friendname:"lefist",friendpicture:"dsdadssda"},
    {picture:"dsd",name:"andy bryan",Friendname:"lefist",friendpicture:"dsdadssda"},
    {picture:"dsd",name:"andy bryan",Friendname:"lefist",friendpicture:"dsdadssda"},
    {picture:"dsd",name:"andy bryan",Friendname:"lefist",friendpicture:"dsdadssda"},
]
  return (
    <div className='Acceuil'>
      {iscomment && <PostComment />}
        <main className='MainAcceuil'>
          <section className="section1">
            <p className='headerSug'><span>suggestion pour vous </span><NavLink to className="ToutVoirSug"> tout voir</NavLink> </p>
            <ul className='listeSug'>
              {SuggestionData1.map((el,index) => (
                <li key={index}><BlocSug picture={el.picture} name={el.name} friendName={el.Friendname} friendPicture={el.friendpicture} /></li>
              ))}
            </ul>
          </section>
          <section className="section2">
            <ul className="listePost">
              {SuggestionData1.map((el,index) => (
                <li key={index}><PostScroll picture={el.picture} name={el.name} friendName={el.Friendname} friendPicture={el.friendpicture} nblike="299 j'aime" isComment={iscomment} setIsComment={setIscomment}/></li>
              ))}
            </ul>
          </section>
        </main>
        <AsideAcceuil />
    </div>
  )
}
