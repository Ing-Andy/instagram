import React from 'react'
import './BlocSug.css'

export default function BlocSug({picture,name,friendName,friendPicture}) {
  return (
    <div className='Bloc'>
        <div className='BlocInfo'>
            <div className='ImagePersoBloc'>
                <img src={picture} alt="my pict" />
            </div>
            <p>{name}</p>
            <span>suivie(e) par {friendName}</span>
            <div>
                <img src={friendPicture} alt="" />
            </div>
        </div>
        <div className='SuiviBlocInfo'> suivi </div>
    </div>
  )
}
