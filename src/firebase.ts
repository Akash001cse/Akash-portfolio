import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEBaZNGsPskXpMRLUSJNxKstHaDk3iNHY",
  authDomain: "portfolio-760f0.firebaseapp.com",
  projectId: "portfolio-760f0",
  storageBucket: "portfolio-760f0.firebasestorage.app",
  messagingSenderId: "486940027327",
  appId: "1:486940027327:web:2ed8b4948d462801f8590a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;