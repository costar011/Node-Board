import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv1z7qcVsVRk6fanPoHTFX0xMaqUfGWcM",
  authDomain: "board-dedcb.firebaseapp.com",
  databaseURL: "https://board-dedcb.firebaseio.com",
  projectId: "board-dedcb",
  storageBucket: "board-dedcb.appspot.com",
  messagingSenderId: "597233051738",
  appId: "1:597233051738:web:14215b3d03c8a8b5215063",
  measurementId: "G-L8CG1PXT7J"
};

firebase.initializeApp(firebaseConfig);

const firestore = new firebase.firestore();

export { firestore };
