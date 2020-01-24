import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import React, { useState} from 'react';
import { SignUpContainer } from './sign-up.styles';
import { connect } from 'react-redux';
import {signUpStart} from '../../redux/user/user-actions'

function SignUp({signUpStart}) {
    const [userInfo, setUserInfo] = useState({displayName: '', email: '', password: '', confirmPassword: ''})

    const {displayName, email, password, confirmPassword} = userInfo;

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert(`Passwords don't match`);
            return;
        }

        try {
            signUpStart(email, password, displayName);
        }
        catch(error) {
            console.error(error);
        }
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setUserInfo({...userInfo, [name]: value});
    }

    return (
        <SignUpContainer>
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required />
                <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
                <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
                <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required />

                <CustomButton type="submit">Sign up</CustomButton>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);