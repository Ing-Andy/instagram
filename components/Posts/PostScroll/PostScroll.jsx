import React from 'react'
import Miniprofile from '../../MiniProfile/Miniprofile'
import './PostScroll.css'
import { ArrowUpRightFromSquareIcon, Heart, MessageCircle, PlaneIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function PostScroll({picture,name,nameEmail,post,nblike}) {
    // const MiniProfileData1 = [
    //     {picture:"dsd",name:"andy bryan",nameEmail:"lefistdecathy"},
    //     {picture:"dsd",name:"andy bryan",nameEmail:"lefistdecathy"},
    //     {picture:"dsd",name:"andy bryan",nameEmail:"lefistdecathy"},
    //     {picture:"dsd",name:"andy bryan",nameEmail:"lefistdecathy"},
    // ]
  return (
    <div className='post'>
        <header>
            <Miniprofile picture={picture} name={name} nameEmail={nameEmail} width="100%"/>
        </header>
        <div className='objetPost'>
          <img src={post} alt="" />
        </div>
        <footer>
          <p className='iconePost'>
            <div style={{width:'100px',display:'flex',justifyContent:'space-around'}}><span><Heart/></span><NavLink to="/postComment"><MessageCircle/></NavLink><NavLink><PlaneIcon/></NavLink></div>
            <div><ArrowUpRightFromSquareIcon/></div>
          </p>
          <p className='postnblike'>{nblike}</p>
          <p className='postComment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat tempore nam cumque harum? Repudiandae recusandae quam suscipit vero natus.</p>
        </footer>
    </div>
  )
}
