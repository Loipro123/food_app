import {auth} from '../firebase';


export const LoginWithEmail = async (email,password) => {
    await auth.signInWithEmailAndPassword(email,password);
}