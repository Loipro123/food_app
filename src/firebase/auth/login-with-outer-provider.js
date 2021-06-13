import {auth} from '../firebase';
import firebase from 'firebase';


const provider1 = new firebase.auth.GoogleAuthProvider();
provider1.setCustomParameters({prompt:'select_account'});

export const loginWithGoogle = () => auth.signInWithPopup(provider1);

const provider2 = new firebase.auth.FacebookAuthProvider();

export const loginWithFacebook = () => auth.signInWithPopup(provider2);