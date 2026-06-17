export const cartRoutes = [
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/modules/cart/views/CartView.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
    component: () => import("@/modules/cart/views/ShoppingCartView.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("@/modules/cart/views/CheckoutView.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/order-complete",
    name: "OrderComplete",
    component: () => import("@/modules/cart/views/OrderCompleteView.vue"),
    meta: { requireAuth: true },
  },
];
