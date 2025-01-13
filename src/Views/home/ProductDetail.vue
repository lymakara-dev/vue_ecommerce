<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p><strong>Price:</strong> ${{ product.price }}</p>
    <p><strong>Description:</strong> {{ product.description }}</p>
    <router-link to="/products">Back to Products</router-link>
  </div>
  <div v-else>
    <p>Product not found!</p>
    <router-link to="/products">Back to Products</router-link>
  </div>
</template>

<script>
import products from "@/stores/products";

export default {
  props: {
    productId: {
      type: String,
      required: true,
    },
  },

  data() {
    return products;
  },

  computed: {
    product() {
      // Find the product based on the route parameter `productId`
      return products.find((item) => item.id === parseInt(this.productId));
    },
  },
};
</script>
