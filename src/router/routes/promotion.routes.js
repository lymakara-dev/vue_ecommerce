export const promotionRoutes = [
  {
    path: "/promotion-products",
    name: "PromotionProducts",
    component: () =>
      import("@/modules/promotion/views/PromotionProductsView.vue"),
  },
];
