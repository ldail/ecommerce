import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInContainer} from './sign-in.styles';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions'
import {connect} from 'react-redux'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;
        const {emailSignInStart} = this.props;
        emailSignInStart(email, password);

    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }
    render() {
        const {googleSignInStart} = this.props;
        return (
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormInput name="email" value={this.state.email} label="email" handleChange={(e) => this.handleChange(e)} required />
                    <FormInput name="password" type="password" label="Password" handleChange={(e) => this.handleChange(e)} value={this.state.password} required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);