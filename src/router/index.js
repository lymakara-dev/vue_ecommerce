import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/Views/auth/SignIn.vue";
import SignUp from "@/Views/auth/SignUp.vue";
import HomePage from "@/Views/HomePage.vue";
import ProductPage from "@/Views/ProductPage.vue";
import Cart from "@/Views/Cart.vue";
import ContactINFO from "@/Views/ContactINFO.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
      // children:[
      //   {
      //     path: "/product/:productId",
      //     name: "ProductPage",
      //     component: ProductPage,
      //   }
      // ]
    },
    
    {
      path: "/product/:productId",
      name: "ProductPage",
      component: ProductPage,
    },
    // {
    //   path: '/page/:nb',
    //   component: Page,
    //   name: 'page',
    //   children:[
    //     {
    //       path: 'section/:id',
    //       component: Section,
    //       name: 'section',
    //     }
    //   ]
    // },
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


  ],
});

export default router;
