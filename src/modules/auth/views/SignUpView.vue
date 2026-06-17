<template>
  <div class="relative flex min-h-screen items-center justify-center bg-[url('/bg-signin.jpg')] bg-cover bg-center px-4 py-12">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-900/50 to-slate-900/60"></div>

    <div class="card relative z-10 w-full max-w-md animate-scale-in p-8">
      <h2 class="mb-6 text-center text-2xl font-bold text-slate-900">
        Create a new account
      </h2>

      <form class="flex flex-col gap-4" @submit.prevent="register">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="input-field"
          required
        />

        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="input-field"
          required
        />

        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm Password"
          class="input-field"
          required
        />

        <p v-if="errorMessage" class="text-sm text-red-500">
          {{ errorMessage }}
        </p>

        <button type="submit" :disabled="isLoading" class="btn-primary w-full">
          {{ isLoading ? "Submitting..." : "Create Account" }}
        </button>

        <p class="text-center text-sm text-slate-500">
          Already have an account?
          <router-link to="/auth/signin" class="font-semibold text-primary-600 hover:text-primary-700">
            Sign in here
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import router from "@/router";
import { useToastStore } from "@/shared/store/toast.store";

const toast = useToastStore();

// Refs
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

// Register handler
const register = async () => {
  // Basic validation
  if (password.value.length < 6) {
    errorMessage.value = "Password must be at least 6 characters long.";
    toast.error(errorMessage.value);
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match.";
    toast.error(errorMessage.value);
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
    toast.success("Account created successfully!");
    router.push("/");
  } catch (error) {
    console.error("Registration error:", error.code, error.message);
    errorMessage.value = error.message;
    toast.error("Could not create account. " + error.message);
  } finally {
    isLoading.value = false;
  }
};
</script>
