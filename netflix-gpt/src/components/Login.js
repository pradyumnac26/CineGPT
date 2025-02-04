import React, {useState} from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm  = () => {
        setIsSignInForm(!isSignInForm)

    }
  return (
    <div>
        <Header />

        <div className='absolute w-full h-full'>   
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg' 
        alt='background image' />
        </div>




    <form className=' w-3/12 bg-black text-white absolute p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4'>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input type='text' placeholder='Name' className='my-4 p-4 w-full bg-transparent border border-gray-300 rounded-md' />}
        <input type='text' placeholder='Email or phone number ' className='my-4 p-4 w-full bg-transparent border border-gray-300 rounded-md' />
        <input type='password' placeholder='Password' className='my-4 p-4 w-full bg-transparent border border-gray-300 rounded-md' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className = "cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign up now" : "Already a registered user, Click to Sign In"}</p>
    </form>

    </div>
  )
}

export default Login