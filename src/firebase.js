// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAIHP1Mh9vmQ6oUSMfF27lXhFUQZj9hJ7I",
  authDomain: "linkedin-clone-769c2.firebaseapp.com",
  projectId: "linkedin-clone-769c2",
  storageBucket: "linkedin-clone-769c2.appspot.com",
  messagingSenderId: "755316422958",
  appId: "1:755316422958:web:6883bb81991d7ee7a1a2bf",
  measurementId: "G-GZ058QY3N7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
