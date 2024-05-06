
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ9CH3smjT2bnDgjVPubTmzoZNn-un5DA",
  authDomain: "base-ropa.firebaseapp.com",
  projectId: "base-ropa",
  storageBucket: "base-ropa.appspot.com",
  messagingSenderId: "502860171474",
  appId: "1:502860171474:web:c2d04421692aff2ec3050b",
  measurementId: "G-21BCQ7E3WQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db} ;