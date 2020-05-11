import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDyWko2-3-pHBwsiMbNx70W3oChWxRldxI',
    authDomain: 'chatbox-app-df7ae.firebaseapp.com',
    databaseURL: 'https://chatbox-app-df7ae.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base