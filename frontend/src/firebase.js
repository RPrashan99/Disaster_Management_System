// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "disaster-management-7d158.firebaseapp.com",
  projectId: "disaster-management-7d158",
  storageBucket: "disaster-management-7d158.appspot.com",
  messagingSenderId: "324259208534",
  appId: "1:324259208534:web:38721e5d5d6fa56f83caf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;