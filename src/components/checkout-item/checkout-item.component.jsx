import React from 'react';
import './checkout-item.styles.scss';

const CheckOutItem = ({items}) => (//will state from redux
    <div className='checkout-item'>
        <div className = 'image-container'>
            <img src={items.imageUrl} alt='item'/>
        </div>
        
        <span className='name'>{items.name}</span>
        <span className='quantity'>{items.quantity}</span>
        <span className='price'>{items.price}</span>
        <div className='remove-button'>&#10005;</div>

    </div>

)

export default CheckOutItem;