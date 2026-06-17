<template>
  <div class="mx-4 flex flex-col gap-8 pb-16 pt-6 sm:mx-6 lg:mx-8">
    <Back></Back>

    <div v-if="product" class="flex flex-col gap-12">
      <div class="grid grid-cols-1 gap-8 animate-fade-in-up lg:grid-cols-2">
        <ProductGallery
          :mainImage="product.image"
          :images="product.images"
          @update-main-image="updateMainImage"
        ></ProductGallery>

        <ProductInfo
          :Title="product.name"
          :Description="product.description"
          :price="product.price"
          :tags="product.tags"
          :discount-percentage="product.discountPercentage"
          :rating-point="product.rating"
          :product-id="product.id"
          :image="product.image"
          :add-to-cart="addToCart"
        ></ProductInfo>
      </div>

      <ProductReviews :reviews="product.reviews"></ProductReviews>
    </div>

    <div v-else class="flex flex-col items-center gap-3 py-16 text-center">
      <p class="text-base font-semibold text-slate-900">Product not found</p>
      <router-link to="/products" class="btn-primary">Back to Products</router-link>
    </div>
  </div>
</template>

<script>
import products from "../data/products.js";
import ProductGallery from "../components/ProductGallery.vue";
import ProductInfo from "../components/ProductInfo.vue";
import ProductReviews from "../components/ProductReviews.vue";
import Back from "@/shared/components/Back.vue";
import { useCartStore } from "@/modules/cart/store/cart.store";
import { useToastStore } from "@/shared/store/toast.store";

export default {
  name: "ProductDetailView",
  props: {
    productId: {
      type: String,
      required: true,
    },
  },

  components: {
    ProductGallery,
    ProductInfo,
    ProductReviews,
    Back,
  },

  data() {
    return {
      products,
      cartStore: useCartStore(),
      toast: useToastStore(),
    };
  },

  computed: {
    product() {
      return products.find((item) => item.id === parseInt(this.productId));
    },
  },

  methods: {
    updateMainImage(image) {
      const index = this.product.images.indexOf(image);
      if (index !== -1) {
        this.product.images[index] = this.product.image;
        this.product.image = image;
      }
    },
    addToCart(product) {
      this.cartStore.addItem(product);
      this.toast.success(`${product.name} added to cart.`);
    },
  },
};
</script>