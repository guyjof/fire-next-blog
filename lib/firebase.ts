import { getApps, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBk7gPEO7zPbVykbdW53Y88C7Ay_Olm3GQ',
    authDomain: 'nextfire-d8793.firebaseapp.com',
    projectId: 'nextfire-d8793',
    storageBucket: 'nextfire-d8793.appspot.com',
    messagingSenderId: '614074242076',
    appId: '1:614074242076:web:9dcb81cc73feaefa597bd9',
    measurementId: 'G-0777791DSY'
};

// Initialize Firebase
if (!getApps().length) {
    initializeApp(firebaseConfig);
}

// Auth exports
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore();

// Storage exports
export const storage = getStorage();
