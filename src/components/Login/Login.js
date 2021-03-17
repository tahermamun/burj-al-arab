import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { handleGoogleSignIn, firebaseInitializeConfig } from './loginManager';


const Login = () => {
    firebaseInitializeConfig()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: '//book/:bedType' } }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res)
                history.replace(from)
            })
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={googleSignIn}>google sign In</button>
        </div>
    );
};

export default Login;