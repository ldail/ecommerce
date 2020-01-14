import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart-selectors'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import {CartDropDownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'

const CartDropDown = ({cartItems, history, dispatch}) => {
    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? 
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        : <EmptyMessage>Your cart is empty</EmptyMessage>
                }   
            </CartItems>
            <CustomButton onClick={() => {
            dispatch(toggleCartHidden())
            history.push('/checkout')
        }}>GO TO CHECKOUT</CustomButton>
        </CartDropDownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));