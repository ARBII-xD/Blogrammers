// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1PImsbOIBqb2p2TF_fSYjEDKufbEe6Xs",
  authDomain: "myblogapp-66025.firebaseapp.com",
  projectId: "myblogapp-66025",
  storageBucket: "myblogapp-66025.appspot.com",
  messagingSenderId: "804627181215",
  appId: "1:804627181215:web:0c588355044eab8d68bcaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider().setCustomParameters({ prompt: "select_account" });


