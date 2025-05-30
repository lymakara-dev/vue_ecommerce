<template>
  <div class="flex flex-col gap-4">
    <form class="flex items-center mx-auto w-full">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          v-model="searchQuery"
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Search products..."
          required
        />
      </div>
      <button
        type="submit"
        class="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <svg
          class="w-4 h-4"
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
        <span class="sr-only">Search</span>
      </button>
    </form>

    <RouteStatus
      :product-category="selectedCategory"
      @sortChanged="updateSort"
    ></RouteStatus>
  </div>

  <div>
    <!-- Product List -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="flex justify-center"
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
  </div>
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue";
import RouteStatus from "@/components/RouteStatus.vue";
import cart from "@/stores/cart";
import products from "@/stores/products";

export default {
  name: "ProductsList",

  components: { ProductCard, RouteStatus },
  props: {
    selectedCategory: {
      type: String,
      default: "All",
    },
  },
  data() {
    return {
      products,
      selectedFilter: "discount",
      selectedPromotion: null,
      searchQuery: "",
    };
  },
  methods: {
    addToCart(product) {
      cart.addItem(product);
      console.log("Cart:", cart.items);
    },
    updateSort(sortValue) {
      console.log("Sort value received:", sortValue);
      this.selectedFilter = sortValue; // Update the filter based on emitted value
      console.log("Updated selectedFilter:", this.selectedFilter);
    },
    filterByPromotion(promotionId) {
      this.selectedPromotion = promotionId; // Update selected promotion
    },
  },
  computed: {
    filteredProducts() {
      console.log(this.products.map((product) => product.price));

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
