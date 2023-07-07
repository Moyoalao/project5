import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Nav } from 'react-bootstrap'



const Authentication = ()=> {
    const[authedUSer,setauthedUser] =useState("")
    
    

    useEffect(()=>{
        const listenAuth=onAuthStateChanged(auth, (user)=>{
            if (user){
                setauthedUser(user)
            }else{
                setauthedUser(null)
            }

        })
        return ()=>{
            listenAuth()
        }
    },[])

    const  userSignOut=()=>{
        signOut(auth)
    }

    return(
    <>
         {authedUSer==null?

            <>
                <Nav.Link href="/Login">Login / Sign Up</Nav.Link>
            </>:

            <>
                <Nav.Link href="/" onClick={userSignOut}>Sign out: {authedUSer && authedUSer.email}</Nav.Link>
            </>

        }

     </>

    )


}

export default Authentication
