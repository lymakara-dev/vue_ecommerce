import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
const app = createApp(App);

// Import the functions you need from the SDKs you need
// import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9JmVJc5B9FWKY8vj_ASgf84Pbt3kuBgY",
  authDomain: "ecommerce-151e5.firebaseapp.com",
  projectId: "ecommerce-151e5",
  storageBucket: "ecommerce-151e5.firebasestorage.app",
  messagingSenderId: "758754727483",
  appId: "1:758754727483:web:12b8f01c26c4a27e5aee1e",
  measurementId: "G-Z1L06E2CZ5",
};

// Initialize Firebase
// initializeApp(firebaseConfig);
// console.log("Firebase initialized apps:", getApps());

app.use(createPinia());
app.use(router);

app.mount("#app");
