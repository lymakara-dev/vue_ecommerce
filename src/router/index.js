import { createRouter, createWebHistory } from "vue-router";
import SignUp from "@/pages/auth/SignUp.vue";
import SignIn from "@/pages/auth/SignIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signin",
      name: "SignIn", // Update name to match the component
      component: SignIn,
    },
    {
      path: "/signup",
      name: "SignUp", // Add a route for SignUp
      component: SignUp,
    },
    
  ],
});

export default router;
