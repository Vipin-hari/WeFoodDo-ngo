import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app'; // Import firebase
import 'firebase/compat/auth'; // Import Firebase Authentication
import 'firebase/compat/database'; // Import Firebase Authentication
import firebaseConfig from './firebaseConfig'; // Import Firebase config

// Configure Firebase persistence before initializing Firebase
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    // Firebase persistence successfully set
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Render your app
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch((error) => {
    console.error('Error setting auth state persistence:', error);
  });
