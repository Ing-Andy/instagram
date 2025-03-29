// import React, { useState } from 'react'
// import { auth } from '../../Api/Firebase'
// // import { singInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
// import Connect from '../../Api/Connect'
// import Create from '../../Api/Create'
// import { useNavigate } from 'react-router-dom'
// import './Login.css'

// export default function Login() {
//     const [forConnect, setForConnect] = useState(false)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const handlesubmit = async(e) => {
//         e.preventDefault()
//         if(forConnect){
//             Create(email, password)
//         }
//         else{
//             Connect(email, password)
//         }
//         navigate('/acceuil')
//     }
//     const click = () => {
//         setForConnect(!forConnect)
//     }
//   return (
//     <div className='Login'>
//         <div className='LoginContainer'>
//             <h1 className='LoginContainerTitle'>Instagram</h1>
//             <form onSubmit={handlesubmit}>
//                 <div className="LoginContainerInput">
//                     {forConnect ? <p className='para' >entrer vos informations pour vous connecter</p>:<p className='para' >entrer vos informations pour vous inscrire</p>}
//                     <label htmlFor="Email"> Email </label>
//                     <input type="text"
//                             id="Email"
//                             placeholder="enter your email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <label htmlFor="Passsword"> Passsword </label>
//                     <input type="password"
//                         id='Passsword'
//                         placeholder='enter your password'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 {forConnect ? <button type='submit' className='LoginContainerButton'>Inscription</button> : <button type='submit' className='LoginContainerButton'>Connect</button>}
//             </form>
//             {forConnect ? (<div className='params' ><span className='yo'>Connectez vous</span><button onClick={click} className='lien'> ici </button> </div>) : (<div className='params'><span className='yo'>inscrivez vous</span> <button onClick={click} className='lien'> ici </button> </div>)}
//             <p>andy est le meilleur !!</p>
//         </div>
//     </div>
//   )
// }
import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../Api/Firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isForConnect, setIsForConnect] = useState(true);

    const handlesubmit = async (e) => {
        e.preventDefault()
        if(isForConnect){
           await signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
               console.log('connection reussie car andy est un geni! \n votre mail est :',userCredential.user.email);
               navigate("/page");
           }).catch((Error)=>{
               console.error("andy n'est pas ci fort que ca !!\nvotre erreur est:",Error.message )
           })
        }
        else{
            await createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
              console.log('connection reussie car andy est un geni! \n votre mail est :',userCredential.user.email);
              navigate("/page");
            }).catch((error)=>{
              console.error("andy n'est pas ci fort que ca !!\nvotre erreur est:",error.message )
            })
        }  
    }
    const click = () => {
        setIsForConnect(!isForConnect);
    }
  return (
    <div className='Login'>
             <div className='LoginContainer'>
                 <h1 className='LoginContainerTitle'>Instagram</h1>
                 <form onSubmit={handlesubmit}>
                     <div className="LoginContainerInput">
                         {isForConnect ? <p className='para' >entrer vos informations pour vous connecter</p>:<p className='para' >entrer vos informations pour vous inscrire</p>}
                         <label htmlFor="Email"> Email </label>
                         <input type="text"
                                id="Email"
                                placeholder="enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="Passsword"> Passsword </label>
                        <input type="password"
                            id='Passsword'
                            placeholder='enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                         </div>
                 {isForConnect ? <button type='submit' className='LoginContainerButton'>Connection</button> : <button type='submit' className='LoginContainerButton'>Inscription</button>}
             </form>
             {isForConnect ? (<div className='params'><span className='yo'>inscrivez vous</span> <button onClick={click} className='lien'> ici </button> </div>) : (<div className='params' ><span className='yo'>Connectez vous</span><button onClick={click} className='lien'> ici </button> </div>)}
             <p>andy est le meilleur !!</p>
         </div>
    </div>
  )
}
