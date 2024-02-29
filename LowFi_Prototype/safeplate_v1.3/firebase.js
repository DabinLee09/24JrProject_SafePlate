import { getAuth } from '@firebase/auth';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import firebase from 'firebase';

//npm install --save @react-native-firebase/app
//npm install -g firebase-tools             
//npx expo install firebase   
//npm install firebase     
//npx expo install @react-native-firebase/app
//npx expo install @react-native-firebase/auth @react-native-firebase/crashlytic


// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChDL37Yfeib3GlbnmlFbMRQMHoZkN2E30",
  authDomain: "safeplatetest.firebaseapp.com",
  projectId: "safeplatetest",
  storageBucket: "safeplatetest.appspot.com",
  messagingSenderId: "859914768732",
  appId: "1:859914768732:web:b0793432bc7a32fa363199",
  measurementId: "G-7ZJG16C8D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);