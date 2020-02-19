import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSOnEr_nGP0tK41eAmyAVneyKRgx4vQRY',
  authDomain: 'ecommerc-db.firebaseapp.com',
  databaseURL: 'https://ecommerc-db.firebaseio.com',
  projectId: 'ecommerc-db',
  storageBucket: 'ecommerc-db.appspot.com',
  messagingSenderId: '994177476648',
  appId: '1:994177476648:web:803a848cb08411ea886d1d',
  measurementId: 'G-H3988PQZ4K'
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
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
      });
    } catch (error) {
      console.log('Error creating user ', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
