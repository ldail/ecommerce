import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInContainer} from './sign-in.styles';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions'
import {connect} from 'react-redux'

function SignIn({emailSignInStart, googleSignInStart}){
    const [userCredentials, setUserCredentials ] = useState({email: '', password: ''})
    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
    
        const {email, password} = userCredentials
        emailSignInStart(email, password);
    
    }
    
    const handleChange = e => {
        const {value, name} = e.target;
    
        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={(e) => handleSubmit(e)}>
                <FormInput name="email" value={email} label="email" handleChange={(e) => handleChange(e)} required />
                <FormInput name="password" type="password" label="Password" handleChange={(e) => handleChange(e)} value={password} required />

                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);