import firebase from "firebase";
//import "firebase/firestore";
var config = {
  apiKey: "AIzaSyDvE2HXTDvsLcXUi00S4Iw0hyLgvYDbA4w",
  authDomain: "e-commerce-88c74.firebaseapp.com",
  databaseURL: "https://e-commerce-88c74.firebaseio.com",
  projectId: "e-commerce-88c74",
  storageBucket: "e-commerce-88c74.appspot.com",
  messagingSenderId: "154396194003"
};
export const fb = firebase.initializeApp(config);
