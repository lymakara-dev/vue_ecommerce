<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="product in products" :key="product.id">
      <ProductCard
        :image="product.image"
        :alt="product.name"
        :name="product.name"
        :description="product.description"
        :rating-point="product.rating"
        :discount-percentage="product.discountPercentage"
        :price="product.price"
        :productId="product.id"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue";
import products from "@/stores/products";
console.log(products);
export default {
  name: "ProductsList",

  components: { ProductCard },

  data() {
    return { products };
  },
};
</script>
