import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdJGAB8WsSUS3hmlZ_iXZHRXyoZF9cCJU",
  authDomain: "task-e3681.firebaseapp.com",
  databaseURL: "https://task-e3681.firebaseio.com",
  projectId: "task-e3681",
  storageBucket: "task-e3681.appspot.com",
  messagingSenderId: "254985879326",
  appId: "1:254985879326:web:bb26a6e1fc793a9559130f",
  measurementId: "G-523BY9Z3LE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

export { auth, googleProvider, facebookProvider, twitterProvider };
