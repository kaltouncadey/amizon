import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJKrA64SplCl1QjE_kM2SUjHz9IkHgf_c",
  authDomain: "challange-c59ed.firebaseapp.com",
  projectId: "challange-c59ed",
  storageBucket: "challange-c59ed.appspot.com",
  messagingSenderId: "701230470089",
  appId: "1:701230470089:web:e5dc561df6b764a88ace18",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };
