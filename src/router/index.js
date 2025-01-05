import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/Views/auth/SignIn.vue";
import SignUp from "@/Views/auth/SignUp.vue";
import HomePage from "@/Views/HomePage.vue";
import ProductPage from "@/Views/ProductPage.vue";
import About from "@/Views/About.vue";
import Contact from "@/Views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    { path: "/about", name: "About", component: About },
    { path: "/contact", name: "Contact", component: Contact },
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
      path: "/product/:id",
      name: "ProductPage",
      component: ProductPage,
    },
  ],
});

export default router;
