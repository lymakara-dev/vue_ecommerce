<template>
  <div class="flex flex-col gap-5 lg:border-l lg:border-slate-200 lg:pl-8">
    <div>
      <h1 class="text-2xl font-bold text-slate-900 sm:text-3xl">{{ Title }}</h1>
      <RatingStar :rating-point="ratingPoint"></RatingStar>
    </div>

    <p class="text-sm leading-relaxed text-slate-600 sm:text-base">
      {{ Description }}
    </p>

    <div class="flex items-center gap-3">
      <span v-if="hasDiscount" class="text-lg font-semibold text-slate-400 line-through">
        {{ price }}$
      </span>
      <span class="text-3xl font-bold text-primary-600">
        {{ hasDiscount ? discountedPrice : price }}$
      </span>
      <span v-if="hasDiscount" class="badge-accent">-{{ discountPercentage }}%</span>
    </div>

    <div v-if="tags && tags.length" class="flex flex-wrap gap-2">
      <span v-for="(tag, index) in tags" :key="index" class="badge-primary">
        {{ tag }}
      </span>
    </div>

    <button type="button" class="btn-primary mt-2 w-fit" @click="handleAddToCart">
      Add to Cart
    </button>
  </div>
</template>

<script>
import RatingStar from "@/shared/components/RatingStar.vue";

export default {
  name: "ProductInfo",
  components: { RatingStar },
  props: {
    Title: String,
    Description: String,
    tags: Array,
    price: Number,
    discountPercentage: {
      type: Number,
      default: 0,
    },
    ratingPoint: {
      type: Number,
      default: 0,
    },
    productId: Number,
    image: String,
    addToCart: {
      type: Function,
      required: true,
    },
  },
  computed: {
    hasDiscount() {
      return this.discountPercentage > 0;
    },
    discountedPrice() {
      if (!this.hasDiscount) return this.price;
      return (this.price - (this.price * this.discountPercentage) / 100).toFixed(2);
    },
  },
  methods: {
    handleAddToCart() {
      this.addToCart({
        id: this.productId,
        name: this.Title,
        price: this.price,
        description: this.Description,
        image: this.image,
        discountPercentage: this.discountPercentage,
      });
    },
  },
};
</script>
