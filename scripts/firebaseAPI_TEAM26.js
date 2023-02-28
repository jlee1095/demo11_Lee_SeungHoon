//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDjWP-ijYF3z_eZwm2n5gOjppWlRdHdpp4",
    authDomain: "comp1800-79cbb.firebaseapp.com",
    projectId: "comp1800-79cbb",
    storageBucket: "comp1800-79cbb.appspot.com",
    messagingSenderId: "21551598861",
    appId: "1:21551598861:web:ae252b10ffbfc50d9bf444"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
