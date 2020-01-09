import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }
    render() {
        return (
            <div className="SignIn">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormInput name="email" value={this.state.email} label="email" handleChange={(e) => this.handleChange(e)} required />
                    <FormInput name="password" type="password" label="Password" handleChange={(e) => this.handleChange(e)} value={this.state.password} required />

                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;