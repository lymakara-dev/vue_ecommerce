<template>
  <button class="backBtn">
    <router-link to="/products">Back</router-link>
  </button>
  <div v-if="product" style="display: flex; flex-direction: column; margin-bottom: 30px">
    <div style="display:flex">
      <DisplayProduct
        :mainImage="product.image"
        :images="product.images"
        @update-main-image="updateMainImage"
      />

      <Description
        :Title="product.name"
        :Description="product.description"
        :price="product.price"
        :tags="product.tags"
      />
    </div>

    <CommentSection :reviews="product.reviews" />

  </div>
  <div v-else>
    <p>Product not found!</p>
    <router-link to="/products">Back to Products</router-link>
  </div>
</template>

<script>
import products from "@/stores/products";
import DisplayProduct from "@/components/productDetail/DisplayProduct.vue";
import Description from "@/components/productDetail/Description.vue";
import CommentSection from "@/components/productDetail/CommentSection.vue";

export default {
  props: {
    productId: {
      type: String,
      required: true,
    },
  },

  components: {
    DisplayProduct,
    Description,
    CommentSection,
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

  methods: {
    updateMainImage(image) {
      const index = this.product.images.indexOf(image);
      if (index !== -1) {
        this.product.images[index] = this.product.image;
        this.product.image = image;
        this.$forceUpdate();
      } 
    },
  }
};
</script>

<style>
.backBtn{
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0 5px;
}
</style>