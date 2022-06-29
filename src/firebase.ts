import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBxl0DkZLAZJLvCIpnzQe2X6pnM5ZjXPIs",
  authDomain: "nuxt-banking-app.firebaseapp.com",
  databaseURL:
    "https://nuxt-banking-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nuxt-banking-app",
  storageBucket: "nuxt-banking-app.appspot.com",
  messagingSenderId: "236398603218",
  appId: "1:236398603218:web:3617aebd50c8033ab8b60b",
  measurementId: "G-7KKRNNMMWF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
