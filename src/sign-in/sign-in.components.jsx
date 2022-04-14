
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../src/utils/firebase.utils';




const SignIn = () => {


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1 >Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup.</button>
        </div>
    )
}

export default SignIn;


