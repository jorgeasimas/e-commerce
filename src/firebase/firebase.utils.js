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


  export const creatUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return; //if user not logged in don't do anything

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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ propmt: 'select-account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;