import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyApTGrf1jGx_4YmLtVDjvc12De57J8OuYs",
  authDomain: "pomodro-app.firebaseapp.com",
  projectId: "pomodro-app",
  storageBucket: "pomodro-app.appspot.com",
  messagingSenderId: "137417745674",
  appId: "1:137417745674:web:b020e04f2d8a1de68386f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

