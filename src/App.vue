<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const auth = getAuth();
const isLoggedIn = ref(false);
const isLoading = ref(true);

onMounted(() => {
  // Monitor authentication state
  onAuthStateChanged(auth, (user) => {
    isLoading.value = false;
    isLoggedIn.value = user;

    if (!user && router.currentRoute.value.meta.requireAuth) {
      router.push("/auth/signin");
    }
  });
});

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      isLoggedIn.value = false;
      router.push("/");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
      alert("Failed to sign out. Please try again.");
    });
};

provide("isLoggedIn", isLoggedIn);
provide("handleSignOut", handleSignOut);
</script>
