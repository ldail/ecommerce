import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { CheckoutContainer, CheckoutHeaderContainer } from './checkout-styles';

const Checkout = ({cartItems, total}) => {
    return (
        <CheckoutContainer>
            <CheckoutHeaderContainer>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
                
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem cartItem={cartItem} key={cartItem.id} />
                    )
            }

            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <div className="test-warning">
                <p>*Please use the following test credit card for payments*</p>
                <p>4242 4242 4242 4242 - exp: 01/20 - CVV: 123</p>
            </div>
            <StripeCheckoutButton price={total} />
        </CheckoutContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps, null)(Checkout);