import firebase from "firebase/app";
import "firebase/database";


const config = {
  apiKey: "AIzaSyDaNnzbTd_wxatoJHXbIr33XDEHci4LG_Q",
  authDomain: "firevuechat-99211.firebaseapp.com",
  projectId: "firevuechat-99211",
  storageBucket: "firevuechat-99211.appspot.com",
  messagingSenderId: "623574080572",
  appId: "1:623574080572:web:9204ed202ae4805c7b3739"
};

const db = firebase.initializeApp(config);
export default db;
