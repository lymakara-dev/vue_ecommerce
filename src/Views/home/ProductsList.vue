<template>
  <RouteStatus
    :product-category="selectedCategory"
    @sortChanged="updateSort"
  ></RouteStatus>

  <div>
    <!-- Product List -->
    <div class="grid grid-cols-4 gap-4">
      <div v-for="product in filteredProducts" :key="product.id">
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
