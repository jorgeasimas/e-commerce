import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDFwUlNjtmfIF9OoOL66SyIrmp-oK-GFXI",
    authDomain: "e-commerce-623c9.firebaseapp.com",
    projectId: "e-commerce-623c9",
    storageBucket: "e-commerce-623c9.appspot.com",
    messagingSenderId: "351898532232",
    appId: "1:351898532232:web:f87254e23d57dda28ae23d",
    measurementId: "G-2CPECFQM18"
  };

  firebase.initializeApp(config);

  export const creatUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return; //if it's not null procede if user is null (not logged in) don't do anything

    const userRef = firestore.doc(`users/${userAuth.uid}`);//passes the reference based on user uid on that location

    const snapShot = await userRef.get();//assync request and gets the snapshot - SnapShot simply represents the data

    if(!snapShot.exists){//with "exists" props wich tells if there's any data there (if it is already inside the Database)
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({//any CRUD method is only performed with documentRef
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
    }
  }
  return userRef;

  };

// this was implemented only to add the original collections to the Firestore   
export const addCollectionsAndDocuments = async (collectionKey, objetcsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);//batch is way to group a call in only one request

  const batch = firestore.batch();
  objetcsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    
  });

  return await batch.commit();

}

export const convertCollectionsSnapshotToMap = (collections) => {//will get the array from snpashot 
  // create a new array with routeName, id, title and items (as routeName is used to navegate in the front-end)
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();//destructuring title and items from doc.data to use them later 
    //to create routeName
                return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items
              };
  });
  //now we want to return object with title as the key of object >>> there is an example below
  return transformedCollection.reduce((accumulator, collection) => {//reduce method will set the first value as the title
    //of collection that is being passed
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator; 
  }, {});//second parameter in the reduce method passing an empty object as initial accumulator
};

/*let realEstate = [
    {
        id: 'aa',
        name: 'Vancouver Luxury Apartments',
        price: 450000
    },
    {
        id: 'ss',
        name: 'Calgary Housing',
        price: 330000
    },
    {
        id: 'rr',
        name: 'AGM Apartments',
        price: 300000
    }
];


function reducer(acc, cur) {
    return {...acc, [cur.id]: cur}
}

let newRealEstate = realEstate.reduce(reducer, {})
console.log(newRealEstate)

*/




  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ propmt: 'select-account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


