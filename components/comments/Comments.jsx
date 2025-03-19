import { Heart } from 'lucide-react'
import React from 'react'
import './comments.css'

export default function Comments({name,picture,comments}) {
  return (
    <div className='Comment'>
        <div className="image">
            <img src={picture} alt="profile" />
        </div>
        <div className='commentaire'>
            <span className='commentComment'>{name}</span>
            <p className='pcomment'>{comments}</p>
        </div>
        <div>
            <Heart />
        </div>
    </div>
  )
}
