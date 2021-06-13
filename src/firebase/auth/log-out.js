import {auth} from '../firebase';

export const SignOut = async () => {
   try {
       await auth.signOut();
   } catch (error) {
       console.log('Sign Out Error!');
   }
}