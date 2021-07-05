import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBgKXslx9_LUTvlNvUeOdu7Om3n6ZRv0_4",
  authDomain: "vuechat-e5f21.firebaseapp.com",
  projectId: "vuechat-e5f21",
  storageBucket: "vuechat-e5f21.appspot.com",
  messagingSenderId: "438629025318",
  appId: "1:438629025318:web:a0513d91aa0452266408e7",
};

const db = firebase.initializeApp(config);
export default db;
