const firebaseConfig = {
    apiKey: "AIzaSyC1OHq7ooGconoyZYz-3njjpTvBrkD6YDY",
    authDomain: "fir-workshop-ffa69.firebaseapp.com",
    projectId: "fir-workshop-ffa69",
    storageBucket: "fir-workshop-ffa69.appspot.com",
    messagingSenderId: "838184619237",
    appId: "1:838184619237:web:e4b9bb706ce17dc566d80c"
  };



  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth;
  const storage = firebase.storage();
  
  export { db, auth, storage };