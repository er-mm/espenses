import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmIY_YZdCmATUZRUyPgPcYUobiDsGUN4Q",
  authDomain: "expense-tracker-cdbc8.firebaseapp.com",
  projectId: "expense-tracker-cdbc8",
  storageBucket: "expense-tracker-cdbc8.firebasestorage.app",
  messagingSenderId: "904690621999",
  appId: "1:904690621999:web:a9bc5b491dea63c912f0da",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
