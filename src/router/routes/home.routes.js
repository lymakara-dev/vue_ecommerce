import { productRoutes } from "./product.routes";

export const homeRoutes = [
  {
    path: "",
    name: "Home",
    component: () => import("@/modules/home/views/HomeView.vue"),
    children: productRoutes,
  },
];
