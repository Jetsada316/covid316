// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBEsk2LwvIBJMG2hLTJYUxCmPRinsALinM",
    authDomain: "covid19-2ce23.firebaseapp.com",
    projectId: "covid19-2ce23",
    storageBucket: "covid19-2ce23.appspot.com",
    messagingSenderId: "922930888186",
    appId: "1:922930888186:web:3881da2d50116e480a7843",
    measurementId: "G-E56G0XK7PX"
});

const db = getFirestore(firebaseApp);
export default db