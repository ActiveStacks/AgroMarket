import React from 'react';
import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {

    email: '',
    password: '',

}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }



    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }


    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password or username');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with the email');
                    break;
                default:
                    console.log(error);

            }

        }
    }


    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>


                <FormInput label='Email' required type=' email' onChange={handleChange} name='email' value={email} />
                <FormInput label='Password' required type=' password' onChange={handleChange} name='password' value={password} />
                <div className='buttons-container'>
                    <Button type=' submit'>Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
                </div>
            </form >
        </div >
    )
}

export default SignInForm