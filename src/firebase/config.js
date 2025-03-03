import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBE9gOgQfh-VBmUlOvSFwL_v6U9JtPiqr8",
    authDomain: "login-register-8e002.firebaseapp.com",
    projectId: "login-register-8e002",
    storageBucket: "login-register-8e002.firebasestorage.app",
    messagingSenderId: "361076945363",
    appId: "1:361076945363:web:7c6dbab84a079a0a057f26",
    measurementId: "G-JSJQ78E5Y4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;