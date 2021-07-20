import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBV05uppLIX_nvXkyGUqXQ-8VFZJcQ8N2k',
  authDomain: 'ecommerce-2d55e.firebaseapp.com',
  projectId: 'ecommerce-2d55e',
  storageBucket: 'ecommerce-2d55e.appspot.com',
  messagingSenderId: '682069321531',
  appId: '1:682069321531:web:bab99b0a16fd6d072c391e',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
