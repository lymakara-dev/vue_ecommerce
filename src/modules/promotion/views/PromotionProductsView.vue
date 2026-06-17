<template>
  <div class="mx-4 flex flex-col gap-6 pb-16 pt-6 sm:mx-6 lg:mx-8">
    <router-link to="/products" class="btn-secondary group w-fit">
      <svg
        class="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Back to Home
    </router-link>

    <ProductListView></ProductListView>
  </div>
</template>

<script>
import ProductListView from "@/modules/product/views/ProductListView.vue";

export default {
  name: "PromotionProductsView",
  components: { ProductListView },
};
</script>
