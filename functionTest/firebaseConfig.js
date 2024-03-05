// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, onAuthStateChanged} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuFSt6uGLeRawVJWco-MYsYUWXpx0KIlI",
  authDomain: "functiontest-a3899.firebaseapp.com",
  projectId: "functiontest-a3899",
  storageBucket: "functiontest-a3899.appspot.com",
  messagingSenderId: "360854114919",
  appId: "1:360854114919:web:9640c7110708cf801abac2"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// function getFirestore(FIREBASE_APP: FirebaseApp) {
//     throw new Error('Function not implemented');
// }

onAuthStateChanged(FIREBASE_AUTH, (user) => {
  if (user) {
    //do something
  } else {
    // do something
  }
})