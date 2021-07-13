import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';
import { removeItems } from '../../redux/cart/cart.action';
import { decreaseItems } from '../../redux/cart/cart.action';
import { addItems } from '../../redux/cart/cart.action';

const CheckOutItem = ({items, removeItem, addItem, decreaseItem}) => {
    return(//will state from redux
    <div className='checkout-item'>
        <div className = 'image-container'>
            <img src={items.imageUrl} alt='item'/>
        </div>
        
        <span className='name'>{items.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => decreaseItem(items)} >&#10094;</div>
            <span className='value'>{items.quantity}</span>
            <div className='arrow' onClick={() => addItem(items)}>&#10095;</div>
        </span>
        <span className='price'>{items.price}</span>
        <div className='remove-button'onClick={() => removeItem(items)}>&#10005;</div>
    </div>
)
    }

const mapDispatchToProps = dispatch => ({//only adding the dispatch method into a const to pass it in the connect
    removeItem: (item) => dispatch(removeItems(item)),
    decreaseItem: (item) => dispatch(decreaseItems(item)),
    addItem: (item) => dispatch(addItems(item))

})

export default connect(null,mapDispatchToProps)(CheckOutItem);