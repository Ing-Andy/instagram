import React, { useState } from 'react'
import './BlocComment.css'
import Miniprofile from '../../MiniProfile/Miniprofile'
import Comments from '../../comments/comments'
import { ArrowUpRightFromSquareIcon, Heart, MessageCircle, PlaneIcon, Sticker } from 'lucide-react'
import { NavLink } from 'react-router-dom'
// import Input from '../../input/Input'

export default function BlocComment(picture,name,nameEmail,width) {
    const [ismyn, setIsmyn] = useState(false);
    const [input,setInput] = useState('')
    const nblike = "12000 j'aime";
    const personne = [
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'},
        {name:'name',picture:'dsd',comment:'dsdad dsj jas f fs fdjkf kldsan asldksmkl klmfaok kmsiofmd kd;ams ;makdfmddfk dfksd fsdkla wkbddjs fdsjkf dfdfl'}
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
                <div className='IconePost'>
                    <div style={{width:'100px',display:'flex',justifyContent:'space-around'}}><span><Heart/></span><label htmlFor="InputText"><MessageCircle/></label><NavLink><PlaneIcon/></NavLink></div>
                    <div><ArrowUpRightFromSquareIcon/></div>
                </div>
                <p className='postnblike'>{nblike}</p>
                {/* <div> */}
                <div className='Input'> 
                    <div className='monicone' ><img src="monProfile" alt="monicone" /></div>
                    <input 
                        type="text" 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        placeholder='entrew votre commentaire' 
                        id='InputText'
                        // style={{height:'20px',width:'100px',outline:'none'}}
                    />
                    <div className='sticker'><Sticker /></div>
                </div>
            </div>
        </div>
    </div>
  )
}
