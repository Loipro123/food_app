
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBVJT8XhjGug2Da0L0Jti2BFv9A_D6LdFA",
    authDomain: "commercial-web-app.firebaseapp.com",
    projectId: "commercial-web-app",
    storageBucket: "commercial-web-app.appspot.com",
    messagingSenderId: "836455877581",
    appId: "1:836455877581:web:f93a1074a1c6625b749284",
    measurementId: "G-01EE32KLY4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const createUser = async (userAuth, additionData) => {
    if(!userAuth){
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnap = userRef.get();
    if(!userSnap.exist){
        const {displayName, email} = userAuth;
        const createAt = new Date();
        const user = {displayName,email,createAt,...additionData};
        try {
          userRef.set(user);
        } catch (error) {
          console.log('Create user error: ' + error);
        }
    }
    return userRef;
}


const provider1 = new firebase.auth.GoogleAuthProvider();
provider1.setCustomParameters({prompt:'select_account'});

export const loginWithGoogle = () => auth.signInWithPopup(provider1);

const provider2 = new firebase.auth.FacebookAuthProvider();

export const loginWithFacebook = () => auth.signInWithPopup(provider2);

export const loginWithEmailandPassWord = (email,passwork) => {
    
}
