// import auth from "./firebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";


// async function signUpWithEmail(email, password) {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;
//     console.log("User signed up:", user);
//   } catch (error) {
//     console.error("Error signing up:", error);
//   }
// }
document.addEventListener("DOMContentLoaded", function () {
  // Firebase configuration object
  var firebaseConfig = {
    apiKey: "AIzaSyDHdlAtY-ZT20PgJraXJMuIRHan7_cnr-0",
    authDomain: "authentication-39d4b.firebaseapp.com",
    projectId: "authentication-39d4b",
    storageBucket: "authentication-39d4b.appspot.com",
    messagingSenderId: "693900910396",
    appId: "1:693900910396:web:eee46b96bd9db444f14839",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Set up the Google Sign-In provider
  var provider = new firebase.auth.GoogleAuthProvider();

  // Sign up function using Google Sign-In
  function signUpWithGoogle() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log("User signed in:", result.user);
      })
      .catch(function (error) {
        console.error("Error signing in:", error);
      });
  }

  // Add an event listener to the button with the specified ID
  document.getElementById("googleSignUpButton").addEventListener("click", signUpWithGoogle);
});