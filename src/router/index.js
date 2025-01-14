import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Cart from "@/Views/home/Cart.vue";
import Cartv2 from "@/Views/home/Cartv2.vue";
import PromotionProducts from "@/Views/home/PromotionProducts.vue";
import { getAuth } from "firebase/auth";

const routes = [
  { path: "/", redirect: "/products" },
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/Views/Home.vue"),
        children: [
          {
            path: "products",
            name: "ProductsList",
            component: () => import("@/Views/home/ProductsList.vue"),
            props: (route) => ({
              selectedCategory: route.query.category || "All", // Pass query params as props
            }),
          },
          {
            path: "products/:productId",
            name: "ProductDetail",
            component: () => import("@/Views/home/ProductDetail.vue"),
            props: true,
            meta: {
              requireAuth: true,
            },
          },
        ],
      },
      {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/cartv2",
        name: "Cartv2",
        component: Cartv2,
      },
      {
        path: "/promotion-products",
        name: "PromotionProducts",
        component: PromotionProducts,
      },
      {
        path: "/shoppingCart",
        name: "ShoppingCart",
        component: () => import("@/components/cart/shoppingCart.vue"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/checkoutShopping",
        name: "CheckoutShopping",
        component: () => import("@/components/cart/checkoutShopping.vue"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/CompleteOrder",
        name: "CompleteOrder",
        component: () => import("@/components/cart/CompleteOrder.vue"),
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthLayout,
    children: [
      {
        path: "signin",
        name: "Signin",
        component: () => import("@/Views/auth/SignIn.vue"),
      },
      {
        path: "signup",
        name: "Signup",
        component: () => import("@/Views/auth/SignUp.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/Views/auth/Register.vue"),
      },
      {
        path: "signinv2",
        name: " SignIn",
        component: () => import("@/Views/auth/Signinv2.vue"),
      },
      {
        path: "feed",
        name: " Feed",
        component: () => import("@/Views/Feed.vue"),
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("you don't have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
