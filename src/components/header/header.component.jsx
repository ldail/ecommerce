import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils'
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import {selectCurrentUser} from '../../redux/user/user-selectors';
import {selectCartHidden} from '../../redux/cart/cart-selectors';

const Header = ({hidden, currentUser}) => {
    return (
        <div className="Header">
            <Link className="Logo-container" to="/">
                <Logo className="Logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                { currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/signin">SIGN IN</Link>}
                <CartIcon />
            </div>
         {hidden ? null : <CartDropDown /> }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);