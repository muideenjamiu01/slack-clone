import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbxCQlnNkrt0NuQhemNin31bMizqbXTtk",
  authDomain: "slack-clone-7fa06.firebaseapp.com",
  projectId: "slack-clone-7fa06",
  storageBucket: "slack-clone-7fa06.appspot.com",
  messagingSenderId: "92929227047",
  appId: "1:92929227047:web:d0383865e86e31050d9102",
  measurementId: "G-99FLSLP850",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
