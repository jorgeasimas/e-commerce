import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (//receiving state from redux in curly brackets
    <div className='header'>
        <Link className='logo-container' to='/'>
         <Logo className='logo'/>  
         
        </Link>
        <div className='options'>
        {
            currentUser 
            ? 
            (<div className='option'><span>Hi {currentUser.displayName}, you logged with {currentUser.email}</span></div>)
            :
            (<div className='option'></div>)
        }
            <Link className='option' to ='/shop'>
                SHOP
            </Link>    
            <Link className='option' to ='/shop'>
                CONTACT
            </Link> 
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='/sign-in'>SIGN IN </Link>)
            }
            <CartIcon />
            
        </div>
        {
          hidden ? null :
          <CartDropdown />
        }

        
    </div>
)

//using selectors
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

/**OR 
const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state) 
});

**/

/**user and cart are defined in Root-Reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden 
}); **/

//user and cart are defined in Root-Reducer
//destructure off of state we get user and off of user we get currentUser, off the cart we get hidden
/**const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})**/

export default connect(mapStateToProps)(Header);
//allow the component to have access to current state of a prop