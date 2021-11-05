const firebaseConfig = {
  apiKey: "AIzaSyACpmVgHUdc4Ye2X90nz_JXoe8KB8xeRJ4",
  authDomain: "onlinelibrary-ec6eb.firebaseapp.com",
  projectId: "onlinelibrary-ec6eb",
  storageBucket: "onlinelibrary-ec6eb.appspot.com",
  messagingSenderId: "625690337442",
  appId: "1:625690337442:web:6c72ecc7dc9fee44c0b7fb",
  measurementId: "G-3MVX5J11TG",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

function signInWithGoogle() {
  return auth.signInWithPopup(googleAuthProvider);
}

function signInWithFacebook() {
  return auth.signInWithPopup(facebookAuthProvider);
}
