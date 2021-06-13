import {firestore} from '../firebase';

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