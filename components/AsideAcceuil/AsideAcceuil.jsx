import React, { useState } from 'react'
import MiniProfile from '../MiniProfile/Miniprofile'
import { NavLink } from 'react-router-dom'
import './AsideAcceuil.css'

export default function AsideAcceuil() {
    const [ismyn,setImyn] = useState(true)
    const MiniProfileData ={picture:"dsd",name:"andy bryan",nameEmail:"lefistdecathy"}
    
    const MiniProfileData1 = [
        {picture:"dsd",name:"andy bryan",nameEmail:"lefistdecathy"},
        {picture:"dsd",name:"andy bryan",nameEmail:"lefistdecathy"},
        {picture:"dsd",name:"andy bryan",nameEmail:"lefistdecathy"},
        {picture:"dsd",name:"andy bryan",nameEmail:"lefistdecathy"},
    ]
  return (
    <div className='AsideAcceuil'>
        <MiniProfile name={MiniProfileData.name} picture={MiniProfileData.picture} nameEmail={MiniProfileData.nameEmail} ismyn={ismyn} width="100%" />
        <div className='SuggesionAsideAcceuil'><p>suggestions pour vous</p> <NavLink to='/profile' className='voirtout'>voir tout</NavLink></div>
        <ul className='ListeAsideAcceuil'>
            {MiniProfileData1.map((data,index)=>{
                return <li key={index}><MiniProfile name={data.name} picture={data.picture} nameEmail={data.nameEmail} ismyn={!ismyn} /></li>
            })}
        </ul>
        <footer className="FooterAsideAcceuil">
            <div className="LienFooterAsideAcceuil">
            <NavLink to='/profile'>A propos</NavLink>.<NavLink to='/profile'>A propos</NavLink>.
            <NavLink to='/profile'>Aide</NavLink>.<NavLink to='/profile'>presse</NavLink>.
            <NavLink to='/profile'>A propos</NavLink>.<NavLink to='/profile'>emploie</NavLink>.
            <NavLink to='/profile'>A propos</NavLink>.<NavLink to='/profile'>A propos</NavLink>.
            <NavLink to='/profile'>A propos</NavLink>.<NavLink to='/profile'>A propos</NavLink>.
            </div>
            <p>&nbsp; 2025 INSTAGRAM par Ing-Andy</p>
        </footer>
    </div>
  )
}
