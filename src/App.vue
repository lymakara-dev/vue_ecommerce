<template>
  <div>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const auth = getAuth();
const isLoggedIn = ref(false);
const isLoading = ref(true);

onMounted(() => {
  // Monitor authentication state
  onAuthStateChanged(auth, (user) => {
    isLoading.value = false;
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
      if (router.currentRoute.value.meta.requireAuth) {
        router.push("/auth/signin"); // Redirect to signin for protected routes
      }
    }
  });
});

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      isLoggedIn.value = false;
      router.push("/"); // Redirect to home page
    })
    .catch((error) => {
      console.error("Error signing out:", error);
      alert("Failed to sign out. Please try again.");
    });
};
</script>
