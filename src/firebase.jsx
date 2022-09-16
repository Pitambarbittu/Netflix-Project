import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCnqEsmCTooAPD72GbMgMtITSXKNPJsYtY",
  authDomain: "netflix-login-firebase.firebaseapp.com",
  projectId: "netflix-login-firebase",
  storageBucket: "netflix-login-firebase.appspot.com",
  messagingSenderId: "465833923052",
  appId: "1:465833923052:web:9690594dd419551882b0c9",
  measurementId: "G-8Q6VZJJP5T"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};