// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCaUNgdEkvqivpluozZExstL9rdcaTGV0",
  authDomain: "cruz-torres.firebaseapp.com",
  projectId: "cruz-torres",
  storageBucket: "cruz-torres.appspot.com",
  messagingSenderId: "344401789690",
  appId: "1:344401789690:web:53ed7e378b3aea91397f43",
  measurementId: "G-FVV02X017V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database 
 