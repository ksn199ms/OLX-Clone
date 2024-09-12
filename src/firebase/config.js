import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBg-r5beEww8pYbBKX5rlkTH_97G--ys3Y",
    authDomain: "olx-clone-5606b.firebaseapp.com",
    projectId: "olx-clone-5606b",
    storageBucket: "olx-clone-5606b.appspot.com",
    messagingSenderId: "561298663110",
    appId: "1:561298663110:web:4988231d05de2e1a89d9c7",
    measurementId: "G-QRHLKT9360"
  };

  export default firebase.initializeApp(firebaseConfig)