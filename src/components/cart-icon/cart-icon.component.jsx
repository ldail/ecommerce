import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'
import { connect } from 'react-redux';

import {toggleCartHidden } from '../../redux/cart/cart-actions'

import React from 'react';

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className="CartIcon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);