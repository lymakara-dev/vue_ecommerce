<template>
  <div>
    <h1>Create Account</h1>
    <p><input type="text" placeholder="Email" v-model="emial" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const email = ref("");
const password = ref("");

const register = () => {
  // need .vlaue because ref()
  createUserWithEmailAndPassword(getAuth(), email.value, password.value);
};

const signInWithGoogle = () => {};
</script>
