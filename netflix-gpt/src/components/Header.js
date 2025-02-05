import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;


    const handleSignOut = () => {   
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")

          }).catch((error) => {
            // An error happened.
            navigate ("/error")
          });
    };
    
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
    <img  className='h-20' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  
     alt= "NetflixLogo" />
     {user && (<div className='py-4'> 
        <img className='h-10' src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="avatar" />
        <button onClick={handleSignOut} className='bg-red-400 text-white font-bold my-2'> {"Sign Out"}</button>
     </div>)}

    </div>
     
  )
}

export default Header