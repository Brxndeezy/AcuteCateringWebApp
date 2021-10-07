import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRVTcIezjZxrrBNUD4LvY70bx5iZ8W67w",
    authDomain: "acute-proj-dashboard.firebaseapp.com",
    databaseURL: "https://acute-proj-dashboard-default-rtdb.firebaseio.com",
    projectId: "acute-proj-dashboard",
    storageBucket: "acute-proj-dashboard.appspot.com",
    messagingSenderId: "984502040643",
    appId: "1:984502040643:web:cbdf728f3c5c5974513cf6",
    measurementId: "G-SH192ZWP10",
});

var db = firebaseApp.firestore();

export { db };