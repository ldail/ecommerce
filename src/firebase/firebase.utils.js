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

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) {
      console.log('no user auth');
      return;
    }

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }
      catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  

  const batch = firestore.batch();
  objectsToAdd.forEach(object => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  await batch.commit();
}

export const convertCollectionSnapshotToMap = (collections) => {
  let newCollection = collections.docs.map(doc => {
    return {title: doc.data().title, items: doc.data().items, id: doc.id, routeName: encodeURI(doc.data().title.toLowerCase())}
  })

  let reduced = newCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})

  console.log(reduced);
  return reduced;
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}
export default firebase;