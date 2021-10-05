import firebase from 'firebase'

const conf = {
  apiKey: "AIzaSyCfv61kC_4PPU4kFbX-Zwmh0Wl7rpcdZY0",
  authDomain: "webchatapp-af069.firebaseapp.com",
  databaseURL: "https://webchatapp-af069.firebaseio.com",
  projectId: "webchatapp-af069",
  storageBucket: "webchatapp-af069.appspot.com",
  messagingSenderId: "879271813273",
  appId: "1:879271813273:web:bc074cdc8ff0fd80db9808",
  measurementId: "G-ZD83JHWTWG"
}
firebase.initializeApp(conf);

export default firebase   