import React from 'react';
import { connect } from 'react-redux';
import { setCartHidden } from '../../redux/cart/cart.action';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


import './cart-icon.styles.scss';

const CartIcon = ({setCartHidden}) => (
    <div className='cart-icon' onClick={setCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({//only adding the dispatch method into a const to pass it in the connect
    setCartHidden: () => dispatch(setCartHidden())
})

export default connect (null, mapDispatchToProps)(CartIcon);//null because not retrieving the state only setting or toggling
// this allows this component to have access to SET method to Reducer

