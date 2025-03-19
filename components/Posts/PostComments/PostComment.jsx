import React from 'react'
import BlocComment from '../../Blocs/blocComment/blocComment'
import './PostComment.css'
export default function PostComment({image, comment}) {
  return (
    <div className='PostComment'>
        <div className="containairPostComment">
            <div className="postComment1">
                <img src={image} alt="image" />
            </div>
            <div className="postComment2">
                <BlocComment />
            </div>
        </div>
    </div>
  )
}
