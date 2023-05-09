import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

    // // Import the functions you need from the SDKs you need
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
    // import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
    // import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHdlAtY-ZT20PgJraXJMuIRHan7_cnr-0",
  authDomain: "authentication-39d4b.firebaseapp.com",
  projectId: "authentication-39d4b",
  storageBucket: "authentication-39d4b.appspot.com",
  messagingSenderId: "693900910396",
  appId: "1:693900910396:web:eee46b96bd9db444f14839",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

    // // Your web app's Firebase configuration
    // const firebaseConfig = {
    //   apiKey: "AIzaSyDHdlAtY-ZT20PgJraXJMuIRHan7_cnr-0",
    //   authDomain: "authentication-39d4b.firebaseapp.com",
    //   databaseURL: "https://authentication-39d4b-default-rtdb.firebaseio.com",
    //   projectId: "authentication-39d4b",
    //   storageBucket: "authentication-39d4b.appspot.com",
    //   messagingSenderId: "693900910396",
    //   appId: "1:693900910396:web:eee46b96bd9db444f14839"
    // };
  
    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const database = getDatabase(app);
    // const auth = getAuth();