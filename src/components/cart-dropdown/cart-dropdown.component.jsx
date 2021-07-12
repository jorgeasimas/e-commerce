import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history}) => (//need to retrieve the cartItems from redux in curly brakets
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
            <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
            
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
    
export default withRouter(connect(mapStateToProps)(CartDropdown));