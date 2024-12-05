import { createRouter, createWebHistory } from "vue-router";
import SignUp from "@/pages/auth/SignUp.vue";
import SignIn from "@/pages/auth/SignIn.vue";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
  ],
});

export default router;
