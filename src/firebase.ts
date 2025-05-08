import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm0sdz3d0_JNbKGd3IBEgPGNywuuf7aPk",
  authDomain: "todo-ts-app-59ba0.firebaseapp.com",
  projectId: "todo-ts-app-59ba0",
  storageBucket: "YOUR_PROJECT_ID.appspot.todo-ts-app-59ba0.firebasestorage.app",
  messagingSenderId: "712278425855",
  appId: "1:712278425855:web:93c466eee1a8e8d2728cca",
  measurementId: "G-SZZQXGQ7MX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);