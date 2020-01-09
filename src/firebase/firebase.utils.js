import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDm3JMHGSu8-hpDLE4OSQFgzEnFMcjE5A4",
    authDomain: "crown-clothing-db-42ce3.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-42ce3.firebaseio.com",
    projectId: "crown-clothing-db-42ce3",
    storageBucket: "crown-clothing-db-42ce3.appspot.com",
    messagingSenderId: "994507383250",
    appId: "1:994507383250:web:7899ecfb38992291eba80b",
    measurementId: "G-44GJHBGZ5L"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;