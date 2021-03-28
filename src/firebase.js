import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWWsp6vS4FS5h1V9Ddr9lcKDH_X_4LMAA",
  authDomain: "tweet-me-2021.firebaseapp.com",
  projectId: "tweet-me-2021",
  storageBucket: "tweet-me-2021.appspot.com",
  messagingSenderId: "675765880630",
  appId: "1:675765880630:web:d136cc8a002032a7735597",

  measurementId: "G-5LF5PXLS0G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
