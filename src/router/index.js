import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Cart from "@/Views/home/Cart.vue";
import Cartv2 from "@/Views/home/Cartv2.vue";

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
          },
        ],
      },
      {
        path: "/cart",
        name: "Cart",
        component: Cart,
      },
      {
        path: "/cartv2",
        name: "Cartv2",
        component: Cartv2,
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
