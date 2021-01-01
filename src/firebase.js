import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBuitXdAVWcqHLaOaiANeHngAwsMNFIrpw",
  authDomain: "messenger-6955e.firebaseapp.com",
  projectId: "messenger-6955e",
  storageBucket: "messenger-6955e.appspot.com",
  messagingSenderId: "170134251063",
  appId: "1:170134251063:web:c14279db223d325eb4c1b2"
})

const db = firebaseApp.firestore()

export default db