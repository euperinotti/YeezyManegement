import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQOOzm2eydhNpucb6CfDFqXt1ewInINL8",
    authDomain: "yeezymanegement-30bf7.firebaseapp.com",
    projectId: "yeezymanegement-30bf7",
    storageBucket: "yeezymanegement-30bf7.appspot.com",
    messagingSenderId: "765236544589",
    appId: "1:765236544589:web:d24fae07591cc9d53b0804",
    measurementId: "G-J3PDX681H4"
})

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)

onAuthStateChanged(auth, user =>{
    if (user != null){
        console.log("Logado com sucesso!");
    }else{
        console.log("Algo deu errado");
    }
}) 