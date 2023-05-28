// Your web app's Firebase configuration
// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD1U7AffJTTbyVUXJQbUDNWgpdu55NxbNc",
  authDomain: "netflix-clone-3f3a3.firebaseapp.com",
  databaseURL: "https://netflix-clone-3f3a3-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-3f3a3",
  storageBucket: "netflix-clone-3f3a3.appspot.com",
  messagingSenderId: "878357107734",
  appId: "1:878357107734:web:779ea14b6f8437ca4f1137",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default firebaseApp;
