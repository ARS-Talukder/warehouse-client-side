// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa_DP3fQuHPNca8jE-YAL85SeP9ZuQJjA",
  authDomain: "warehouse-6cdc6.firebaseapp.com",
  projectId: "warehouse-6cdc6",
  storageBucket: "warehouse-6cdc6.appspot.com",
  messagingSenderId: "328370943258",
  appId: "1:328370943258:web:c19149839ec0825e9328a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;