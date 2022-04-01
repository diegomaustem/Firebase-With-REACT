import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCtPI7be7yFlkAWCQOMXpXXDEyXxtIBhrg",
    authDomain: "curso-72c30.firebaseapp.com",
    projectId: "curso-72c30",
    storageBucket: "curso-72c30.appspot.com",
    messagingSenderId: "815031405",
    appId: "1:815031405:web:0139cfe5426cf806790b64",
    measurementId: "G-330X5FC41E"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  
