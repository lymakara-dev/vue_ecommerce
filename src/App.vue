<template>
  <div>
    <router-view></router-view>
    <ToastContainer />
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";
import ToastContainer from "@/shared/components/ToastContainer.vue";
import { useToastStore } from "@/shared/store/toast.store";

const toast = useToastStore();
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
      toast.success("Signed out successfully.");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out. Please try again.");
    });
};

provide("isLoggedIn", isLoggedIn);
provide("handleSignOut", handleSignOut);
</script>
