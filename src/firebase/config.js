import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC-5bgDJDH6190ppEvxOvUSwHtRxoXpMbg",
  authDomain: "miniblog-c6d6e.firebaseapp.com",
  projectId: "miniblog-c6d6e",
  storageBucket: "miniblog-c6d6e.firebasestorage.app",
  messagingSenderId: "304035660080",
  appId: "1:304035660080:web:3d31aa1e16c532b379c8f5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
