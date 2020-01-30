import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCrC4lOVgaHHS2E-5eVIbZuwTHXffyYh4w",
  authDomain: "crwn-db-ae7c6.firebaseapp.com",
  databaseURL: "https://crwn-db-ae7c6.firebaseio.com",
  projectId: "crwn-db-ae7c6",
  storageBucket: "crwn-db-ae7c6.appspot.com",
  messagingSenderId: "539692770056",
  appId: "1:539692770056:web:bbb5020504dd990ea742bd",
  measurementId: "G-1JMWSN7ZP4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
