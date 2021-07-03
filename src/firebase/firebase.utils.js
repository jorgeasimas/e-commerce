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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ propmt: 'select-account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;