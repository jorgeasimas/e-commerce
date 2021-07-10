import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItems } from '../../redux/cart/cart.action';


const CollectionItem = ({items, addItem}) => {//items is a prop passed from CollectionPreview
 //   const {name, price, imageUrl} = items; //items can also be destructured 
    return(
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${items.imageUrl})`
                }}

            />
            <div className='collection-footer'>
                <span className='name'>{items.name}</span>
                <span className='price'>{items.price}</span>
            </div>
            <CustomButton onClick={()=> addItem(items)} inverted>ADD to cart</CustomButton>
        </div>
    )};

const mapDispatchToProps = dispatch => ({//created a new function addItem that receives the dispatch method
    addItem: item => dispatch(addItems(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);