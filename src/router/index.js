import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/Views/auth/SignIn.vue";
import SignUp from "@/Views/auth/SignUp.vue";
import HomePage from "@/Views/HomePage.vue";
import Cart from "@/Views/Cart.vue";
import ContactINFO from "@/Views/ContactINFO.vue";



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
    {
      path: "/Cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/Contact",
      name: "contactinform",
      component: ContactINFO,
    },
    
  ],
});

export default router;
