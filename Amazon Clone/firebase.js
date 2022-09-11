var firebaseConfig = {
    apiKey: "AIzaSyAMmrkFHHlzblEap-24ZcWBY8ZDQlwXlpM",
    authDomain: "clone-two-7bb96.firebaseapp.com",
    projectId: "clone-two-7bb96",
    storageBucket: "clone-two-7bb96.appspot.com",
    messagingSenderId: "303112581251",
    appId: "1:303112581251:web:98a369b109fbb69ae42bb6",
    measurementId: "G-V3TQWC31Y8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();