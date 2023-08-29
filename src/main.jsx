import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG5BjpWVMNoXKcA11L1uo19rOANIlUmVs",
  authDomain: "amaranto-home.firebaseapp.com",
  projectId: "amaranto-home",
  storageBucket: "amaranto-home.appspot.com",
  messagingSenderId: "897353213622",
  appId: "1:897353213622:web:f9bfbc72eb425fa75fe817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
    <App />
    </ChakraProvider>
)
