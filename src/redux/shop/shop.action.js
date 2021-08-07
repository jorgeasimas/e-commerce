import ShopActionTypes from './shop.types';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');//that's the name of collections defined in the Firebase 
    dispatch(fetchCollectionsStart());//that changes the isfetching status to true

    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);//here we are sending the array got from Firebase
        //sending to this method above, to convert in the format needed to redux to process as object
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};

/* if redux-thunk middleware is enabled, any time you attempt to dispatch a function instead of an 
object, the middleware will call that function with dispatch method itself as the first argument */