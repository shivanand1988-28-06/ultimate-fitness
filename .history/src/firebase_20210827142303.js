import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBaIpaCIuCjeLUoefCe7DVsKC6b2yDtc70",
    authDomain: "ultimatefitness-c4dc2.firebaseapp.com",
    projectId: "ultimatefitness-c4dc2",
    storageBucket: "ultimatefitness-c4dc2.appspot.com",
    messagingSenderId: "917756842388",
    appId: "1:917756842388:web:0156282b2cefba0e32bf81",
    measurementId: "G-TC44X9BS43"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
   const userAuth=firebase.auth();
  
   const projectStorage = firebase.storage();
   const projectFirestore = firebase.firestore();
   const timestamp = firebase.firestore.FieldValue.serverTimestamp;
   export {projectFirestore,projectStorage,timestamp,userAuth};
  