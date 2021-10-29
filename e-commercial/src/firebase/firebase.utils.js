import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyChVWNibZWgO5jvAbyZblONYPQF6EuzFgc",
  authDomain: "ecommercial-db.firebaseapp.com",
  projectId: "ecommercial-db",
  storageBucket: "ecommercial-db.appspot.com",
  messagingSenderId: "615871067584",
  appId: "1:615871067584:web:9a7de59ff9f21edca8c425",
  measurementId: "G-KJTSYVRRQN"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
