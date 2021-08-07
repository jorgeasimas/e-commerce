import React from 'react';
import {Route} from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.action';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';


import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
    componentDidMount() {
      const { fetchCollectionsStartAsync } = this.props;

      fetchCollectionsStartAsync();
    }
  
    render() {
      const { match, isCollectionLoaded } = this.props;
      return (//Route passes match, location and history as props
        <div className='shop-page'>
          <Route  exact path={`${match.path}`} 
                  render={(props) => (<CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props}/>)}
          />         
          <Route path={`${match.path}/:collectionId`} 
                 render={(props) => (<CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>)}
          //match.path gives the current url
          />
        </div>
      );
    }
  }
  
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded
})

  const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);