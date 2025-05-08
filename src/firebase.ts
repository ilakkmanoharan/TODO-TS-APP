import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "###############",
  authDomain: "###############",
  projectId: "###################",
  storageBucket: "#########################",
  messagingSenderId: "##########",
  appId: "###########################",
  measurementId: "#############"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
