import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

import React from 'react';

const CartDropDown = () => {
    return (
        <div className="CartDropDown">
            <div className="cart-items">
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropDown;