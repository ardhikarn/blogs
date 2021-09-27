import firebase from "firebase/app";
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyCMgKVfiU0MiIFoL8EkfPqNszR7IFlikyQ",
  authDomain: "fireblogs-d96df.firebaseapp.com",
  projectId: "fireblogs-d96df",
  storageBucket: "fireblogs-d96df.appspot.com",
  messagingSenderId: "1044636066170",
  appId: "1:1044636066170:web:21d0e1710c7b16a36f36c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp }
export default firebaseApp.firestore();
