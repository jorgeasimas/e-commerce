import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = (props) =>(
    <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
            {props.items //it's a prop passed from Shop as items={collection.items}
            .filter((item, idx) => idx < 4)
            .map((items) => (
                <CollectionItem key={items.idx} items={items} />//Collection will receive items and key
            ))}
        </div>
    </div>
    
)

export default CollectionPreview;