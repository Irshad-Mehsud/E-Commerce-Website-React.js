// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore ,doc, setDoc , collection, getDocs, deleteDoc, } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDbs9EoZGCLClyx3FrAo8Y9_sYlbttq72s",
  authDomain: "ahmad-e-commerce-app.firebaseapp.com",
  projectId: "ahmad-e-commerce-app",
  storageBucket: "ahmad-e-commerce-app.firebasestorage.app",
  messagingSenderId: "647265281769",
  appId: "1:647265281769:web:f7a9c2b129689d7af83278",
  measurementId: "G-2N4FQQ3P8J",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// ✅ Initialize Firebase services
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

// ✅ Export services
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  storage,
  db,
  doc, 
  collection, 
  getDocs, 
  setDoc,
  deleteDoc
};
// export default app;
