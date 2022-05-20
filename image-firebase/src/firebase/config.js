import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDHVLqY95NeFYYZSR0_5QauRzgYPGCmGl4",
  authDomain: "mygram-1981f.firebaseapp.com",
  projectId: "mygram-1981f",
  storageBucket: "mygram-1981f.appspot.com",
  messagingSenderId: "545492633164",
  appId: "1:545492633164:web:faacd26be0338efab696e9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
