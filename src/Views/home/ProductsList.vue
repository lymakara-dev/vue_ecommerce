<template>
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
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue";
import cart from "@/stores/cart";
import products from "@/stores/products";
console.log(products);
export default {
  name: "ProductsList",

  components: { ProductCard },
  props: {
    selectedCategory: {
      type: String,
      default: "All",
    },
  },
  data() {
    return { products };
  },
  methods: {
    addToCart(product) {
      cart.addItem(product);
      console.log("Cart:", cart.items);
    },
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === "All") {
        return this.products;
      }
      return this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    },
  },
};
</script>
