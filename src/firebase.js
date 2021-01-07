import firebase from 'firebase';
import "firebase/auth";

const app= firebase.initializeApp( {
    apiKey: "AIzaSyAmYg4Inl9NVXzVBRQ5upEYuOnIzj1GUpA",
    authDomain: "fir-auth-development-e14f8.firebaseapp.com",
    projectId: "fir-auth-development-e14f8",
    storageBucket: "fir-auth-development-e14f8.appspot.com",
    messagingSenderId: "743905889269",
    appId: "1:743905889269:web:d3155093c1d7f803226ebc"
  });
  const auth = app.auth();
  export {auth};
  export default app;