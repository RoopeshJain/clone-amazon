import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJI36Uoi8huapEBxw3AOJq8Oc7jZ2gdY0",
  authDomain: "dtechies--clone.firebaseapp.com",
  databaseURL: "https://dtechies--clone.firebaseio.com",
  projectId: "dtechies--clone",
  storageBucket: "dtechies--clone.appspot.com",
  messagingSenderId: "648181948348",
  appId: "1:648181948348:web:8c04f25dfd4e35fc94d5b9",
  measurementId: "G-DMZTFS4JGH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
