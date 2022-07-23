import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyC7XZK02coFnKycAUPaQ3tTJqlWCRYje48",
  authDomain: "socialmedia-9da4f.firebaseapp.com",
  projectId: "socialmedia-9da4f",
  storageBucket: "socialmedia-9da4f.appspot.com",
  messagingSenderId: "996508080486",
  appId: "1:996508080486:web:2242cf36a25e1c6da310a7",
};

export const firebase = Firebase.initializeApp(config);
export const { FieldValue } = (Firebase as any).firestore;
// seed file will be called once
// seedDatabase(firebase);
