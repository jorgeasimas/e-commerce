import react from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsObject } from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(collection => (
                <CollectionPreview key={collection.id}  title={collection.title} 
                routeName={collection.routeName} items={collection.items} image={collection.imageUrl}/>
 
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsObject
  });

  export default connect(mapStateToProps)(CollectionsOverview); 