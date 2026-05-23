import { initializeApp } from "firebase/app";

import {
    getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeiLeHeAvBzuPswXgkuBHwxpthgfbLyrg",
  authDomain: "bloombalance-5a6a9.firebaseapp.com",
  projectId: "bloombalance-5a6a9",
  storageBucket: "bloombalance-5a6a9.firebasestorage.app",
  messagingSenderId: "810548856662",
  appId: "1:810548856662:web:d23a38e8da2edf273338f7"
};

const app =
  initializeApp(firebaseConfig);

export const db =
  getFirestore(app);