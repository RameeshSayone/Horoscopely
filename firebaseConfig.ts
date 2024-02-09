import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCeE1apkQb2LYnyf-0v3xyo_qFuq2Ko30Y",
    authDomain: "horoscopely-5e04f.firebaseapp.com",
    projectId: "horoscopely-5e04f",
    storageBucket: "horoscopely-5e04f.appspot.com",
    messagingSenderId: "368092455829",
    appId: "1:368092455829:web:1ac05865861d1a15f04c9c",
    measurementId: "G-6BMT1W0ME4"
} 
if (!firebase .apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };