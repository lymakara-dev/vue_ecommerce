import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

import { homeRoutes } from "./routes/home.routes";
import { cartRoutes } from "./routes/cart.routes";
import { promotionRoutes } from "./routes/promotion.routes";
import { authRoutes } from "./routes/auth.routes";

const routes = [
  { path: "/", redirect: "/products" },
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    children: [...homeRoutes, ...cartRoutes, ...promotionRoutes],
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
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requireAuth);

  if (!requiresAuth) return next();

  const auth = getAuth();

  // Wait for the authentication state to be resolved
  await new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // Stop listening after the first state change
      resolve(user); // Resolve the promise once we have the user
    });
  }).then((user) => {
    if (user) {
      return next(); // User is authenticated, proceed to route
    } else {
      alert("You don't have access!");
      return next("/auth/signin"); // Redirect to signin page if not authenticated
    }
  });
});

export default router;
