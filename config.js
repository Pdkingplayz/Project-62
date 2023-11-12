import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBqbb0JpIff3oig5bDO-ocZcJqoo8b-pZw",
  authDomain: "project-60-907f2.firebaseapp.com",
  databaseURL: "https://project-60-907f2-default-rtdb.firebaseio.com",
  projectId: "project-60-907f2",
  storageBucket: "project-60-907f2.appspot.com",
  messagingSenderId: "8183506743",
  appId: "1:8183506743:web:83d9a7580a15eb12291cb2"
};

let app = firebase.initializeApp(firebaseConfig)

export default app.database()