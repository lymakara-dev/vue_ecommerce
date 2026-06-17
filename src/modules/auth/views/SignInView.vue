<template>
  <div class="relative flex min-h-screen items-center justify-center bg-[url('/bg-signin.jpg')] bg-cover bg-center px-4 py-12">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-900/50 to-slate-900/60"></div>

    <div class="card relative z-10 w-full max-w-md animate-scale-in p-8">
      <form class="flex flex-col gap-4" @submit.prevent="login">
        <div class="text-center">
          <h1 class="text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p class="mt-1 text-sm text-slate-500">Login with your email &amp; password</p>
        </div>

        <input
          type="email"
          v-model="email"
          placeholder="email@example.com"
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

        <p v-if="errorMessage" class="text-sm text-red-500">
          {{ errorMessage }}
        </p>

        <button type="submit" class="btn-primary w-full" :disabled="isLoading">
          {{ isLoading ? "Signing in..." : "Login" }}
        </button>

        <div class="flex items-center gap-3 text-xs uppercase tracking-wider text-slate-400">
          <span class="h-px flex-1 bg-slate-200"></span>
          Or continue with
          <span class="h-px flex-1 bg-slate-200"></span>
        </div>

        <button
          type="button"
          @click="signInWithGoogle"
          :disabled="isLoading"
          class="btn-secondary w-full"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
            enable-background="new 0 0 48 48"
            height="1.1em"
            width="1.1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Sign in with Google
        </button>

        <p class="text-center text-sm text-slate-500">
          Don't have an account?
          <router-link to="/auth/signup" class="font-semibold text-primary-600 hover:text-primary-700">
            Create an account here
          </router-link>
        </p>
      </form>
    </div>
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
import { useRouter } from "vue-router";
import { useToastStore } from "@/shared/store/toast.store";

const toast = useToastStore();
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isLoading = ref(false);
const router = useRouter();

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
    toast.success("Welcome back!");
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
    toast.error(errorMessage.value);
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
    toast.success("Welcome back!");
    router.push("/");
  } catch (error) {
    console.error("Google sign-in error:", error.code, error.message);

    // The user simply dismissed the popup — not a real error worth shouting about.
    if (
      error.code === "auth/popup-closed-by-user" ||
      error.code === "auth/cancelled-popup-request"
    ) {
      return;
    }

    // Surface the actual cause so misconfiguration is obvious.
    const messages = {
      "auth/operation-not-allowed":
        "Google sign-in is not enabled for this project. Enable it in Firebase Console → Authentication → Sign-in method.",
      "auth/unauthorized-domain":
        "This domain isn't authorized for sign-in. Add it in Firebase Console → Authentication → Settings → Authorized domains.",
      "auth/popup-blocked":
        "Your browser blocked the sign-in popup. Allow popups for this site and try again.",
      "auth/configuration-not-found":
        "Firebase auth is not configured. Check your environment variables and that Google sign-in is enabled.",
    };
    errorMessage.value = messages[error.code] || error.message;
    toast.error(errorMessage.value);
  } finally {
    isLoading.value = false;
  }
};
</script>
