// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAtn7PQVGjcs4zhbIVNvX0kwkYPD-OYhzo",
  authDomain: "fb-clone-d4401.firebaseapp.com",
  databaseURL: "https://fb-clone-d4401.firebaseio.com",
  projectId: "fb-clone-d4401",
  storageBucket: "fb-clone-d4401.appspot.com",
  messagingSenderId: "746725731581",
  appId: "1:746725731581:web:f799360fd876668259e294",
  measurementId: "G-1WPY6925KL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;