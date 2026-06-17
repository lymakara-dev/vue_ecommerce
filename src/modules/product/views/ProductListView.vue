<template>
  <div class="flex flex-col gap-4">
    <div class="relative w-full sm:max-w-sm">
      <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
        <svg
          class="h-4 w-4 text-slate-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        v-model="searchQuery"
        type="text"
        class="input-field ps-10"
        placeholder="Search products..."
      />
    </div>

    <ProductSortBar
      :product-category="selectedCategory"
      @sortChanged="updateSort"
    ></ProductSortBar>
  </div>

  <div>
    <div
      v-if="filteredProducts.length"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div
        v-for="(product, index) in filteredProducts"
        :key="product.id"
        class="animate-fade-in-up"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        <ProductCard
          :image="product.image"
          :alt="product.name"
          :name="product.name"
          :description="product.description"
          :rating-point="product.rating"
          :discount-percentage="product.discountPercentage"
          :price="product.price"
          :productId="product.id"
          :add-to-cart="addToCart"
        ></ProductCard>
      </div>
    </div>

    <div v-else class="flex flex-col items-center gap-3 py-16 text-center">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
        <svg
          class="h-8 w-8 text-slate-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <p class="text-base font-semibold text-slate-900">No products found</p>
      <p class="text-sm text-slate-500">Try a different search term or category.</p>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import ProductSortBar from "../components/ProductSortBar.vue";
import { useCartStore } from "@/modules/cart/store/cart.store";
import { useToastStore } from "@/shared/store/toast.store";
import products from "../data/products.js";

export default {
  name: "ProductListView",

  components: { ProductCard, ProductSortBar },
  props: {
    selectedCategory: {
      type: String,
      default: "All",
    },
  },
  data() {
    return {
      products,
      cartStore: useCartStore(),
      toast: useToastStore(),
      selectedFilter: "discount",
      selectedPromotion: null,
      searchQuery: "",
    };
  },
  methods: {
    addToCart(product) {
      this.cartStore.addItem(product);
      this.toast.success(`${product.name} added to cart.`);
    },
    updateSort(sortValue) {
      this.selectedFilter = sortValue;
    },
    filterByPromotion(promotionId) {
      this.selectedPromotion = promotionId; // Update selected promotion
    },
  },
  computed: {
    filteredProducts() {
      let filtered =
        this.selectedCategory === "All"
          ? this.products
          : this.products.filter(
              (product) => product.category === this.selectedCategory
            );

      // Search filter
      if (this.searchQuery.trim()) {
        filtered = filtered.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
        );
      }

      // Filter products by selected promotion
      if (this.selectedPromotion) {
        filtered = filtered.filter(
          (product) => product.promotionId === this.selectedPromotion
        );
      }

      // Create a shallow copy to prevent mutation
      switch (this.selectedFilter) {
        case "discount":
          return [...filtered].sort(
            (a, b) => b.discountPercentage - a.discountPercentage
          );
        case "highestPrice":
          return [...filtered].sort((a, b) => {
            return Number(b.price) - Number(a.price);
          });
        case "lowestPrice":
          return [...filtered].sort((a, b) => {
            return Number(a.price) - Number(b.price);
          });
        case "rating":
          return [...filtered].sort((a, b) => b.rating - a.rating);
        default:
          return filtered;
      }
    },
  },
};
</script>
