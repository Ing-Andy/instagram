import React, { useState } from 'react'
import './BlocComment.css'
import Miniprofile from '../../MiniProfile/Miniprofile'
import Comments from '../../comments/comments'
import { ArrowUpRightFromSquareIcon, Heart, MessageCircle, PlaneIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function BlocComment(picture,name,nameEmail,width,message) {
    const [ismyn, setIsmyn] = useState(false);
    const [input, setInput] = useState('');
    const nblike = "12000 j'aime";
    const personne = [
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf ddjs fdsjkf dfdfl'}
    ]
  return (
    <div className='blocComment'>
        <div className="blocComment2">
            <div className='headerPost'>
                <Miniprofile picture={picture} name={name} nameEmail={nameEmail} width={width} ismyn={ismyn} />
            </div>
            <div className='divList'>
                <ul className='listComment'>
                    {personne.map((personne, index) => (
                        <li key={index}><Comments picture={personne.picture} name={personne.name} comments={personne.comment} /></li>
                    ))}
                </ul>
            </div>
            <div className='footerComment'>
                <div className='iconePost'>
                    <div style={{width:'100px',display:'flex',justifyContent:'space-around'}}><span><Heart/></span><label htmlFor="monCommentaire"><MessageCircle/></label><NavLink><PlaneIcon/></NavLink></div>
                    <div><ArrowUpRightFromSquareIcon/></div>
                </div>
                <p className='postnblike'>{nblike}</p>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} style={{height:'20px',width:'100px',outline:'none'}} />
            </div>
        </div>
    </div>
  )
}
