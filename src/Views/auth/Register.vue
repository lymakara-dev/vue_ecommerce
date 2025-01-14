<template>
  <div>
    <h1>Create Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    <p>
      <button @click="register" :disabled="isLoading">
        {{ isLoading ? "Submitting..." : "Submit" }}
      </button>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import router from "@/router";

const email = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

const register = async () => {
  if (password.value.length < 6) {
    errorMessage.value = "Password must be at least 6 characters long.";
    return;
  }

  isLoading.value = true;
  errorMessage.value = "";

  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("Registration successful:", userCredential.user);
    router.push("/");
  } catch (error) {
    console.error("Registration error:", error.code, error.message);
    errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};
</script>
