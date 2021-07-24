import firebase from "firebase/app";
import "firebase/database";


const config = {
  apiKey: "AIzaSyDYAZmDOt0cexkldIXh4u9AJZFIRp9UZWg",
  authDomain: "biran-mevn.firebaseapp.com",
  projectId: "biran-mevn",
  storageBucket: "biran-mevn.appspot.com",
  messagingSenderId: "987326901148",
  appId: "1:987326901148:web:488779fcd14bf9aaaaf659"
};

const db = firebase.initializeApp(config);
export default db;
