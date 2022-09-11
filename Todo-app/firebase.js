const firebaseConfig = {
    apiKey: "AIzaSyCsOQh-Dx3Iwp6gwAxEFF7zPlNUflh-Y2w",
    authDomain: "to-do-16540.firebaseapp.com",
    projectId: "to-do-16540",
    storageBucket: "to-do-16540.appspot.com",
    messagingSenderId: "87097476982",
    appId: "1:87097476982:web:a21fa431086fa2c1181c57",
    measurementId: "G-QLXN38NC2H"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();