import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDbXIbPYt54FYChLXLapZ6OEccyAd2itBg",
    authDomain: "blog-212cf.firebaseapp.com",
    databaseURL: "https://blog-212cf.firebaseio.com",
    projectId: "blog-212cf",
    storageBucket: "blog-212cf.appspot.com",
    messagingSenderId: "359422070023",
    appId: "1:359422070023:web:a10ca0f0ac1dc89738c9a2",
    measurementId: "G-MLF1F904ZQ"
    };


firebase.initializeApp(firebaseConfig)
//const googleAuthProvider= new firebase.auth.GoogleAuthProvider();
firebase.auth.Auth.Persistence.NONE;
export {firebase as default};