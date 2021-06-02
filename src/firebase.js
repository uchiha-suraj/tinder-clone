import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqVnKBE0yOd-khMsEL4rFzp4ky16YNOvQ",
  authDomain: "tinder-cd7ff.firebaseapp.com",
  projectId: "tinder-cd7ff",
  storageBucket: "tinder-cd7ff.appspot.com",
  messagingSenderId: "756744945636",
  appId: "1:756744945636:web:c60c1a9399473d4b5f91f1"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;