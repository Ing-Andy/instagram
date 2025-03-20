import React from 'react'
import BlocComment from '../../Blocs/blocComment/blocComment'
import './PostComment.css'
export default function PostComment({image}) {
  return (
    <div className='PostComment'>
        <div className="containairPostComment">
            <div className="postComment1">
                <img src={image} alt="image" />
            </div>
            <div className="postComment2">
                <BlocComment picture="sdd" name="dsadsds" nameEmail="nninini" width="100%" />
            </div>
        </div>
    </div>
  )
}
