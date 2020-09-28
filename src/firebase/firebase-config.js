import firebase from 'firebase/app';
import 'firebase/firestore'; 
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCnyXVJhBiZ775-3l9TUMfNV3v4ClTL-cA",
    authDomain: "ekklesia-14f64.firebaseapp.com",
    databaseURL: "https://ekklesia-14f64.firebaseio.com",
    projectId: "ekklesia-14f64",
    storageBucket: "ekklesia-14f64.appspot.com",
    messagingSenderId: "726598016473",
    appId: "1:726598016473:web:b03e6ed1bcdb2d227e4dc8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}