import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

const Login = ({ setIsAuth }) => {
    let navigate = useNavigate();
    const UserSignIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem( "isAuth", true);
            setIsAuth(true);
            navigate('/');
            
        })
    }


    return (
        <>
            <div className='loginPage'>
                <h5 className='textOnlogin'>Sign In with google to continue</h5>
                <button className='login-with-google-btn' onClick={UserSignIn}>
                    Sign in with Google
                </button>


            </div>

        </>
    )
}

export default Login