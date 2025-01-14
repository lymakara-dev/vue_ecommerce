<template>
  <div>
    <h1>Sign In</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    <p>
      <button @click="login" :disabled="isLoading">
        {{ isLoading ? "Signing in..." : "Submit" }}
      </button>
    </p>
    <p>
      <button @click="signInWithGoogle" :disabled="isLoading">
        {{ isLoading ? "Please wait..." : "Sign in with Google" }}
      </button>
    </p>
    <p><a href="/auth/register">Don't have an account? Register</a></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import router from "@/router";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isLoading = ref(false);

const login = async () => {
  if (!email.value || !password.value) {
    errorMessage.value = "Please fill in all fields.";
    return;
  }

  isLoading.value = true;
  errorMessage.value = "";

  try {
    const auth = getAuth();
    const data = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("Login successful:", data.user);
    router.push("/");
  } catch (error) {
    console.error("Login error:", error.code, error.message);
    switch (error.code) {
      case "auth/user-not-found":
        errorMessage.value = "No user found with this email.";
        break;
      case "auth/wrong-password":
        errorMessage.value = "Incorrect password.";
        break;
      default:
        errorMessage.value = error.message;
    }
  } finally {
    isLoading.value = false;
  }
};

const signInWithGoogle = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log("Google sign-in successful:", result.user);
    router.push("/auth/feed");
  } catch (error) {
    console.error("Google sign-in error:", error.code, error.message);
    errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};
</script>
