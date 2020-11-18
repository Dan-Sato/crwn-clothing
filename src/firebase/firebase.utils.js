import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWghukuzsWozIIAIWJsqc5Qw0za7z9QVQ",
    authDomain: "crwn-db-c5bc3.firebaseapp.com",
    databaseURL: "https://crwn-db-c5bc3.firebaseio.com",
    projectId: "crwn-db-c5bc3",
    storageBucket: "crwn-db-c5bc3.appspot.com",
    messagingSenderId: "1055001066370",
    appId: "1:1055001066370:web:7a7b122d7589184a32ed9b",
    measurementId: "G-D9G4ZYSLZR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  