import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD1agDBIdAzQMyyJ_8lyewQkr797R7fMDw",
  authDomain: "witter-13c92.firebaseapp.com",
  projectId: "witter-13c92",
  storageBucket: "witter-13c92.appspot.com",
  messagingSenderId: "643566860603",
  appId: "1:643566860603:web:48701bd738c2bb5a6d1f1e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
