import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/Views/auth/SignIn.vue";
import SignUp from "@/Views/auth/SignUp.vue";
import HomePage from "@/Views/HomePage.vue";
import ProductPage from "@/Views/ProductPage.vue";
import Cart from "@/Views/Cart.vue";
import ContactINFO from "@/Views/ContactINFO.vue";
import ShoppingCart from "@/components/cart/shoppingCart.vue";
import Navbar2 from "@/components/common/Navbar2.vue";
import checkoutShopping from "@/components/cart/checkoutShopping.vue";

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
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/contact",
      name: "contactinform",
      component: ContactINFO,
    },

    {
      path: "/productpage",
      name: "ProductPage",
      component: ProductPage,
    },
    {
      path: "/shoppingcart",
      name: "shoppingCart",
      component: ShoppingCart,
    },
    {
      path: "/Navbar2",
      name: "Navbar2",
      component: Navbar2,
    },
    {
      path: "/checkoutShopping",
      name: "checkoutShopping",
      component: checkoutShopping,
    },
  ],
});

export default router;
