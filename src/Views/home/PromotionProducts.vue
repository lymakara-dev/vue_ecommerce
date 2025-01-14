<template>
  <div class="flex flex-col gap-4 m-8">
    <!-- Back Button -->
    <a
      href="/products"
      class="max-w-40 inline-flex items-center text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-blue-300 focus:outline-none"
    >
      <!-- Back Icon -->
      <svg
        class="w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      Back to Home
    </a>

    <!-- Products List -->
    <ProductsList></ProductsList>
  </div>
</template>

<script>
import ProductsList from "./ProductsList.vue";

export default {
  components: { ProductsList },
};
</script>
