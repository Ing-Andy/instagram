import React from 'react'
import { NavLink } from 'react-router-dom'
import './Miniprofile.css'

export default function Miniprofile({picture,name,nameEmail,ismyn,width}) {
  return (
    <div className='Miniprofile' style={{width:width}}>
        <div className="image">
            <img src={picture} alt="profile" />
        </div>
        <div className="name">
            <p>{nameEmail}</p>
            <h5>{name}</h5>
        </div>
        <div className='Divbasculer'>
            <NavLink to="/profile" className="basculer">{ismyn ? "basculer": "suivre"}</NavLink>
        </div>
    </div>
  )
}
