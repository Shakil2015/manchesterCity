import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database'
var firebaseConfig = {
    apiKey: "AIzaSyDFiZu5xjlJZKdHbULL03enPXntGoaUdzQ",
    authDomain: "mancity-9f80f.firebaseapp.com",
    databaseURL: "https://mancity-9f80f.firebaseio.com",
    projectId: "mancity-9f80f",
    storageBucket: "mancity-9f80f.appspot.com",
    messagingSenderId: "764926267309",
    appId: "1:764926267309:web:de1120c97e38d159d05b24",
    measurementId: "G-01LSRJSN8G"
  };
  firebase.initializeApp(firebaseConfig);
  const firebasedb=firebase.database().ref().child('object');
  firebasedb.on('value', snap=>console.log(snap.val()));



  