import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { setCartHidden } from '../../redux/cart/cart.action';


import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, setCartHidden}) => (//need to retrieve the cartItems from redux in curly brakets
// so it can be passed to CartItem component to render the list we have added 
    <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                (cartItems.length)
                ?
                cartItems.map(cartItems => (
                    <CartItem key={cartItems.id} items={cartItems} />
                ))
                :
                <span className='empty-message'>YOUR CART IS EMPTY</span>
            }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                setCartHidden();
            }}>
                GO TO CHECKOUT</CustomButton>
            
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({//only adding the dispatch method into a const to pass it in the connect
    setCartHidden: () => dispatch(setCartHidden())
})
    
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));