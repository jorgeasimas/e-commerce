import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = (props) =>(
    <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
            {props.items
            .filter((item, idx) => idx < 4)
            .map((items, idx) => (
                <CollectionItem key={idx} {...items} />
            ))}
        </div>
    </div>
    
)

export default CollectionPreview;