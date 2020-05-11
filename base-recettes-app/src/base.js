import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZrBrktt-VZrQrEDh6bal23uj7UBvlBkc",
  authDomain: "recettes-app-46275.firebaseapp.com",
  databaseURL: "https://recettes-app-46275.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
