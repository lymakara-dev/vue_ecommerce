<template>
  <div
    class="h-screen w-screen bg-[url('/bg-signin.jpg')] bg-cover bg-center items-center min-h-screen bg-blue-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div
      class="flex items-center justify-center mt-8 sm:mx-auto sm:w-full sm:max-w-md"
    >
      <div
        class="rounded-lg border border-gray-200 bg-white lg:h-[700px] lg:w-[482px] shadow-md flex-col flex h-full items-center justify-center sm:px-4 mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div
          class="flex h-full w-full flex-col justify-center gap-4 p-6 mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div
            class="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4"
          >
            <form class="flex flex-col gap-4 pb-4" @submit.prevent="login">
              <h1 class="text-2xl self-center font-bold">Welcome Back</h1>
              <span class="self-center mb-4"
                >Login with your email & password</span
              >

              <!-- Email Field -->
              <input
                type="email"
                v-model="email"
                placeholder="email@example.com"
                class="px-4 py-2 border rounded-md"
                required
              />

              <!-- Password Field -->
              <input
                type="password"
                v-model="password"
                placeholder="input password"
                class="px-4 py-2 border rounded-md"
                required
              />

              <!-- Error Message -->
              <p v-if="errorMessage" class="text-red-500 text-sm">
                {{ errorMessage }}
              </p>

              <!-- Submit Button -->
              <button
                type="submit"
                class="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                :disabled="isLoading"
              >
                <span
                  class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false"
                >
                  {{ isLoading ? "Signing in..." : "Login" }}
                </span>
              </button>

              <span class="self-center my-4">
                Or you can login with Google or Facebook
              </span>

              <!-- Google Sign-In Button -->
              <button
                type="button"
                @click="signInWithGoogle"
                :disabled="isLoading"
                class="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
              >
                <span
                  class="flex items-center justify-center gap-x-3 font-medium py-1 px-2.5 text-base"
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
                    height="1em"
                    width="1em"
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
                </span>
              </button>

              <!-- Facebook Sign-In Button -->
              <!-- <button
                type="button"
                class="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg my-4"
              >
                <span
                  class="flex items-center justify-center gap-x-3 font-medium py-1 px-2.5 text-base"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                    ></path>
                  </svg>
                  Sign in with Facebook
                </span>
              </button> -->

              <div class="min-w-[270px]">
                <div class="mt-4 text-center">
                  Don't have an account?
                  <a
                    class="text-blue-500 underline hover:text-blue-600"
                    href="/auth/signup"
                    >Create an account here</a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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
    router.push("/");
  } catch (error) {
    console.error("Google sign-in error:", error.code, error.message);
    errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};
</script>
