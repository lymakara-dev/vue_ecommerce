import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/Views/auth/SignIn.vue";
import SignUp from "@/Views/auth/SignUp.vue";
import HomePage from "@/Views/HomePage.vue";
import ProductPage from "@/Views/ProductPage.vue";
import Cart from "@/Views/Cart.vue";
import ContactINFO from "@/Views/ContactINFO.vue";
import Success from "@/Views/Success.vue";


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

      path: "/productpage",
      name: "ProductPage",
      component: ProductPage,
    },
  {
      path: "/Cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/contact",
      name: "contactinform",
      component: ContactINFO,
    },

    {
      path: "/Success",
      name: "success",
      component: Success, 
    },
    

  ],
});

export default router;
