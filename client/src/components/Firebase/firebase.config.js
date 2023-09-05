// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvSyWl6nf70gyMEkoJpXSz5tSViZEDfN8",
  authDomain: "weepoka-ecommerce.firebaseapp.com",
  projectId: "weepoka-ecommerce",
  storageBucket: "weepoka-ecommerce.appspot.com",
  messagingSenderId: "167534336776",
  appId: "1:167534336776:web:93e8cd87c701f97ae96abd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;