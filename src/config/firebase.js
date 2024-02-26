import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXxGmn1Y-iTEYJsks3LhG3Plrgd8OZEKk",
  authDomain: "synopsifylink.firebaseapp.com",
  projectId: "synopsifylink",
  storageBucket: "synopsifylink.appspot.com",
  messagingSenderId: "812938414548",
  appId: "1:812938414548:web:bd2aca5b3d7974f76eee41",
  measurementId: "G-YDX7751MEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);