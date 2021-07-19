import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selector';


const CollectionPage = ({collection}) => {//collection from mapStateToProps
    const {title, items} = collection; //destructuring collection to title and items
    //collection came from SHOP_DATA which has id: 1, title: 'Hats', routeName: 'hats', items[]
    //Directory (sections) >> Menu-Item (sections) that has onClick props.history.push(`${props.match.url}${props.linkUrl}`)
    return(
    <div className='collection-page'>
     <h2 className='title'>{title}</h2>
        <div className='items'>
            {items.map(item => (
                <CollectionItem key={item.id} items={item}/>
            ))}
         
        </div>   
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollections(ownProps.match.params.collectionId)(state)//match.params.collection passed from 
    //ShopPage that has Route props (match)
})

export default connect(mapStateToProps)(CollectionPage);