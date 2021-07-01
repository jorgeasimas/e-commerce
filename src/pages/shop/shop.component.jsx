import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                collections.map(collections => (
                <CollectionPreview key={collections.id}  title={collections.title} 
                routeName={collections.routeName} items={collections.items} image={collections.imageUrl}/>
 
        ))}
            </div>);
    }
    
}

export default ShopPage;