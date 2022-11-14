import firebase from 'firebase/app'
import 'firebase/database'
export { database, firebase}

const firebaseConfig = ({
    apiKey: "AIzaSyCQOOzm2eydhNpucb6CfDFqXt1ewInINL8",
    authDomain: "yeezymanegement-30bf7.firebaseapp.com",
    projectId: "yeezymanegement-30bf7",
    storageBucket: "yeezymanegement-30bf7.appspot.com",
    messagingSenderId: "765236544589",
    appId: "1:765236544589:web:d24fae07591cc9d53b0804",
    measurementId: "G-J3PDX681H4"
})

if(!firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig)
}else{
    firebase.app()
}

const database = firebase.database()






