import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }
    
   // state = {//constructor and super is already handled writing the code this way
   //     loading: true
   // };

    unsubscribeFromSnapshot = null;
  
    componentDidMount() {
//      const { updateCollections } = this.props; OPTION to destructure updateCollections
      const collectionRef = firestore.collection('collections');//that's the name of collections defined in the Firebase 
  
      collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);//here we are sending the array got from Firebase
        //sending this method to convert in the format needed to redux to process as object
        this.props.updateCollections(collectionsMap);
        console.log(collectionsMap);
        this.setState({loading: false});
      });
    }
  
    render() {
      const { match } = this.props;
      const { loading }= this.state;
      return (//Route passes match, location and history as props
        <div className='shop-page'>
          <Route  exact path={`${match.path}`} 
                  render={(props) => (<CollectionsOverviewWithSpinner isLoading={loading} {...props}/>)}
          />         
          <Route path={`${match.path}/:collectionId`} 
                 render={(props) => (<CollectionsPageWithSpinner isLoading={loading} {...props}/>)}
          //match.path gives the current url
          />
        </div>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap)),
  });
  
  export default connect(null, mapDispatchToProps)(ShopPage);