// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_APP_API_KEY_FIREBASE,
  authDomain: 'blog-81e7d.firebaseapp.com',
  projectId: 'blog-81e7d',
  storageBucket: 'blog-81e7d.appspot.com',
  messagingSenderId: '224484256803',
  appId: process.env.VITE_APP_API_KEY_FIREBASE_APP_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
