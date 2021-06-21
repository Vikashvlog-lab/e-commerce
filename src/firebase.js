import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBtWZVsqxVl2elrhcVj670q5M003TGtONo",
    authDomain: "e-commerce-57618.firebaseapp.com",
    projectId: "e-commerce-57618",
    storageBucket: "e-commerce-57618.appspot.com",
    messagingSenderId: "862125426018",
    appId: "1:862125426018:web:6a3cdba3fdcf304e38d83b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };