<template>
  <div class="flex flex-col gap-8">
    <div class="w-1/6">
      <back></back>
    </div>
    <div class="bg-white border border-gray-200 rounded-lg shadow p-8">
      <div v-if="product">
        <h1>{{ product.name }}</h1>
        <p><strong>Price:</strong> ${{ product.price }}</p>
        <p><strong>Description:</strong> {{ product.description }}</p>
        <router-link to="/products">Back to Products</router-link>
      </div>
      <div v-else>
        <p>Product not found!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Back from "@/components/Back.vue";
import products from "@/stores/products";

export default {
  components: { Back },
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
