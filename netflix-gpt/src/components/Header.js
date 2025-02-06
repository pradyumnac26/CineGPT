import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NETFLIX_LOGO, USER_AVATAR } from '../utils/constants';



const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = auth.currentUser;

    useEffect(() => {   
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             const {uid, email, displayName} = user;
             dispatch(addUser({uid:uid, email:email, displayName:displayName}))
             navigate("/browse")
            
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/")
             
            }
          });
          return () => unsubscribe();
    }, []);


    const handleSignOut = () => {   
        signOut(auth).then(() => {
            // Sign-out successful.

          }).catch((error) => {
            // An error happened.
            navigate ("/error")
          });
    };
    
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
    <img  className='h-20' src={NETFLIX_LOGO}
     alt= "NetflixLogo" />
     {user && (<div className='py-4'> 
        <img className='h-10' src={USER_AVATAR} alt="avatar" />
        <button onClick={handleSignOut} className='bg-red-400 text-white font-bold my-2'> {"Sign Out"}</button>
     </div>)}

    </div>
     
  )
}

export default Header