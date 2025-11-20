import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqrgB6oXmCl18DHU9YX12OK5RSUwvyFbs",
  authDomain: "coder-ecommerce-react-5f598.firebaseapp.com",
  projectId: "coder-ecommerce-react-5f598",
  storageBucket: "coder-ecommerce-react-5f598.firebasestorage.app",
  messagingSenderId: "616848364290",
  appId: "1:616848364290:web:44ecbc7efb65c7c080a81b",
  measurementId: "G-V87GRNS1XC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
