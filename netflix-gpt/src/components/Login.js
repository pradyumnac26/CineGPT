import React, {useState, useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import  {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(''); 
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSignInForm  = () => {
        setIsSignInForm(!isSignInForm)
        setErrorMessage(""); 
    }

    const handleButtonClick = () => {
        //validate the form data

        const nameValue = isSignInForm ? "" : name.current ? name.current.value : ""; 
        const message = checkValidData(email.current.value, password.current.value, nameValue);
        console.log(message);
        setErrorMessage(message);

        if (message === null) {   
            //send the data to the server
            if (!isSignInForm) {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

    // Signed up 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: name.current.value
              }).then(() => {
                // Profile updated!
                // ...
                const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({uid: user.uid, email: user.email, displayName: name.current.value}))
                navigate('/browse')


              }).catch((error) => {
                // An error occurred
                // ...
              });
              
         
    // ...
  })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
            } else {    
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  console.log(user)
                    navigate('/browse')
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode + "-" + errorMessage)
                });
            }
        }
    }

  return (
    <div>
        <Header />

        <div className='absolute'>   
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg' 
        alt='background image' />
        </div>




    <form onSubmit={e => (e.preventDefault())} className=' w-3/12 bg-black text-white absolute p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4'>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input ref = {name}  type='text' placeholder='Name' className='my-4 p-4 w-full bg-transparent border border-gray-300 rounded-md' />}
        <input ref = {email} type='text' placeholder='Email or phone number ' className='my-4 p-4 w-full bg-transparent border border-gray-300 rounded-md' />
        <input ref = {password} type='password' placeholder='Password' className='my-4 p-4 w-full bg-transparent border border-gray-300 rounded-md' />
        <p className='text-red-500 '>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className = "cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign up now" : "Already a registered user, Click to Sign In"}</p>
    </form>

    </div>
  )
}

export default Login