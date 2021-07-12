import React from 'react';
import { connect } from 'react-redux';
import { addItems, setCartHidden } from '../../redux/cart/cart.action';
import { selectCarItemsSum } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


import './cart-icon.styles.scss';



const CartIcon = ({setCartHidden, cartItemsSum}) => (
    <div className='cart-icon' onClick={setCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItemsSum}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({//only adding the dispatch method into a const to pass it in the connect
    setCartHidden: () => dispatch(setCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItemsSum: selectCarItemsSum
});

export default connect (mapStateToProps, mapDispatchToProps)(CartIcon);//null because not retrieving the state only setting or toggling
// this allows this component to have access to SET method to Reducer

