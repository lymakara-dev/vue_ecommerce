<template>
  <div
    class="h-screen w-screen bg-[url('../assets/images/bg-signup.jpg')] bg-cover bg-center items-center min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h2
          class="mb-7 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Create a new account
        </h2>

        <form @submit.prevent="register">
          <div class="space-y-4">
            <!-- Email Field -->
            <p>
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </p>

            <!-- Password Field -->
            <p>
              <input
                type="password"
                v-model="password"
                placeholder="Password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </p>

            <!-- Error message -->
            <p v-if="errorMessage" class="text-red-500 text-sm">
              {{ errorMessage }}
            </p>
          </div>

          <div class="mt-6">
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              {{ isLoading ? "Submitting..." : "Create Account" }}
            </button>
          </div>
        </form>

        <div class="min-w-[270px] mt-4 text-center text-gray-600">
          Already have an account?
          <a
            class="text-blue-500 underline hover:text-blue-600"
            href="/auth/signin"
            >Sign in here</a
          >
        </div>
      </div>
    </div>
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
