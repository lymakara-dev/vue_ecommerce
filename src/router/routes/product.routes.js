export const productRoutes = [
  {
    path: "products",
    name: "ProductsList",
    component: () => import("@/modules/product/views/ProductListView.vue"),
    props: (route) => ({
      selectedCategory: route.query.category || "All",
    }),
  },
  {
    path: "products/:productId",
    name: "ProductDetail",
    component: () => import("@/modules/product/views/ProductDetailView.vue"),
    props: true,
    meta: { requireAuth: true },
  },
];
