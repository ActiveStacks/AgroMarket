import React from 'react';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Your password do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('User creation encountered an error', error);
            }

        }
    }


    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Display Name' required type=' text' onChange={handleChange} name='displayName' value={displayName} />
                <FormInput label='Email' required type=' email' onChange={handleChange} name='email' value={email} />
                <FormInput label='Password' required type=' password' onChange={handleChange} name='password' value={password} />
                <FormInput label='Confirm Password' required type=' password' onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <Button type=' submit'>Sign Up</Button>
            </form >
        </div >
    )
}

export default SignUpForm