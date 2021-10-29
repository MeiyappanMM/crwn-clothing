import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const Config = {
  apiKey: "AIzaSyC-jVhZDC3WuDaYGiLpb7Wx7-5zWPpb-go",
  authDomain: "crwn-clothing-mmm.firebaseapp.com",
  projectId: "crwn-clothing-mmm",
  storageBucket: "crwn-clothing-mmm.appspot.com",
  messagingSenderId: "248198221824",
  appId: "1:248198221824:web:a3cb7846a8968ae707c8e5",
  measurementId: "G-XW5SMDH93H"
};

// Initialize Firebase
firebase.initializeApp(Config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
// provider.setCustomerParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;