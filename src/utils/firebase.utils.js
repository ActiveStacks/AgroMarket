import {initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD64dofE6CVpfAz6uHEoaKKLOJX9ww_P6A",
    authDomain: "foods-10ff3.firebaseapp.com",
    projectId: "foods-10ff3",
    storageBucket: "foods-10ff3.appspot.com",
    messagingSenderId: "287507820353",
    appId: "1:287507820353:web:51c306403560ec19f6bbc0"
  };
  



  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();


  export const createUserDocumentFromAuth =  async (userAuth) => {

    const userDocRef = doc(db, 'users', 'userAuth.uid');
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
  

  if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
             displayName,
             email,
             createdAt
          });

      }catch(error){
          console.log('error creating the user', error.message);

      }

    }

    return userDocRef;
  }