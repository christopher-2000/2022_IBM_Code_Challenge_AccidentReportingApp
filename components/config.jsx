// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz7NAs51iyKn7fHItpzFSxyEI6NKakPwE",
  authDomain: "accident-reporting-app.firebaseapp.com",
  projectId: "accident-reporting-app",
  storageBucket: "accident-reporting-app.appspot.com",
  messagingSenderId: "631328755010",
  appId: "1:631328755010:web:c3177df3f7380afb298cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
export const db = getDatabase(app);