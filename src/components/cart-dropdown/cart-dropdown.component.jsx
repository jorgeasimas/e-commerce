import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (//need to retrieve the cartItems from redux in curly brakets
// so it can be passed to CartItem component to render the list we have added 
    <div className='cart-dropdown'>
            <div className='cart-items'>
            {cartItems.map(cartItems => (
                <CartItem key={cartItems.id} items={cartItems} />
            ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
            
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});
    
export default connect(mapStateToProps)(CartDropdown);