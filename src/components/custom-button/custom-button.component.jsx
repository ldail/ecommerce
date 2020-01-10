import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <button className={`CustomButton ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;