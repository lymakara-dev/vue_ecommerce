import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const routes = [
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
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    anme: "Auth",
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
