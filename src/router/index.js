import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

import Cart from "@/Views/home/Cart.vue";
import Cartv2 from "@/Views/home/Cartv2.vue";
import PromotionProducts from "@/Views/home/PromotionProducts.vue";

// Grouped Child Routes for Better Readability
const productRoutes = [
  {
    path: "products",
    name: "ProductsList",
    component: () => import("@/Views/home/ProductsList.vue"),
    props: (route) => ({
      selectedCategory: route.query.category || "All",
    }),
  },
  {
    path: "products/:productId",
    name: "ProductDetail",
    component: () => import("@/Views/home/ProductDetail.vue"),
    props: true,
    meta: { requireAuth: true },
  },
];

const cartRoutes = [
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { requireAuth: true },
  },
  {
    path: "/cartv2",
    name: "Cartv2",
    component: Cartv2,
  },
  {
    path: "/shoppingCart",
    name: "ShoppingCart",
    component: () => import("@/components/cart/shoppingCart.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/checkoutShopping",
    name: "CheckoutShopping",
    component: () => import("@/components/cart/checkoutShopping.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/CompleteOrder",
    name: "CompleteOrder",
    component: () => import("@/components/cart/CompleteOrder.vue"),
    meta: { requireAuth: true },
  },
];

const authRoutes = [
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
    name: "SignInV2",
    component: () => import("@/Views/auth/Signinv2.vue"),
  },
  {
    path: "feed",
    name: "Feed",
    component: () => import("@/Views/Feed.vue"),
    meta: { requireAuth: true },
  },
];

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
        children: productRoutes,
      },
      ...cartRoutes,
      {
        path: "/promotion-products",
        name: "PromotionProducts",
        component: PromotionProducts,
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthLayout,
    children: authRoutes,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Improved Auth Guard with Firebase onAuthStateChanged
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requireAuth);

  if (!requiresAuth) return next();

  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    unsubscribe(); // Stop listening after first call

    if (user) {
      next();
    } else {
      alert("You don't have access!");
      next("/auth/signin");
    }
  });
});

export default router;
