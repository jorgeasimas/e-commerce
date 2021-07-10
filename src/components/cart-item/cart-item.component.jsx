import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({items}) => (//will state from redux
    <div className='cart-item'>
        <img src={items.imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{items.name}</span>
            <span className='price'>{items.quantity} x USD{items.price}</span>
        </div>

    </div>

)

export default CartItem;